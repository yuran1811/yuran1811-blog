import hljs from 'highlight.js';
import MD from 'markdown-it';

const getBlockTemplate = (content: string = '', lang: string = 'js') =>
  `<pre class="not-prose hljs language-${lang}"><code>${content}</code></pre>`;

const renderer = MD({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return getBlockTemplate(hljs.highlight(str, { language: lang, ignoreIllegals: true }).value, lang);
      } catch (err) {
        console.log(err);
      }
    }

    return getBlockTemplate(renderer.utils.escapeHtml(str), lang);
  },
});

export const getHTMLPostContent = (content: string) => {
  return renderer.render(content);
};
