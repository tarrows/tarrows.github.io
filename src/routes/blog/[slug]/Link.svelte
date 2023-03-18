<script lang="ts">
  import type { Link } from 'mdast'
  import StaticPhrasingContent from './StaticPhrasingContent.svelte';
  export let node: Link;
</script>

<a href={node.url}>
  {#each node.children as spc}
  <StaticPhrasingContent node={spc} />
  {/each}
</a>
