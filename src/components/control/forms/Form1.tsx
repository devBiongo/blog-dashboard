/** @format */

import Button from '@/components/items/Button';
import Image from 'next/image';
import { useState } from 'react';
import { GoPaperclip } from 'react-icons/go';

const Form1 = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div className='editor mx-auto  flex flex-col text-gray-800  border-gray-300 p-4 w-[600px]'>
            <input className='title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none' placeholder='Title' type='text' />
            <textarea
                className='description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none'
                placeholder='Describe everything about this post here'
            />
            <div className='icons flex text-gray-500 m-2'>
                <label className='mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7'>
                    <GoPaperclip />
                    <input hidden type='file' multiple />
                </label>
                <div className='count ml-auto text-gray-400 text-xs font-semibold'>0/300</div>
            </div>

            <div id='preview' className='my-4 flex'>
                <div className='relative  flex  gap-1'>
                    <div className='relative object-cover rounded'>
                        <Image src={'/1.webp'} width={120} height={120} alt='123' />
                        <button className='w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1'>
                            <span className='mx-auto'>×</span>
                        </button>
                        <div x-text='image.size' className='text-xs text-center p-2'></div>
                    </div>
                    <div x-show='!image.preview' className='relative w-32 h-32 object-cover rounded'>
                        <svg
                            className='fill-current  w-32 h-32 ml-auto pt-1'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                        >
                            <path d='M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z' />
                        </svg>
                        <button className='w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1'>
                            <span className='mx-auto'>×</span>
                        </button>
                        <div x-text='image.size' className='text-xs text-center p-2'></div>
                    </div>
                </div>
            </div>

            <div className='buttons flex justify-end'>
                <Button
                    loading={loading}
                    disabled={loading}
                    onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                            setLoading(false);
                        }, 3000);
                    }}
                >
                    Post
                </Button>
            </div>
        </div>
    );
};

export default Form1;
