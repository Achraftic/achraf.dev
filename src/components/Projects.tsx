import Project from './Project';
import SectionLayout from './layout/SectionLayout';
import AnimatedLayout from './AnimatedLayout';
import { projects } from '@/data';
export default function Projects() {
    return (
        <AnimatedLayout id="Projects" label="Projects">
        <SectionLayout title="Projects" heading="Check out my latest work" description="I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.">
           
            <div className='grid sm:grid-cols-2 grid-cols-1  gap-5 '>
                {projects.map((project, index) => (
                    
                <Project project={project}  key={index}/>
                ))}
            
            </div>
        </SectionLayout>
        </AnimatedLayout>
    )
}
