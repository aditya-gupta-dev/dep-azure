import React from 'react'

function VideoLayout({
    children
}: {
    children: React.ReactNode
}) {
  return (
    <div className='min-h-screen w-full p-12 flex flex-col items-center'>
        { children }
    </div>
  )
}

export default VideoLayout