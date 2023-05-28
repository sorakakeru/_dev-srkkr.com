import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://srkkr.com',
  markdown: {
    // 'shiki'（デフォルト）、'prism'、またはハイライトを無効にする場合は false を指定します
    syntaxHighlight: false
  }
});
