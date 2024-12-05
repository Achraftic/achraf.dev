import React from 'react'
import { Button } from '../ui/button'

type SectionLayoutProps = {
    children: React.ReactNode,
    title: string,
    heading: string
    description?: string
}
export default function SectionLayout({ children, title, heading, description }: SectionLayoutProps) {
    return (
        <div>
            <div className='grid place-items-center gap-2.5 my-10'>
                <Button className='h-7 m-auto' asChild>
                    <h1> {title} </h1>
                </Button>
                <h1 className='sm:text-4xl text-3xl md:text-5xl font-bold text-center'> {heading}
                </h1>
                <p className='md:text-xl   text-center md:px-4  text-zinc-500 md:w-3/4 '> {description} </p>
            </div>
            {children}
        </div>
    )
}
