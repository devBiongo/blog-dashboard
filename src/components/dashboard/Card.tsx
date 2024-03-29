/** @format */
'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';
import { IoBookOutline } from 'react-icons/io5';
import Link from 'next/link';
import { Article } from '@prisma/client';

export default function Card({ article }: { article: Article }) {
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
            <Link href={`/dashboard/post/${article.id}`} legacyBehavior>
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
                                    src={`/api/image/${article.articleCoverUrl}`}
                                    style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent' }}
                                />
                            </div>
                            <div className='flex flex-col pt-2 px-3'>
                                <div className='text-sm md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2'>
                                    {article.articleTitle}
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
