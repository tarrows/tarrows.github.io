<!-- same approarch with https://github.com/kelvinsjk/mathlified/blob/main/packages/svelte-katex/Katex.svelte -->
<script lang="ts">
  import katex from 'katex';
  import { afterUpdate } from 'svelte';
  let output: HTMLElement;
  let latex: HTMLElement;
  export let displayMode = false;

  afterUpdate(async () => {
    katex.render(latex.textContent ?? '', output, { displayMode });
  });
</script>

<span bind:this={latex} style="display:none;">
  <slot />
</span>

{#if displayMode}
  <div bind:this={output} />
{:else}
  <span bind:this={output} />
{/if}
