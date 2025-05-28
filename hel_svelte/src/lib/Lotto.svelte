<script>

  let lottNumbers = [0, 0, 0, 0, 0, 0];
  const myclick = () => {
    let lottArr = [];

    while(lottArr.length < 6){
      let lottNumber = Math.floor(Math.random()*45) + 1;

      if(!lottArr.includes(lottNumber)){
        lottArr.push(lottNumber);
      }
    }
    // lottArr.sort((a,b) => a-b);
    bubbleSort(lottArr);
    function bubbleSort(arr) {
      let temp = 0;
      for(let i = 0; i < arr.length - 1; i++){
        for(let j = 1; j < arr.length - i; j++){
          if(arr[j] < arr[j-1]) {
            temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr;
    }

    console.log(lottArr);

    lottNumbers = lottArr;
  }
</script>

<table>
  <tbody>
    <tr>
      {#each lottNumbers as number}
        <td>
          <span class="myspan">{number || '_'}</span>
        </td>
      {/each}
    </tr>
    <tr>
      <td colspan="6">
        <button on:click={myclick}>로또생성하기</button>
      </td>
    </tr>
  </tbody>
</table>

<style>
  table, tr, td{
    border: 1px solid grey;
  }
</style>
