<script>
  let count = "100";
  const myclick = () => {
    let numCount = parseInt(count);
    numCount++;
    count = numCount.toString();
  }

</script>

{count}
<button onclick={myclick}>
  INCREASE
</button>
