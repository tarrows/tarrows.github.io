<script lang="ts">
  import type { StaticPhrasingContent } from 'mdast';
  import Katex from './Katex.svelte';
  import PhrasingContent from './PhrasingContent.svelte';

  export let node: StaticPhrasingContent;
</script>


{#if node.type === 'text'}
  {node.value}
{:else if node.type === 'break'}
  <br />
{:else if node.type === 'delete'}
  <!-- we use s tag (not del) by usage -->
  <s>
    {#each node.children as content}
      <PhrasingContent node={content} />
    {/each}
  </s>
{:else if node.type === 'inlineMath'}
  <Katex>{node.value}</Katex>
{:else}
  {JSON.stringify(node)}
{/if}
