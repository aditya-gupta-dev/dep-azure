import { NextRequest, NextResponse } from 'next/server';
import ytdl from "ytdl-core";

async function handler(req: NextRequest, res: NextResponse) { 
    const url = req.headers.get('url');
    
    if(!url) {
        return NextResponse.json({"message" : "give url"}, { status: 400 });
    }

    const result = await ytdl.getBasicInfo(url);

    const formats: any[] = []

    result.formats.map(format => {
        formats.push({
            quality: format.qualityLabel,
            mimeType: format.mimeType,
            url : format.url,
            itag: format.itag
        })
    })

    return NextResponse.json({
        title: result.videoDetails.title,
        views: result.videoDetails.viewCount,
        id: result.videoDetails.videoId,
        links: formats
    })
}

export { handler as GET }