<script lang="ts">
  import type { PageData } from './$types';
  import Paragraph from './Paragraph.svelte';
  import Heading from './Heading.svelte';
  import Katex from './Katex.svelte';
  import Table from './Table.svelte';
  import List from './List.svelte'
  export let data: PageData;
</script>

{#each data.content as x}
  {#if x.type === 'heading'}
    <Heading node={x} />
  {:else if x.type === 'paragraph'}
    <Paragraph node={x} />
  {:else if x.type === 'math'}
    <Katex displayMode>{x.value}</Katex>
  {:else if x.type === 'table'}
    <Table node={x} />
  {:else if x.type === 'list'}
    <List node={x} />
  {:else}
    <p>{JSON.stringify(x)}</p>
  {/if}
{/each}
