/** @format */

import { cn } from '@/lib/utils';

interface Props {
    disabled?: boolean;
    loading?: boolean;
    onClick?: any;
    children: string;
    fullWidth?: boolean;
}

const Button: React.FC<Props> = ({ disabled, loading, children, fullWidth, onClick }) => {
    return (
        <button
            className={cn(
                'bg-[#1976d2] h-max w-max rounded text-white font-bold  hover:shadow-md  duration-[500ms,800ms] transition',
                disabled && 'hover:cursor-not-allowed',
                !disabled && 'hover:bg-[#115293]',
                fullWidth && 'w-full',
            )}
            disabled={disabled}
            onClick={onClick}
        >
            <div className='flex items-center justify-center px-4 py-2 gap-2'>
                {loading ? (
                    <>
                        <div className='h-4 w-4 border-t-transparent border-solid animate-spin rounded-full border-white border-[3px]'></div>
                        <span>Processing</span>
                    </>
                ) : (
                    children
                )}
            </div>
        </button>
    );
};

export default Button;
