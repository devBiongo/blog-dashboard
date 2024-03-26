/** @format */

'use client';

import { renderMarkdown } from '@/lib/utils';
import Clipboard from 'clipboard';
import { useEffect } from 'react';

export default function MarkdownBox({ content }: { content: string }) {
    useEffect(() => {
        const clipboard = new Clipboard('.copy-btn');
        clipboard.on('success', (e: any) => {
            e.trigger.innerHTML = '&#10003; copied!';
            console.log(e);
            setTimeout(() => {
                e.trigger.innerHTML = 'copy';
            }, 3000);
        });
    }, []);
    return (
        <blockquote>
            <div dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
        </blockquote>
    );
}
