/** @format */
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Article, User } from '@prisma/client';
import axios from 'axios';
import Image from 'next/image';

const ArticleTable = ({ articles }: { articles: Article[] }) => {
    return (
        <div>
            <Table>
                <TableCaption></TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>封面</TableHead>
                        <TableHead>邮件</TableHead>
                        <TableHead>actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {articles.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className='font-medium'>
                                <Image src={`/api/image/${item.articleCoverUrl}`} width={80} height={80} alt='bingo' />
                            </TableCell>
                            <TableCell>{item.articleDate.toDateString()}</TableCell>
                            <TableCell>
                                <a
                                    className='text-[#db5656] underline cursor-pointer'
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
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ArticleTable;
