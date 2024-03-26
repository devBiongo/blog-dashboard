/** @format */
'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
const FileUpload = ({ dataUrl, setDataUrl }: { dataUrl: any; setDataUrl: any }) => {
    const inputRef = useRef(null);

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setDataUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        if (inputRef.current) {
            (inputRef.current as any).click();
        }
    };

    if (dataUrl) {
        return <Image src={dataUrl} width={200} height={100} alt='biongo' className='' />;
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
