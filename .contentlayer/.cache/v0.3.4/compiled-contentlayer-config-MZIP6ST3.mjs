// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    publishedOn: {
      type: "date",
      description: "The publishing date of the post",
      required: true
    },
    editedOn: {
      type: "date",
      description: "The editing date of the post",
      required: true
    },
    status: {
      type: "enum",
      description: "The status of the post",
      options: ["draft", "published", "edited"],
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      description: "The slug of the post",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx?$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  contentDirExclude: ["themes"],
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-MZIP6ST3.mjs.map
