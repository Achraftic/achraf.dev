
import { cn } from '@/lib/utils';
import { IoIosArrowRoundForward } from 'react-icons/io';
import BackgroundDots from '../ui/BackgroundDots';

export default function Card({
  children,
  title,
  WithIcon = false,
  ishover = false,
  className,
  bgDots = false
}: Readonly<{ children: React.ReactNode; title?: string; WithIcon?: boolean; className?: string, bgDots?: boolean, ishover?: boolean }>) {
  const hover = "hover:shadow-md shadow-zinc-50/30 dark:shadow-zinc-800 transition duration-200 ease-in-out"
  return (
    <div

      className={cn(
        'p-4 card relative flex flex-col gap-5  rounded-lg  dark:bg-zinc-900/30 bg-zinc-100 bg-opacity-30 shadow-sm border border-opacity-15 dark:border-zinc-800 backdrop-blur-3xl',
        className,
        ishover && hover
      )}
    >

      {bgDots && <BackgroundDots />}

      {title && <h2 className="text-xl font-semibold">{title}</h2>}

      {children}

      {WithIcon && (
        <span className="absolute bottom-4 right-4 cursor-pointer group p-1 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-800 bg-zinc-100 rounded-full">
          <IoIosArrowRoundForward className="group-hover:translate-x-0.5 duration-300" />
        </span>
      )}
    </div>
  );
}
