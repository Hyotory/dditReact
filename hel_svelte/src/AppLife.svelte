<script>
import Life01 from "./lib/Life01.svelte";
import Life02 from "./lib/Life02.svelte";

let flag_life =true

const myclick = () => {
  flag_life = !flag_life
}

</script>

<main>
  {#if flag_life}
  <Life01/>
    <br/>
    {:else}
  <Life02/>
    <br/>
    {/if}
  <button onclick={myclick}>toggle</button>

</main>
