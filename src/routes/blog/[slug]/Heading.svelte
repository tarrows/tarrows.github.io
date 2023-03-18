<script lang="ts">
  import type { Heading, Text } from 'mdast';
  export let node: Heading;

  const text = node.children
    .filter<Text>((elem): elem is Text => elem.type === 'text')
    .map((elem) => elem.value)
    .join(' ');
</script>

{#if node.depth === 1}
  <h1>{text}</h1>
{:else if node.depth === 2}
  <h2>{text}</h2>
{:else}
  <p>{text}</p>
{/if}
