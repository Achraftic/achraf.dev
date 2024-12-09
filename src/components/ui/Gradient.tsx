import { cn } from '@/lib/utils'
import React from 'react'

export default function Gradient({className}:{className?:string}) {
    return (
        <div className= {cn(" w-[15rem] h-[15rem] rounded-full fixed bg-primary bg-opacity-30 left-[-5rem] bottom-[-5rem] blur-[70px] -z-10",className)} ></div>
    )
}
