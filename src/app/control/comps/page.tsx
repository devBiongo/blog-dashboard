/** @format */

'use client';
import { FileInput } from '@/components/FileInput';
import Button from '@/components/items/Button';
import TextArea from '@/components/items/TextArea';
import Image from 'next/image';

export default function Page() {
    return (
        <div>
            <div className='p-10 flex flex-col gap-3'>
                <div>
                    <Button disabled>disabled</Button>
                </div>
                <div>
                    <TextArea label='123' />
                </div>
                <div>
                    <FileInput
                        accept='image/*'
                        onChange={(event) => {
                            const file = event.target.files![0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = () => {};
                                reader.readAsDataURL(file);
                            }
                        }}
                    />
                </div>
            </div>
            <div>
                <Image src='/api/image/preview/f3113430-8690-4573-8586-268c886cc998.png' alt='123' width={200} height={200} />
            </div>
        </div>
    );
}
