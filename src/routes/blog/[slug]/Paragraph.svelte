<script lang="ts">
  import type { Paragraph } from 'mdast';
  import PhrasingContent from './PhrasingContent.svelte'
  export let node: Paragraph;

  const text = [...node.children];
</script>

<hr class="wrap" />
<p>
  {#each text as chunk, idx}
    {idx > 0 ? ' ' : ''}<PhrasingContent node={chunk} />
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
