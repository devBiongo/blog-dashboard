/** @format */

import CarouselDemo from '@/components/BlogCarouse';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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

import { db } from '@/lib/db';
import Card from '@/components/dashboard/Card';
import { ImGithub } from 'react-icons/im';
import { FaBilibili } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';
import { Tooltip } from '@/components/mui/index';
import { IoBookOutline } from 'react-icons/io5';
import { IoBookmarksOutline } from 'react-icons/io5';
import BlogCarousel from '@/components/BlogCarouse';

export default async function Page() {
    const arr = ['数据库', '操作系统', '前端', '后端', 'python', '编程语言', '网络安全', 'mdx', '默认分类'];
    const articles = await db.article.findMany({
        orderBy: {
            articleDate: 'desc',
        },
    });
    return (
        <div className='flex w-full gap-x-5'>
            {/* -------------------------------------------左边区域------------------------------------------- */}
            <div className='flex flex-col overflow-hidden flex-1  gap-y-5'>
                {/* 轮播图 */}
                <div>
                    <BlogCarousel articles={articles} />
                </div>
                {/* 导航栏 */}
                <div className=' shadow bg-white flex items-center p-2 rounded'>
                    <Tags />
                </div>
                {/* 卡片区 */}
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-2 w-full'>
                    {articles.map((item: any, index: number) => (
                        <Card key={index} article={item} />
                    ))}
                </div>
            </div>
            {/* -------------------------------------------右边区域------------------------------------------- */}
            <div className=' max-md:hidden w-[350px] max-sm:mt-5 space-y-5 dark:text-white/80'>
                <div className='w-full bg-white h-[375px] mb-1 0 flex flex-col items-center gap-3  p-5 shadow  rounded-md bg-light'>
                    <Image src={'/favicon.ico'} width={150} height={150} alt='biongo' className=' rounded-[50%] shadow ' />
                    <p>BionGo</p>
                    <div className='flex gap-3'></div>
                    <div className='flex justify-between gap-8 text-2xl'>
                        <Link href={'https://space.bilibili.com/2042998773?spm_id_from=333.1296.0.0'}>
                            <FaBilibili className='hover:scale-125 text-[#1e88e5]  transition duration-90 cursor-pointer' />
                        </Link>
                        <Link href={'https://github.com/devBiongo'}>
                            <ImGithub className='hover:scale-125  transition duration-90 cursor-pointer' />
                        </Link>
                        <Link href={'https://blog.csdn.net/Idalan?type=blog'}>
                            <Image
                                src={'/csdn.png'}
                                width={26}
                                height={26}
                                alt='biongo'
                                className=' rounded-[50%] shadow hover:scale-125  transition duration-90 cursor-pointer'
                            />
                        </Link>
                    </div>
                    <div className='flex gap-8 py-5 '>
                        <div className='flex gap-1 items-center'>
                            <IoBookOutline className='transform translate-y-[2px] text-xl text-[#227cae]' />
                            <span>文章</span>
                            <span>{articles.length}</span>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <IoBookmarksOutline className='transform translate-y-[2px] text-xl text-[#227cae]' />
                            <span>标签</span>
                            <span>16</span>
                        </div>
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
                            <li key={index} className=' hover:bg-[#e2e8f0] py-2 px-3 rounded transition'>
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
                <a href='/dashboard' key={index}>
                    <div
                        className={cn(
                            'py-2 px-3 text-sm bg-muted rounded-md flex items-center gap-x-1 hover:bg-[#e2e8f0] transition cursor-pointer',
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
