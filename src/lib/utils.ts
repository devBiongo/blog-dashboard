/** @format */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function renderMarkdown(content: string) {
    let codeIndex = 1;
    const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        breaks: true,
        highlight: function (str, lang) {
            codeIndex++;
            const copyContent = str.replace(/<\/textarea>/g, '&lt;/textarea>');
            let html = `<button
                            class="copy-btn absolute top-2 right-4 px-3  pb-1 bg-[#9999aa] text-white rounded bg-opacity-50 font-sans text-[14px]"
                            data-clipboard-action="copy"
                            data-clipboard-target="#copy${codeIndex}" >copy</button>`;
            let linesNum = `<span aria-hidden="true" class="line-numbers-rows">${Array(str.split(/\n/).length - 1)
                .fill('<span></span>')
                .join('')}</span>`;
            if (lang && hljs.getLanguage(lang)) {
                try {
                    const preCode = hljs.highlight(lang, str, true).value;
                    html = html + preCode;
                    return `<pre class="hljs"><code class="block px-3">${html}</code>${linesNum}</pre><textarea class="absolute top-[-9999px]" id="copy${codeIndex}">${copyContent}</textarea>`;
                } catch (error) {
                    console.log(error);
                }
            }
            const preCode = md.utils.escapeHtml(str);
            html = html + preCode;
            return `<pre class="hljs"><code>${html}</code>${linesNum}</pre><textarea class="absolute top-[-9999px]" id="copy${codeIndex}">${copyContent}</textarea>`;
        },
    });
    return md.render(content);
}
