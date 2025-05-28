<script>
  import {onDestroy, onMount} from "svelte";

  let msg = "LIFE02"
  onMount(() => {
    console.log("LIFE02 onMount")
  })

  onDestroy(() => {
    console.log("LIFE02 onDestroy")
  })
</script>

{msg}
