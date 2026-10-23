import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

const hideDrafts = import.meta.env.HIDE_DRAFTS === 'true' || process.env.HIDE_DRAFTS === 'true';

export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts', ({ data }) => !(hideDrafts && data.draft));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function lineCount(post: Post): number {
  return (post.body ?? '').split('\n').length;
}

export function sizeLabel(post: Post): string {
  const bytes = new TextEncoder().encode(post.body ?? '').length;
  return bytes < 1024 ? `${bytes}` : `${(bytes / 1024).toFixed(1)}k`;
}

export function readMinutes(post: Post): number {
  const words = (post.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "23 Oct 2026" */
export function longDate(d: Date): string {
  return `${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** "Oct 23" like `ls -l` */
export function lsDate(d: Date): string {
  return `${months[d.getUTCMonth()]} ${String(d.getUTCDate()).padStart(2, ' ')}`;
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
