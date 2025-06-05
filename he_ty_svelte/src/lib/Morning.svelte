<script lang="ts">
    let msg : String = $state("Good Morning");
    const myclick = () => {
        msg = "Good Evening"
    }
</script>
<input type="text" value="{msg}" />
<button onclick={myclick}>CLICK</button>
