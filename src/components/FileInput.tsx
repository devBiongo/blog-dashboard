/** @format */

import { ChangeEvent } from 'react';
import { HiOutlinePaperClip } from 'react-icons/hi';

export function FileInput({ onChange, accept }: { onChange: (e: ChangeEvent<HTMLInputElement>) => void; accept: string }) {
    return (
        <div className='flex text-gray-500 '>
            <label className='mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7'>
                <HiOutlinePaperClip />
                <input hidden type='file' onChange={onChange} accept={accept} />
            </label>
        </div>
    );
}
