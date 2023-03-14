<script lang="ts">
  import type { Paragraph } from 'mdast';
  import Katex from './Katex.svelte';
  export let node: Paragraph;

  const text = [...node.children];
</script>

<hr class="wrap" />
<p>
  {#each text as chunk, idx}
    {#if chunk.type === 'text'}
      {idx > 0 ? ' ' : ''}{chunk.value}
    {:else if chunk.type === 'inlineMath'}
      {idx > 0 ? ' ' : ''}<Katex>{chunk.value}</Katex>
    {:else}
      {idx > 0 ? ' ' : ''}{'['}{JSON.stringify(chunk)}{']'}
    {/if}
  {/each}
</p>

<style>
  p {
    white-space: pre-wrap;
  }

  hr {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    overflow: visible;
  }

  hr.wrap {
    border-top: 4px solid #000;
    margin-top: 16px;
    margin-bottom: 16px;
  }
</style>
