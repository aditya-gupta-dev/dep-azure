"use client";

import axios from 'axios'
import { Button } from "../ui/button"
import React from "react"

interface SaveButtonProps {
    url: string;
}

function SaveButton({ url }: SaveButtonProps) {

    const [text, setText] = React.useState("Save");
    const [isDownloading, setDownloading] = React.useState(false);

    const download = async () => {
        setDownloading(true);
        
    };
    return (
        <>
            { isDownloading && (
                <span className="">30%</span>
            ) }
            <Button variant="outline" disabled onClick={download}>
                {text}
            </Button>
        </>
    )
}

export default SaveButton