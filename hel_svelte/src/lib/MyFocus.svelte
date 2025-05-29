<script>
  let inputElement;

  function handleFocus() {
    inputElement.focus();
  }

</script>

<input type="text" bind:this={inputElement} />
<button on:click={handleFocus}>FOCUS</button>