/** @format */
'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
const FileUpload = ({ dataUrl, setDataUrl }: { dataUrl: any; setDataUrl: any }) => {
    const inputRef = useRef(null);

    const handleFileChange = (event: any) => {};

    const handleClick = () => {
        if (inputRef.current) {
            (inputRef.current as any).click();
        }
    };

    if (dataUrl) {
        return;
    }

    return (
        <div>
            <input type='file' ref={inputRef} className='hidden' onChange={handleFileChange} />
            <button
                onClick={handleClick}
                className='bg-[#f7f7f7]  text-[#7f788c] text-sm w-[200px] h-[100px] rounded-md border border-dashed flex flex-col justify-center items-center'
            >
                <span className='text-[1.5rem]'>+</span>
                <span>添加封面</span>
            </button>
        </div>
    );
};

export default FileUpload;
