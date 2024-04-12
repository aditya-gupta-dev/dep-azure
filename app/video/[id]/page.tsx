import LinkLoader from "@/components/shared/Link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { filterVideoData } from "@/lib/helper"
import { Video } from "@/types/Video"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface VideoPageProps {
    params: {
        id: string
    }
}

async function VideoPage({ params }: VideoPageProps) {
    let video: Video | null = null;

    const res = await fetch("https://dep-azure.vercel.app/api/vid", {
        headers: {
            "url": `https://youtu.be/${params.id}`
        },
        cache: "no-store"
    });

    if (res.status < 300) {
        let data = await res.json() as Video;
        video = filterVideoData(data);
    } else if(res.status === 500) {
        throw new Error("unable to fetch data with provided id")
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <Card className="w-[480px]">
                <CardHeader>
                    <CardTitle>Title: {video?.title}</CardTitle>
                    <CardDescription>{video?.views} views</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative">
                        <Image
                            src={`https://i.ytimg.com/vi/${params.id}/maxresdefault.jpg`}
                            alt="Thumbnail"
                            width={1280}
                            height={720}
                            className="rounded-xl shadow-xl"
                        />
                        <Link
                            href={`https://i.ytimg.com/vi/${params.id}/maxresdefault.jpg`}
                            target="_blank"
                        >
                            <Button className="absolute bottom-4 right-4 text-center font-bold px-4 py-2 rounded-md opacity-75" variant="secondary">
                                Download
                            </Button>
                        </Link>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    {video?.links.map((link) => {
                        return (
                            <LinkLoader link={link} key={link.itag} />
                        )
                    })}
                </CardFooter>
            </Card>
        </div>
    )
}

export default VideoPage;