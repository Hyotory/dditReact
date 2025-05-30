<script>
  import MyInput from "./lib/MyInput.svelte";
  let obj = null;
  let mvalue = "Hello Mother Fxxker";

  const myclick = () => {
    obj.value = "Good bye";
    mvalue = "No thanks";  // 반응형으로 업데이트
  }
</script>

<main>
  <input type="text" value="Hello Mother Fxxker" bind:this={obj}/><br/>
  <MyInput bind:value={mvalue} /><br/>
  <button onclick={myclick}>Change Text</button>
</main>