<script lang="ts">
  import type { Paragraph } from 'mdast';
  export let node: Paragraph;

  const text = [...node.children];
</script>

<hr class="wrap">
<p>
{#each text as chunk, idx}
  {#if chunk.type === 'text'}
    {idx > 0 ? ' ' : ''}{chunk.value}
  {:else if chunk.type === 'inlineMath'}
    {idx > 0 ? ' ' : ''}{'<$'}{JSON.stringify(chunk)}{'$>'}
  {:else}
    {idx > 0 ? ' ' : ''}{'['}{JSON.stringify(chunk)}{']'}
  {/if}
{/each}
</p>
<p class="json">{JSON.stringify(text, undefined, 2)}</p>
<style>
  p {
    white-space: pre-wrap; 
  }
  p.json {
    background-color: cadetblue;
    color: #eee;
  }
  hr {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    overflow: visible;
  }
  /* hr.upper {
    border-top: 1px solid #00f;
  }
  hr.bottom {
    border-top: 1px dashed #888;
    margin-bottom: 16px;
  } */
  hr.wrap {
    border-top: 4px solid #000;
    margin-top: 16px;
    margin-bottom: 16px;
  }
</style>
