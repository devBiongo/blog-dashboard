/** @format */
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

const BlogAvatar = () => {
    return (
        <Link href='/dashboard'>
            <div className='items-center gap-x-2 hidden lg:flex hover:opacity-75 transition-opacity'>
                <Avatar className='w-[60px] h-[60px]'>
                    <AvatarImage src='/favicon.ico' alt='@biongo' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className=' scale-90'>
                    <p className='font-semibold text-base text-sky-700'>Lets cooking</p>
                    <p className='text-xs text-muted-foreground'>cooking something great!</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogAvatar;
