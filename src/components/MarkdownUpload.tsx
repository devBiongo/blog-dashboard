/** @format */
'use client';
import { useRef } from 'react';
const MarkdownUpload = ({ mdContent, setMdContent }: { mdContent: any; setMdContent: any }) => {
    const inputRef = useRef(null);

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setMdContent(reader.result);
            };
            reader.readAsText(file);
        }
    };

    const handleClick = () => {
        if (inputRef.current) {
            (inputRef.current as any).click();
        }
    };

    if (mdContent) {
        return '上传成功';
    }

    return (
        <div>
            <input type='file' ref={inputRef} className='hidden' onChange={handleFileChange} />
            <button onClick={handleClick} className='border px-4 text-sm py-1 rounded font-sans'>
                点击上传
            </button>
        </div>
    );
};

export default MarkdownUpload;
