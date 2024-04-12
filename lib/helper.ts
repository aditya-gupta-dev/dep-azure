import { Link, Video } from "@/types/Video";

export function filterVideoData(video: Video): Video {
    let title: string = "", links: Link[] = [];
    
    title = video.title;
    if(video.title.length > 22) {
        title = `${video.title.substring(0, 22)}...`;    
    }

    video.links.forEach((link) => {
        if(link.mimeType.includes("mp4")) {
            links.push(link)
        }
    })

    return {
        id: video.id,
        title: title,
        views: video.views,
        links: links
    }
}