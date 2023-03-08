import type { Root } from 'mdast';

export const traverse = (root: Root) => {
  return (
    root?.children?.map((child) => {
      switch (child.type) {
        case 'heading':
          return child;
        case 'paragraph':
          return child;
        default:
          return child;
      }
    }) ?? []
  );
};
