<script lang="ts">
  import type { Heading, Text } from 'mdast';
  export let node: Heading;

  const text = node.children
    .filter<Text>((elem): elem is Text => elem.type === 'text')
    .map((elem) => elem.value)
    .join(' ');
</script>

<h1>{text}</h1>
