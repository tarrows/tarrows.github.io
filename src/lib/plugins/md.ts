import { createFilter } from '@rollup/pluginutils';

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
      if (!filter(id)) return;
      const code = `export default \`${source}\``;
      return { code };
    }
  };
};
