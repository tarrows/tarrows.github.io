<script lang="ts">
  import type { PhrasingContent } from 'mdast';
  import Link from './Link.svelte';
  import StaticPhrasingContent from './StaticPhrasingContent.svelte';

  export let node: PhrasingContent;
</script>


{#if node.type === 'link'}
  <Link node={node} />
{:else if node.type === 'linkReference'}
  <!-- TODO -->
  {JSON.stringify(node)}
{:else}
  <StaticPhrasingContent node={node} />
{/if}
