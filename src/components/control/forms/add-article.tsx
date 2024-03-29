/** @format */

'use client';
import { Input } from '@/components/ui/input';
import { GoQuestion } from 'react-icons/go';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import qs from 'query-string';
import { ChangeEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { HiOutlinePaperClip } from 'react-icons/hi';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useModal } from '@/hooks/useModal';
import { useRouter } from 'next/router';
import { FileInput } from '@/components/FileInput';

const formSchema = z.object({
    articleTitle: z.string().min(3),
});
export default function AddArticle() {
    const [fileName, setFileName] = useState<any>('');
    const [dataUrl, setDataUrl] = useState<any>('');
    const [mdContent, setMdContent] = useState<any>('');
    const [files, setFiles] = useState<{ imageFile: File | null; mdFile: File | null }>({ imageFile: null, mdFile: null });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            articleTitle: '',
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;
    const isLoading = form.formState.isSubmitting;
    const { onClose } = useModal();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const url = qs.stringifyUrl({
                url: '/api/article',
            });

            if (!files.imageFile || !files.mdFile) {
                toast.error('请上传封面和Markdown');
                return;
            }

            const formData = new FormData();
            formData.append('file', files.imageFile!);
            const headers = { 'Content-Type': 'multipart/form-data' };
            const {
                data: { fileName: imageName },
            } = await axios.post('/api/image', formData, { headers });

            formData.set('file', files.mdFile!);
            const {
                data: { fileName: mdName },
            } = await axios.post('/api/markdown', formData, { headers });

            await axios.post(url, { ...values, articleCoverUrl: imageName, articleContentUrl: mdName });
            onClose();
            form.reset();
            location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='w-[600px]  flex justify-center p-1'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <ul className=' bg-white flex flex-col gap-10 w-full py-4'>
                    <li className='flex'>
                        <Label required title={'文章标题'} />
                        <Input placeholder='title' {...register('articleTitle')} className='outline-none' />
                    </li>

                    <li className='flex items-start'>
                        <Label title={'添加封面'} />
                        <FileInput
                            accept='image/*'
                            onChange={(event) => {
                                const file = event.target.files![0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        setFiles((state) => ({ ...state, imageFile: file }));
                                        setDataUrl(reader.result);
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />
                        {dataUrl && <Image src={dataUrl} width={200} height={100} alt='yes' className='' />}
                    </li>
                    <li className='flex items-start gap-10'>
                        <Label title={'添加markdown文件'} />
                        <FileInput
                            accept='.md'
                            onChange={(event) => {
                                const file = event.target.files![0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = () => {
                                        setFileName(file.name);
                                        setMdContent(reader.result);
                                        setFiles((state) => ({ ...state, mdFile: file }));
                                    };

                                    reader.readAsText(file);
                                }
                            }}
                        />
                        {fileName}
                    </li>
                    <li className='flex justify-end'>
                        <Button className=' bg-[#fc5531] hover:bg-[#fc1944] rounded-lg' type='submit' disabled={isLoading}>
                            Publish
                        </Button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

function Label({ title, required }: { title: string; required?: boolean }) {
    return (
        <div className='flex items-center gap-1 font-sans relative min-w-[100px]'>
            {required && <span className='absolute left-[-1rem] top-[8px] text-red-500 text-2xl'>*</span>}
            <span>{title}</span>
            <GoQuestion className='text-[#5e5c5c] ' />
        </div>
    );
}
