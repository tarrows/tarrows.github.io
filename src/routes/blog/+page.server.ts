import type { Root } from 'mdast';
import { traverse } from '$lib/server/blog';
import type { PageServerLoad } from './$types';

const fetchAllMarkdownPosts = async () => {
  const files = import.meta.glob<{ default: Root }>('/blog/**/*.md');
  const posts = await Promise.all(
    Object.entries(files).map(async ([filepath, loader]) => {
      const tree = await loader();
      const pagepath = filepath.split('/').slice(-1)[0].replace('.md', '');

      return {
        content: traverse(tree.default),
        path: pagepath
      };
    })
  );

  return posts;
};

export const load: PageServerLoad = async () => {
  const posts = await fetchAllMarkdownPosts();

  return { posts };
};
