export interface Video {
    title: string;
    views: number;
    id: string;
    links: Link[]
};

export interface Link {
    itag: number;
    url: string;
    mimeType: string;
    quality: string | undefined;
}