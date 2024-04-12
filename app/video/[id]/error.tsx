'use client'
 
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2 className='text-destructive'>Something went wrong!</h2>
      <Link href="/">
        Go to home page
      </Link>
    </div>
  )
}