<script lang="ts">
  import type { List } from 'mdast'
  import PhrasingContent from './PhrasingContent.svelte'

  export let node: List;
</script>

<ul>
  {#each node.children as li}
  <li>
    {#each li.children as content}
      {#if content.type === 'paragraph'}
        {#each content.children as pc, idx}
          {idx > 0 ? ' ' : ''}<PhrasingContent node={pc} />
        {/each}
      {:else}
        <p>{JSON.stringify(content)}</p>
      {/if}
    {/each}
  </li>
  {/each}
</ul>
