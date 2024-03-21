/** @format */

import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export const CustomAlertBox = ({
    content,
    unmount,
    task,
}: {
    content: string | React.ReactNode;
    unmount: () => void;
    task?: () => void;
}) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <AlertDialog open>
            <AlertDialogContent>
                <AlertDialogHeader className='text-left'>
                    <AlertDialogTitle className='my-5'>{content}</AlertDialogTitle>
                </AlertDialogHeader>
                <div className='flex justify-end items-center gap-3'>
                    {isLoading && <Loader2 className='animate-spin text-zinc-500 ml-auto w-8 h-8' />}
                    <Button disabled={isLoading} variant='outline' onClick={() => unmount()}>
                        キャンセル
                    </Button>
                    <Button
                        disabled={isLoading}
                        onClick={async () => {
                            try {
                                if (task) {
                                    setIsLoading(true);
                                    await task();
                                }
                            } finally {
                                setIsLoading(false);
                                unmount();
                            }
                        }}
                    >
                        続ける
                    </Button>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};
