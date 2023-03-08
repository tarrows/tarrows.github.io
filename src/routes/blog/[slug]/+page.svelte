<script lang="ts">
  import type { PageData } from './$types';
  import Paragraph from './Paragraph.svelte';
  import Heading from './Heading.svelte';
  export let data: PageData;
</script>

{#each data.content as x}
  {#if x.type === 'heading'}
    <Heading node={x} />
  {:else if x.type === 'paragraph'}
    <Paragraph node={x} />
  {:else}
    <p>{JSON.stringify(x)}</p>
  {/if}
{/each}
