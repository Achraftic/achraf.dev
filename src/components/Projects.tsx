
import React from 'react'
import { Button } from './ui/button'
import Project from './Project';
export default function Projects() {
    return (
        <div>
            <div className='grid place-items-center gap-2.5'>


                <Button className='h-7 m-auto' asChild>

                    <h1>My Projects</h1>
                </Button>
                <h1 className='sm:text-4xl text-3xl md:text-5xl font-bold'>Check out my latest work</h1>

                <p className='md:text-xl   text-center px-4 text-zinc-500 md:w-3/4 '>I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
            </div>


            <div className='grid sm:grid-cols-2 grid-cols-1  gap-5 my-10'>
                <Project />
                <Project />
                <Project />

            </div>


        </div>
    )
}
