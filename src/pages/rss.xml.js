import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'srkkr.com RSS Feed',
        description: 'srkkr.com RSS Feed',
        site: 'https://srkkr.com',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>ja-jp</language>`,
    });
}