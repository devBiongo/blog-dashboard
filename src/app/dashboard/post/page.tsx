/** @format */

import markdownit from 'markdown-it';
import hljs from 'highlight.js';
import fs from 'fs';

const md = markdownit({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre><code class="hljs rounded my-2">' + hljs.highlightAuto(str).value + '</code></pre>';
            } catch (__) {}
        }
        return '';
    },
});

export default async function Page() {
    const data = await fs.promises.readFile('./posts/Mysql安装.md', 'utf-8');
    const result = await md.render(data);
    return (
        <div>
            <div className='flex justify-center'>
                <div className='w-[1200px] bg-white p-6 rounded-lg border'>
                    <div dangerouslySetInnerHTML={{ __html: result }}></div>
                </div>
            </div>
        </div>
    );
}
