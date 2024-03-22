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

export default function Page() {
    return (
        <div className='flex w-full gap-x-5'>
            {/* -------------------------------------------左边区域------------------------------------------- */}
            <div className='flex flex-col overflow-hidden flex-1  gap-y-5'>
                {/* 轮播图 */}
                <div>
                    <CarouselDemo />
                </div>
                {/* 导航栏 */}
                <div className='h-[50px] bg-white rounded shadow flex justify-between px-2 py-1'>
                    <ul className='flex gap-5 h-full py-1'>
                        {['数据库', '操作系统', '数据库', '操作系统'].map((item: string, index: number) => (
                            <li
                                className={cn(
                                    'h-full hover:bg-[#425aef] hover:text-white px-2 rounded',
                                    index === 0 && 'bg-[#425aef] text-white',
                                )}
                                key={index}
                            >
                                <a href='#' className='h-full flex justify-center items-center'>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
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
                            <li key={index} className=' hover:bg-[#ebebec] py-2 px-1 rounded'>
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

const arr = ['数据库', '操作系统', '前端', '后端', 'python', '编程语言', '网络安全', 'mdx', '默认分类'];
const Card = () => {
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
            <div className='w-full h-full group flex flex-col p-1 dark:bg-dark-200  items-center shadow-md ring-dark rounded-md  '>
                <a className='h-[1/2] w-full  rounded-[5px] overflow-hidden ' href='/posts/前端/Tailwindcss'>
                    <Image
                        alt='Tailwindcss'
                        loading='lazy'
                        width='1024'
                        height='1024'
                        decoding='async'
                        data-nimg='1'
                        className='aspect-[4/3] w-full h-full object-center object-cover group-hover:scale-105 transition-all ease duration-300'
                        src='/1.webp'
                        style={{ color: 'transparent' }}
                    />
                </a>
                <div className='flex-1  flex flex-col w-full mt-2  max-sm:mt-1'>
                    <div className='space-x-2 max-sm:space-x-1'>
                        <a className='capitalize font-semibold sm:text-sm text-[12px] hover:underline text-blue-500'>前端</a>
                    </div>
                    <a className='  my-1  ' href='/posts/前端/Tailwindcss'>
                        <h2 className=' sm:font-semibold capitalize sm:text-lg text-sm font-medium '>
                            <span className='bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_3px] dark:from-accentDark dark:to-accentDark group-hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                                Tailwindcss
                            </span>
                        </h2>
                    </a>
                    <span className='max-sm:h-[13px] capitalize  font-semibold sm:text-base text-[12px] mb-1 mt-auto text-zinc-400 '>
                        2023-12-09
                    </span>
                </div>
            </div>
        </motion.div>
    );
};
