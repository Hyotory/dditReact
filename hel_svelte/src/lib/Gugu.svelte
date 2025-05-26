<script>

let dan = '';
let result = '';

  const Gugu = () => {
    result = '';

    for(let i=1; i<=9; i++) {
      result += `${dan} * ${i} = ${dan * i}\n`
    }
  }

</script>

<table>
  <tbody>
    <tr>
      <td>출력단수</td>
      <td>
        <input type="text" bind:value={dan}>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <input type="button" id="출력하기" value="출력하기" onclick="{Gugu}">
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <textarea bind:value={result} rows="13" cols="17" readonly></textarea>
      </td>
    </tr>
  </tbody>
</table>
<style>
  input[type="text"]{
    width: 40px;
  }
</style>
