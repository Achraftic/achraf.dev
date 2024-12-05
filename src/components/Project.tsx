import React from 'react'
import { Button } from './ui/button'
import Card from './layout/Card'
import image from "../../public/ProjectImage/main.png";
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';

export default function Project() {
    return (
        <Card ishover>
            <div className="flex flex-col items-center">
                <Image
                    src={image}
                    alt="Project Thumbnail"
                    width={300}
                    height={300}
                    className=" h-auto rounded-lg"
                />
            </div>

            <div className=" grid  gap-1.5 p-2 ">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Chat Collect</h2>
                <p className="text-xs dark:text-zinc-300 text-zinc-700 ">Jan 2024 - Feb 2024</p>

                <p className=" text-zinc-500 dark:text-zinc-400 text-xs">
                    With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to
                    collect email addresses from their GPT users. This is a great way to build an audience
                    and monetize your GPT API usage.
                </p>



                <ul className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm  mt-1  flex flex-wrap gap-1 ">
                    <li className='bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1  rounded-3xl'>Next.js</li>
                    <li className='bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1  rounded-3xl'>TypeScript</li>
                    <li className='bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1  rounded-3xl'>PostgreSQL</li>
                    <li className='bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1  rounded-3xl'>Prisma</li>
                    <li className='bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1  rounded-3xl'>TailwindCSS</li>
                    <li className='bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1  rounded-3xl'>Stripe</li>
                    <li className='bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1  rounded-3xl'>Shadcn UI</li>
                    <li className='bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1  rounded-3xl'>Magic UI</li>
                </ul>

                <div className='mb-1 mt-2 flex   gap-1.5'>

                    <Button variant="ghost" size="sm"> <TfiWorld size={10} /> Website</Button>
                    <Button variant="ghost" size="sm"> <FaGithub size={10} /> Github</Button>
                </div>



            </div>
        </Card>
    )
}
