<script>
  let msg = "Good Morning"
  const myclick = () => {
    msg = "Good Evening"
  }
</script>

{msg}
<button onclick={myclick}>
  CLICK
</button>
