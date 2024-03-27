/** @format */

const TestForm = () => {
    return (
        <div className=' max-w-[600px]'>
            <h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4'>Enter Billing Details</h1>
            <label className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>Owner Name</label>
            <input
                id='name'
                className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
                placeholder='James'
            />
            <label className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>Card Number</label>
            <div className='relative mb-5 mt-2'>
                <div className='absolute text-gray-600 flex items-center px-4 border-r h-full'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-credit-card'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                    >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <rect x='3' y='5' width='18' height='14' rx='3' />
                        <line x1='3' y1='10' x2='21' y2='10' />
                        <line x1='7' y1='15' x2='7.01' y2='15' />
                        <line x1='11' y1='15' x2='13' y2='15' />
                    </svg>
                </div>
                <input
                    id='email2'
                    className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border'
                    placeholder='XXXX - XXXX - XXXX - XXXX'
                />
            </div>
            <label className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>Expiry Date</label>
            <div className='relative mb-5 mt-2'>
                <div className='absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-calendar-event'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                    >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <rect x='4' y='5' width='16' height='16' rx='2' />
                        <line x1='16' y1='3' x2='16' y2='7' />
                        <line x1='8' y1='3' x2='8' y2='7' />
                        <line x1='4' y1='11' x2='20' y2='11' />
                        <rect x='8' y='15' width='2' height='2' />
                    </svg>
                </div>
                <input
                    id='expiry'
                    className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
                    placeholder='MM/YY'
                />
            </div>
            <label className='text-gray-800 text-sm font-bold leading-tight tracking-normal'>CVC</label>
            <div className='relative mb-5 mt-2'>
                <div className='absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-info-circle'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                    >
                        <path stroke='none' d='M0 0h24v24H0z'></path>
                        <circle cx='12' cy='12' r='9'></circle>
                        <line x1='12' y1='8' x2='12.01' y2='8'></line>
                        <polyline points='11 12 12 12 12 16 13 16'></polyline>
                    </svg>
                </div>
                <input
                    id='cvc'
                    className='mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
                    placeholder='MM/YY'
                />
            </div>
            <div className='flex items-center justify-start w-full'>
                <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm'>
                    Submit
                </button>
                <button className='focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default TestForm;
