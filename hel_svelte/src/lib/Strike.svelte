<script>
  let inputValue = '';
  let results = [];
  let coms = [];
  let comNum = '';

  function generateComs() {
    let com = "123";

    let arr9 = [1,2,3,4,5,6,7,8,9];
    for(let i=0; i<1000; i++) {
      let rnd = parseInt((Math.random() * 9).toString());
      let temp = arr9[0];
      arr9[0] = arr9[rnd];
      arr9[rnd] = temp;
    }
    com = `${arr9[0]}${arr9[1]}${arr9[2]}`;
    console.log('com',com)

    // com 문자열을 배열로 변환
    coms = com.split('');
    comNum = com;
    console.log(comNum);
  }

  function myclick() {
    let myVal = inputValue.trim();

    // 입력 검증
    if(isNaN(Number(myVal)) || myVal.length !== 3) {
      alert("정수 3자리만 입력 가능");
      inputValue = '';
      return;
    }

    let mine = myVal.split('');
    let uniqueTest = new Set(mine);
    if(uniqueTest.size !== 3) {
      alert("같은 숫자 입력 불가능");
      inputValue = '';
      return;
    }

    // 결과 계산
    let strike = 0;
    let ball = 0;

    for(let i = 0; i < 3; i++) {
      if(coms[i] === mine[i]) {
        strike++;
      } else if(coms.includes(mine[i])) {
        ball++;
      }
    }

    // 결과 추가
    results = [...results, `${myVal} ${strike}S ${ball}B`];

    // 정답 확인
    if(strike === 3) {
      setTimeout(() => {
        alert(`${comNum} 정답입니다! 축하합니다!`);
        resetGame();
      }, 100);
    }

    inputValue = '';
  }

  function resetGame() {
    results = [];
    generateComs();
  }

  // 게임 시작
  generateComs();
</script>

<div style="padding: 20px;">
  <h2>숫자야구 게임</h2>

  <div style="margin-bottom: 10px;">
    <label>맞출 수: </label>
    <input
            type="text"
            bind:value={inputValue}
            style="width: 80px; padding: 5px;"
            maxlength="3"
            on:keydown={(e) => e.key === 'Enter' && myclick()}
    />
  </div>

  <button on:click={myclick} style="margin-bottom: 20px; padding: 8px 16px;">
    맞춰보기
  </button>

  <button on:click={resetGame} style="margin-left: 10px; padding: 8px 16px;">
    새게임
  </button>

  <div style="border: 1px solid #ccc; height: 200px; padding: 10px; overflow-y: auto; background: #f9f9f9;">
    {#each results as result}
      <div>{result}</div>
    {/each}
  </div>
</div>
