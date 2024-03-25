/** @format */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function renderMarkdown(content: string) {
    const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight(str, lang) {
            const copyContent = str.replace(/<\/textarea>/g, '&lt;/textarea>');
            const uuid = uuidv4();
            let html = `<button 
                            class="copy-btn absolute top-2 right-4 p-3  py-0 bg-[#9999aa] text-white rounded bg-opacity-50 font-serif" 
                            data-clipboard-action="copy" 
                            data-clipboard-target="#copy${uuid}" >copy</button>`;
            let linesNum = `<span aria-hidden="true" class="line-numbers-rows">${Array(str.split(/\n/).length - 1)
                .fill('<span></span>')
                .join('')}</span>`;
            if (lang && hljs.getLanguage(lang)) {
                try {
                    const preCode = hljs.highlightAuto(str).value;
                    html = html + preCode;
                    return `<pre class="hljs"><code class="block p-5">${html}</code>${linesNum}</pre><textarea class="hidden" id="copy${uuid}">${copyContent}</textarea>`;
                } catch (error) {
                    console.log(error);
                }
            }
            const preCode = md.utils.escapeHtml(str);
            html = html + preCode;
            return `<pre class="hljs"><code>${html}</code>${linesNum}</pre><textarea class="hidden" id="copy${uuid}">${copyContent}</textarea>`;
        },
    });
    return md.render(content);
}
