<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<ul>
  {#each data.posts as post}
    <li><a href={`/blog/${post.path}`}>{post.path}</a></li>
  {/each}
</ul>
