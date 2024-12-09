
import { Button } from './ui/button'
import Card from './layout/Card'
import { FaGithub } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';
import { project } from '@/data';
import ImageFade from './ui/ImageFade';

export default function Project({ project }: { project: project }) {
    const { title, description, image, technologies, website, github } = project;
    return (
        <Card ishover>
            <ImageFade src={image} />
            <div className=" grid  gap-1.5 p-2 ">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h2>
                <p className="text-xs dark:text-zinc-300 text-zinc-700 ">Jan 2024 - Feb 2024</p>
                <p className=" text-zinc-500 dark:text-zinc-400 text-xs">
                    {description}
                </p>
                <ul className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm  mt-1  flex flex-wrap gap-1 ">
                    {technologies.map((tech, index) => (
                        <li key={index} className='bg-neutral-100 capitalize dark:bg-neutral-800 text-xs px-2 py-1  rounded-3xl'>{tech}</li>
                    ))}
                </ul>
                <div className='mb-1 mt-2 flex   gap-1.5'>
                    {website && <Button asChild variant="ghost" size="sm"> <a target='_blank' href={website}><TfiWorld size={10} /> Website</a> </Button>}
                    {github && <Button asChild variant="ghost" size="sm">
                        <a target='_blank' href={github}> <FaGithub size={10} /> Github </a>
                    </Button>}
                </div>
            </div>
        </Card>

    )
}
