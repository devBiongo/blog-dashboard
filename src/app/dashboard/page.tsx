/** @format */
'use client';
import CarouselDemo from '@/components/CarouseDemo';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { RxCalendar } from 'react-icons/rx';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { IoBookOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function Page() {
    const arr = ['数据库', '操作系统', '前端', '后端', 'python', '编程语言', '网络安全', 'mdx', '默认分类'];
    return (
        <div className='flex w-full gap-x-5'>
            {/* -------------------------------------------左边区域------------------------------------------- */}
            <div className='flex flex-col overflow-hidden flex-1  gap-y-5'>
                {/* 轮播图 */}
                <div>
                    <CarouselDemo />
                </div>
                {/* 导航栏 */}
                <div className=' shadow bg-white flex items-center p-2 rounded'>
                    <Tags />
                </div>
                {/* 卡片区 */}
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-2 w-full'>
                    <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
                    <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
                </div>
                <PaginationDemo />
            </div>
            {/* -------------------------------------------右边区域------------------------------------------- */}
            <div className=' max-md:hidden w-[350px] max-sm:mt-5 space-y-5 dark:text-white/80'>
                <div className='w-full bg-white h-[375px] mb-1 0 flex flex-col items-center gap-3  p-5 shadow  rounded-md bg-light'>
                    <Image src={'/131579909.jpg'} width={150} height={150} alt='biongo' className=' rounded-[50%] shadow ' />
                    <p>BionGo</p>
                    <div className='flex gap-3'></div>
                    <div className='flex justify-between gap-3'>
                        <p>文章</p>
                        <p>分类</p>
                        <p>标签</p>
                    </div>
                </div>
                <div className='w-full bg-white mb-1 0 flex flex-col items-center gap-3  p-5 shadow  rounded-md bg-light'>
                    <div className='flex justify-between w-full items-center'>
                        <div className='flex gap-1 items-center'>
                            <RxDashboard className='text-2xl' />
                            <span className='text-lg'>分类</span>
                        </div>
                        <a href=''>更多</a>
                    </div>
                    <ul className=' w-full flex flex-col gap-1'>
                        {arr.map((item: string, index: number) => (
                            <li key={index} className=' hover:bg-slate-200 py-2 px-3 rounded transition'>
                                <a href=''>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-full bg-white mb-1 0 flex flex-col items-center gap-3  p-5 shadow  rounded-md bg-light'>
                    <div className='flex w-full justify-between'>
                        <div className='flex gap-1 items-center'>
                            <RxCalendar className='text-2xl' />
                            <span className='text-lg'>归档</span>
                        </div>
                        <a href=''>更多</a>
                    </div>
                    <div className='grid grid-cols-2 gap-2 w-full'>
                        <div className='border rounded-md p-2'>
                            <p>十一月 2023</p>
                            <p className='text-lg font-bold'>9篇</p>
                        </div>
                        <div className='border rounded-md p-2'>
                            <p>十一月 2023</p>
                            <p className='text-lg font-bold'>9篇</p>
                        </div>
                        <div className='border rounded-md p-2'>
                            <p>十一月 2023</p>
                            <p className='text-lg font-bold'>9篇</p>
                        </div>
                        <div className='border rounded-md p-2'>
                            <p>十一月 2023</p>
                            <p className='text-lg font-bold'>9篇</p>
                        </div>
                        <div className='border rounded-md p-2'>
                            <p>十一月 2023</p>
                            <p className='text-lg font-bold'>9篇</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Tags() {
    const tags = [
        'All',
        'Next.js',
        'React.js',
        'MySQL',
        'MongoDB',
        'Prisma',
        'Tailwind',
        'Node.js',
        'Supabase',
        'Convex',
        'Next Auth',
        'PostgreSQL',
    ];
    return (
        <div className='flex items-center gap-x-2 overflow-x-auto'>
            {tags.map((item: string, index: number) => (
                <a href='/' key={index}>
                    <div
                        className={cn(
                            'py-2 px-3 text-sm bg-muted rounded-md flex items-center gap-x-1 hover:bg-slate-200 transition cursor-pointer',
                            index === 0 && 'bg-[#e6f6fd] text-[#075985]',
                        )}
                    >
                        <div className='truncate text-xs font-semibold'>{item}</div>
                    </div>
                </a>
            ))}
        </div>
    );
}

function PaginationDemo() {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href='#' />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#'>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#' isActive>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#'>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href='#' />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

function Card() {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);
    return (
        <motion.div
            ref={ref}
            initial='hidden'
            animate={controls}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.5 },
            }}
            transition={{ duration: 0.5 }}
            className='w-auto h-auto'
        >
            <Link href={'/dashboard/post'} legacyBehavior>
                <a target='_blank'>
                    <div className='group hover:bg-[#f1f5f9] transition overflow-hidden rounded-lg h-full flex flex-col shadow'>
                        <div className='flex-1'>
                            <div className='relative w-full aspect-video rounded-t-md overflow-hidden border-b'>
                                <Image
                                    alt='Tailwindcss'
                                    loading='lazy'
                                    width='1024'
                                    height='1024'
                                    decoding='async'
                                    data-nimg='fill'
                                    sizes='100vw'
                                    className='duration-700 ease-in-out scale-100 blur-0 grayscale-0 object-cover'
                                    src='/1.webp'
                                    style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }}
                                />
                            </div>
                            <div className='flex flex-col pt-2 px-3'>
                                <div className='text-sm md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2'>
                                    Prisma &amp; Free Databases (MySQL, Postgres &amp; Mongo)
                                </div>
                                <div className='my-3 flex items-center gap-x-2 text-xs'>
                                    <div className='flex items-center gap-x-1 text-slate-500'>
                                        <div className='rounded-full flex items-center justify-center bg-sky-100 p-1'>
                                            <IoBookOutline className='lucide lucide-book-open text-sky-700 h-4 w-4' />
                                        </div>
                                        <span>4 Chapters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-3 pb-3'>
                            <p className='text-sm font-medium text-slate-700'>Free</p>
                        </div>
                    </div>
                </a>
            </Link>
        </motion.div>
    );
}
