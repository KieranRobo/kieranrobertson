import rss from '@astrojs/rss';
import { getPosts } from '../lib/posts';
import { profile } from '../data/profile';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: `${profile.name}`,
    description: 'Writing on distributed systems, coding agents and developer tooling.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en-gb</language>',
  });
}
