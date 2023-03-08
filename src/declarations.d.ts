import type { Literal, Root } from 'mdast';

declare module '*.md' {
  export default {
    default: Root
  };
}

interface TOML extends Literal {
  type: 'toml';
}

declare module 'mdast' {
  interface FrontmatterContentMap {
    // Allow using toml nodes defined by `remark-frontmatter`.
    toml: TOML;
  }
}
