import type { Root } from 'mdast';
import type { PageServerLoad } from './$types';
import { traverse } from '$lib/server/blog';

const checker = async (x: Promise<{ content: ReturnType<typeof traverse> }>) =>
  await x.then(({ content }) => content.length > 0);

export const load: PageServerLoad = async ({ params }) => {
  // Invalid glob import syntax: Expected glob to be a string, but got dynamic template literal
  const candidates = import.meta.glob<{ default: Root }>('/blog/**/*.md');

  const post = (await Object.entries(candidates)
    .filter(([filepath, _]) => {
      const postpath = filepath.split('/').slice(-1)[0].replace('.md', '');
      return postpath === params.slug;
    })
    .map(async ([_, loader]) => {
      const tree = await loader();
      return { content: traverse(tree.default) };
    })
    .find(checker)) ?? { content: [] }; // TODO: return 404

  return { ...post };
};
