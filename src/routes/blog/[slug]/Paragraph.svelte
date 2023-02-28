<script lang="ts">
  import type { Paragraph } from 'mdast';
  export let node: Paragraph;

  const lines = [...node.children];
</script>

{#each lines as line}
  <hr class="upper" />
  <p>{JSON.stringify(line)}</p>
  <hr class="bottom" />
{/each}

<style>
  p {
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
  hr.upper {
    border-top: 1px solid #00f;
  }
  hr.bottom {
    border-top: 1px dashed #888;
    margin-bottom: 16px;
  }
</style>
