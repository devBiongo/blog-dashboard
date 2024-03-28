/** @format */

'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useModal } from '@/hooks/useModal';
import { AiOutlineClose } from 'react-icons/ai';
import { cn } from '@/lib/utils';

export const Modal = () => {
    const { isOpen, onClose, slot } = useModal();
    const modalRef = useRef<HTMLDivElement>(null);
    const handleOutsideClick = useCallback(
        (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        },
        [onClose],
    );
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [handleOutsideClick, isOpen]);

    return (
        <div
            className={cn(
                `fixed top-0 right-0 bottom-0 left-0 z-[999] bg-black bg-opacity-50 py-12 transition duration-150 ease-in-out`,
                !isOpen && 'hidden',
            )}
        >
            <div className='container flex justify-center'>
                <div className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 inline-block' ref={modalRef}>
                    <button
                        className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600'
                        onClick={() => onClose()}
                    >
                        <AiOutlineClose />
                    </button>
                    {slot}
                </div>
            </div>
        </div>
    );
};
