<script lang="ts">
  import type { Table } from 'mdast';
  import TableRow from './TableRow.svelte';

  export let node: Table;
  const align = [...(node.align ?? [])];
  const [headerRow, ...rows] = [...node.children];
</script>

<table>
  <thead>
    <TableRow header row={headerRow} {align} />
  </thead>
  <tbody>
    {#each rows as row}
      <TableRow {row} {align} />
    {/each}
  </tbody>
</table>

<style>
  table {
    border: 1px solid #eee;
    border-spacing: 0;
  }
</style>
