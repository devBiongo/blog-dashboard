/** @format */

import Button from '@/components/items/Button';
import TextArea from '@/components/items/TextArea';

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
            </div>
        </div>
    );
}
