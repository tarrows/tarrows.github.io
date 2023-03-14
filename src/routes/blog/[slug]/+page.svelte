<script lang="ts">
  import type { PageData } from './$types';
  import Paragraph from './Paragraph.svelte';
  import Heading from './Heading.svelte';
  import Katex from './Katex.svelte';
  export let data: PageData;
</script>

{#each data.content as x}
  {#if x.type === 'heading'}
    <Heading node={x} />
  {:else if x.type === 'paragraph'}
    <Paragraph node={x} />
  {:else if x.type === 'math'}
    <Katex displayMode>{x.value}</Katex>
  {:else}
    <p>{JSON.stringify(x)}</p>
  {/if}
{/each}
