/** @format */

'use client';

import { useModal } from '@/hooks/useModal';
import AddArticleForm from './forms/AddArticleForm';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Article } from '@prisma/client';
import axios from 'axios';
import Image from 'next/image';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CiRead } from 'react-icons/ci';
import Link from 'next/link';

const Article = ({ articles, isAdmin }: { articles: Article[]; isAdmin: boolean }) => {
    const { onOpen } = useModal();
    return (
        <div className='p-10'>
            <div className='flex gap-2 py-1'>
                {isAdmin && (
                    <button
                        className={`border flex items-center gap-1 px-3 text-sm  rounded py-1 font-sans
                                border-[#a3d3ff]
                                hover:border-[#1890ff]
                                bg-[#e8f4ff] 
                                hover:bg-[#1890ff] 
                                text-[#18abff]  
                                hover:text-[#fff] 
                            `}
                        onClick={() => {
                            onOpen({
                                slot: <AddArticleForm />,
                                title: '上传博客',
                                width: 700,
                            });
                        }}
                    >
                        +<span>新增</span>
                    </button>
                )}
            </div>
            <Table>
                <TableCaption></TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>封面</TableHead>
                        <TableHead>标题</TableHead>
                        <TableHead>点赞次数</TableHead>
                        <TableHead>浏览量</TableHead>
                        <TableHead>发表时间</TableHead>
                        <TableHead>发表用户</TableHead>
                        <TableHead>actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {articles.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className='font-medium'>
                                <Image src={`/api/image/${item.articleCoverUrl}`} width={80} height={80} alt='bingo' />
                            </TableCell>
                            <TableCell>{item.articleTitle}</TableCell>
                            <TableCell>{item.articleLikeCount}</TableCell>
                            <TableCell>{item.articleViews}</TableCell>
                            <TableCell>{item.articleDate.toDateString()}</TableCell>
                            <TableCell>{(item as any).User.userNickname}</TableCell>
                            <TableCell>
                                <div className='flex gap-2'>
                                    <div className='text-[#6666d6] cursor-pointer flex gap-1 items-center'>
                                        <CiRead className='font-blod text-xl' />
                                        <Link href={`/dashboard/post/${item.id}`} legacyBehavior>
                                            <a className=' underline' target='_blank'>
                                                阅览
                                            </a>
                                        </Link>
                                    </div>
                                    {isAdmin && (
                                        <div className='text-[#db5656] cursor-pointer flex gap-1 items-center'>
                                            <RiDeleteBin6Line />
                                            <a
                                                className=' underline '
                                                onClick={() => {
                                                    axios.get(`/api/article/${item.id}`).then((res) => {
                                                        if (res) {
                                                            location.reload();
                                                        }
                                                    });
                                                }}
                                            >
                                                删除
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Article;
