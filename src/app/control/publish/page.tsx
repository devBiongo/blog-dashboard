/** @format */

'use client';
import { Input } from '@/components/ui/input';
import { GoQuestion } from 'react-icons/go';
import { Label as RadioLabel } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import FileUpload from '@/components/FileUpload';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import qs from 'query-string';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import MarkdownUpload from '@/components/MarkdownUpload';

const formSchema = z.object({
    articleTitle: z.string().min(3),
});
export default function Page() {
    const [dataUrl, setDataUrl] = useState<any>('');
    const [mdContent, setMdContent] = useState<any>('');
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

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const url = qs.stringifyUrl({
                url: '/api/article',
            });
            if (!dataUrl || !mdContent) {
                alert('1111111');
            }

            const res = await axios.post(url, { ...values, articleCoverUrl: dataUrl, articleContent: mdContent });
            console.log(res);

            form.reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='max-w-screen-2xl mx-auto  flex justify-center  h-[100vh] py-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ul className='w-[50vw] bg-white h-[600px] p-8 flex flex-col gap-10'>
                    <li className='flex'>
                        <Label required title={'文章标题'} />
                        <Input placeholder='title' {...register('articleTitle')} />
                    </li>

                    <li className=' '>
                        <Label title={'文章标签'} />
                    </li>
                    <li className='flex items-start'>
                        <Label title={'添加封面'} />
                        <FileUpload dataUrl={dataUrl} setDataUrl={setDataUrl} />
                    </li>
                    <li className='flex items-start gap-10'>
                        <Label title={'添加markdown文件'} />
                        <MarkdownUpload mdContent={mdContent} setMdContent={setMdContent} />
                    </li>
                    <li className='flex '>
                        <Label title={'分类专栏'} />
                    </li>
                    <li className='flex '>
                        <Label title={'可见范围'} />
                        <RadioGroup defaultValue='comfortable' className='flex'>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='default' id='r1' />
                                <RadioLabel htmlFor='r1'>Default</RadioLabel>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='comfortable' id='r2' />
                                <RadioLabel htmlFor='r2'>Comfortable</RadioLabel>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='compact' id='r3' />
                                <RadioLabel htmlFor='r3'>Compact</RadioLabel>
                            </div>
                        </RadioGroup>
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
