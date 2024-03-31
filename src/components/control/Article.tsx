/** @format */

'use client';

import Link from 'next/link';
import { Article } from '@prisma/client';
import Table from './Table';
import { useModal } from '@/hooks/useModal';
import TestForm from './forms/TestForm';
import AddArticle from './forms/add-article';
import Form1 from './forms/Form1';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ArticleTable from './ArticleTable';
function Tag({ children }: { children: React.ReactNode }) {
    return <span className='border border-[#b7eb8f] px-2 bg-[#f6ffed] text-[#5cb138] rounded-sm'>{children}</span>;
}

const columns = [
    {
        title: '封面',
        dataIndex: 'cover',
        key: 'cover',
        render: (url: string) => {
            return <Image src={`/api/image/${url}`} width={80} height={80} alt='bingo' />;
        },
    },
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        render: (content: string) => <span className=' text-blue-600'>{content}</span>,
    },
    {
        title: '标签',
        dataIndex: 'labels',
        key: 'labels',
        render: (labels: string[]) => (
            <div className='flex gap-1'>
                {labels.map((label, index) => (
                    <Tag key={index}>{label}</Tag>
                ))}
            </div>
        ),
    },
    {
        title: '操作',
        dataIndex: 'actions',
        key: 'actions',
        render: (labels: string[], data: any) => (
            <a
                className='text-[#db5656] underline cursor-pointer'
                onClick={() => {
                    axios.get(`/api/article/${data.key}`).then((res) => {
                        if (res) {
                            location.reload();
                        }
                    });
                }}
            >
                删除
            </a>
        ),
    },
];

const Article = ({ articles }: { articles: Article[] }) => {
    const dataSource = articles.map((item) => ({
        key: item.id,
        cover: item.articleCoverUrl,
        title: item.articleTitle,
        labels: ['1', '2'],
        actions: '123',
    }));

    const { onOpen } = useModal();
    return (
        <div className='p-10'>
            <div className='flex gap-2 py-1'>
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
                        onOpen(<AddArticle />);
                    }}
                >
                    +<span>新增</span>
                </button>
            </div>

            <ArticleTable articles={articles} />
        </div>
    );
};

export default Article;
