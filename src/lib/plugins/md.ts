import { createFilter } from '@rollup/pluginutils';
import { unified } from 'unified';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';

export const md = (
  options = {
    include: ['**/*.md'],
    exclude: [] as string[]
  }
) => {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'md',
    transform(source: string, id: string) {
      if (!filter(id)) return null;

      const tree = unified()
        .use(remarkParse)
        .use(remarkFrontmatter, ['yaml', 'toml'])
        .use(remarkGfm)
        .use(remarkMath)
        .parse(source);

      const code = `export default ${JSON.stringify(tree)}`;
      return { code };
    }
  };
};
