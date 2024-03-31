/** @format */

'use client';

import { useClerk } from '@clerk/clerk-react';
import { TbDownload } from 'react-icons/tb';
const LoginButton = () => {
    const clerk = useClerk();
    return (
        <div className='flex items-center gap-x-2 ml-auto'>
            <button
                className='inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3'
                onClick={() => clerk.openSignIn({})}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='lucide lucide-log-in h-4 w-4 mr-2'
                >
                    <path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4'></path>
                    <polyline points='10 17 15 12 10 7'></polyline>
                    <line x1='15' x2='3' y1='12' y2='12'></line>
                </svg>
                Login
            </button>
        </div>
    );
};

export default LoginButton;
