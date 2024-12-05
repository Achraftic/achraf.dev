import React from 'react'
import Project from './Project';
import SectionLayout from './layout/SectionLayout';
export default function Projects() {
    return (
        <SectionLayout title="Projects" heading="Check out my latest work" description="I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.">
            <div className='grid sm:grid-cols-2 grid-cols-1  gap-5 '>
                <Project />
                <Project />
                <Project />
            </div>
        </SectionLayout>
    )
}
