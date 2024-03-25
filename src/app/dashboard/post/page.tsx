/** @format */

import MarkdownBox from '@/components/MarkdownBox';
import fs from 'fs';

// const md = markdownit({
//     highlight: function (str, lang) {
//         if (lang && hljs.getLanguage(lang)) {
//             try {
//                 return `
//                     <pre>
//                         <code class="hljs rounded my-2 relative">
//                             <button class="absolute right-4 top-3">copy</button>
//                             ${hljs.highlightAuto(str).value}
//                         </code>
//                     </pre>
//                 `;
//             } catch (__) {}
//         }
//         return '';
//     },
// });

export default async function Page() {
    const data = await fs.promises.readFile('./posts/Mysql安装.md', 'utf-8');
    return (
        <div>
            <div className='flex justify-center'>
                <div className='w-[1200px] bg-white p-6 rounded-lg border'>
                    <MarkdownBox content={data} />
                </div>
            </div>
        </div>
    );
}
