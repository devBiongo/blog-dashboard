/** @format */

import MarkdownBox from '@/components/MarkdownBox';
import fs from 'fs';
import { BsFillEyeFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { BiSolidBookHeart } from 'react-icons/bi';
import { GrDocumentUpdate } from 'react-icons/gr';
import { db } from '@/lib/db';

interface Props {
    params: {
        postId: string;
    };
}
export default async function Page({ params }: Props) {
    const article = await db.article.findUnique({
        where: {
            id: params.postId,
        },
    });
    if (!article || !article.articleContent) {
        return <div>没有此文章</div>;
    }

    return (
        <div>
            <div className='flex justify-center font-sans'>
                <div className='w-[1200px] bg-white p-6 rounded-lg border flex flex-col gap-5'>
                    <p className='text-3xl font-bold'>{article.articleTitle}</p>
                    <div className=' bg-[#f8f8f8] min-h-10 p-2 text-[#999aaa] text-[14px] font-sans'>
                        <ul className='flex gap-4 items-center'>
                            <li className='flex gap-1'>
                                <a className='flex items-center gap-1'>
                                    <BsFillEyeFill className='text-[16px]' />
                                    <span>阅读数</span>
                                </a>
                                <span>1.1k</span>
                            </li>
                            <li className='flex gap-1'>
                                <a className='flex items-center gap-1 hover:text-[#fc5531] hover:cursor-pointer'>
                                    <AiFillLike className='text-[16px] ' />
                                    <span>点赞数</span>
                                </a>
                                <span>6</span>
                            </li>
                            <li className='flex gap-1'>
                                <a className='flex items-center gap-1 hover:text-[#fc5531] hover:cursor-pointer'>
                                    <BiSolidBookHeart className='text-[16px] ' />
                                    <span>收藏数</span>
                                </a>
                                <span>1.2w</span>
                            </li>
                            <li className='flex gap-1'>
                                <a className='flex items-center gap-1'>
                                    <GrDocumentUpdate className='text-[15px]' />
                                    <span>已于 2023-04-09 14:15:35 修改</span>
                                </a>
                            </li>
                        </ul>
                        <ul className='mt-2 flex gap-3 items-center'>
                            <li>分类专栏:</li>
                            <li>
                                <Tag>微信小程序</Tag>
                            </li>
                            <li>文章标签:</li>
                            <li>
                                <Tag>微信小程序</Tag>
                            </li>
                            <li>
                                <Tag>小程序</Tag>
                            </li>
                            <li>
                                <Tag>javascript</Tag>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <MarkdownBox content={article.articleContent} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Tag({ children }: { children: string }) {
    return <div className='border px-2 bg-white text-[#277ccc] font-sans'>{children}</div>;
}
