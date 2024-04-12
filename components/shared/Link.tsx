import { Link } from "@/types/Video"
import { Headphones, VideoIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import LinkRedirect from "next/link"
import SaveButton from "./SaveButton"

interface LinkLoaderProps {
    link: Link
}

function LinkLoader({ link } :LinkLoaderProps) {
    
  return (
    <>
    <div className="w-full p-2 flex flex-row items-center justify-between border rounded-lg hover:shadow-xl">
        { link.quality ? (
            <VideoIcon/>
            ) : (
            <Headphones/>
        ) }
        <h1>
            { link.quality ? link.quality : "Audio" }
        </h1>
        <div className="flex items-center gap-2">
            <SaveButton url={link.url}/>
            <LinkRedirect href={link.url} download target="_blank">
            <Button>
                Download
            </Button>
            </LinkRedirect>
        </div>
    </div>
    <Separator/> 
    </>
  )
}

export default LinkLoader