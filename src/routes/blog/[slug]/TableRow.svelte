<script lang="ts">
  import type { TableRow, AlignType } from 'mdast';

  export let align: AlignType[];
  export let row: TableRow;
  export let header = false;

  const alignClass = (align: AlignType) => {
    switch (align) {
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      case 'center':
        return 'center';
      default:
        return null;
    }
  };
</script>

<tr>
  {#each row.children as cell, idx}
    <svelte:element this={header ? 'th' : 'td'} class={alignClass(align?.[idx])}>
      {#each cell.children as phrase}
        {#if phrase.type === 'html' && phrase.value === '<br />'}
          <br />
        {:else if phrase.type === 'text'}
          {phrase.value}
        {/if}
      {/each}
    </svelte:element>
  {/each}
</tr>

<style>
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
  .center {
    text-align: center;
  }

  th,
  td {
    border: 1px solid #eee;
    padding: 16px;
  }
</style>
