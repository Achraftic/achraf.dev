import Image from 'next/image'


const ImageFade = ({ src }: { src: string }) => {
    return (
        
        <div className="flex flex-col items-center relative overflow-hidden">
            <Image
                src={src}
                alt="Project Thumbnail"
                width={300}
                height={300}
                className=" h-auto rounded-lg"
                style={{
                    maskImage: `linear-gradient(to top, transparent, black 15%)`,
                }}
            />
        </div>

    )
}

export default ImageFade