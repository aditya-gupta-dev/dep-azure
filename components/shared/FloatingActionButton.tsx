import React from 'react'
import { Button } from '../ui/button'

interface FloatingActionButtonProps {
    children: React.ReactNode,
    onClick: () => void
}

function FloatingActionButton({ children, onClick }: FloatingActionButtonProps) {
  return (
    <Button className='fixed bottom-8 right-8 w-16 h-16 rounded-full bg-blue-700 hover:bg-neutral-700 text-white flex items-center justify-center shadow-xl lg:w-24 lg:h-24 lg:bottom-12 lg:right-12' onClick={onClick}>
        { children }
    </Button>
  )
}

export default FloatingActionButton