'use client'
import React from 'react'
import ProgressBar from '../ProgressBar'

export default function MainLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="relative w-full min-h-screen bg-zinc-50 z-40 dark:bg-zinc-900">

        {children}
        <ProgressBar/>
    </div>
  )
}
