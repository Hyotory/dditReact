<script>
  import { onMount } from 'svelte';

  let targetNumber = Math.floor(Math.random() * 99) + 1;
  let guessInput = '';
  let attempts = 0;
  let score = 100;
  let streak = 0;
  let gameOver = false;
  let history = [];
  let showCelebration = false;

  onMount(() => {
    streak = parseInt(localStorage.getItem('streak') || '0');
  });

  function makeGuess() {
    if (gameOver) return;

    const guess = parseInt(guessInput);

    if (!guess || guess < 1 || guess > 99) {
      alert('1부터 99까지의 숫자를 입력해주세요!');
      return;
    }

    attempts++;
    score = Math.max(0, score - 5);

    let result = {
      number: guess,
      type: '',
      message: ''
    };

    if (guess === targetNumber) {
      result.type = 'correct';
      result.message = '정답!';
      gameOver = true;
      streak++;
      localStorage.setItem('streak', streak.toString());
      showCelebration = true;
      setTimeout(() => showCelebration = false, 3000);
      alert(`🎉 정답입니다! ${attempts}번 만에 맞췄어요!`);
    } else if (guess > targetNumber) {
      result.type = 'high';
      result.message = '너무 크다!';
    } else {
      result.type = 'low';
      result.message = '너무 작다!';
    }

    history = [result, ...history];
    guessInput = '';
  }

  function resetGame() {
    targetNumber = Math.floor(Math.random() * 99) + 1;
    attempts = 0;
    score = 100;
    gameOver = false;

    if (history.length > 0) {
      streak = 0;
      localStorage.setItem('streak', '0');
    }

    history = [];
    guessInput = '';
    showCelebration = false;
    alert('새 게임이 시작되었습니다!');
  }

  function handleKeypress(event) {
    if (event.key === 'Enter') {
      makeGuess();
    }
  }
</script>

<div class="game-container">
  <h1 class="title">🎯 NUMBER HUNTER</h1>

  <div class="target-display">
    <div style="color: white; font-size: 1.2rem; margin-bottom: 10px;">맞출 숫자</div>
    <div class="target-number">{gameOver ? targetNumber : '?'}</div>
  </div>

  <div class="stats">
    <div class="stat">
      <div class="stat-number">{attempts}</div>
      <div class="stat-label">시도 횟수</div>
    </div>
    <div class="stat">
      <div class="stat-number">{score}</div>
      <div class="stat-label">점수</div>
    </div>
    <div class="stat">
      <div class="stat-number">{streak}</div>
      <div class="stat-label">연승</div>
    </div>
  </div>

  <div class="input-section">
    <input
            type="number"
            class="guess-input"
            bind:value={guessInput}
            placeholder="1-99"
            min="1"
            max="99"
            on:keypress={handleKeypress}
    >
    <br>
    <button class="guess-button" on:click={makeGuess}>🚀 GUESS!</button>
    <button class="reset-button" on:click={resetGame}>🔄 새 게임</button>
  </div>

  <div class="history">
    {#each history as item}
      <div class="guess-item guess-{item.type}">
        <span>
          {#if item.type === 'correct'}🎉{:else if item.type === 'high'}📈{:else}📉{/if}
          {item.number}
        </span>
        <span><strong>{item.message}</strong></span>
      </div>
    {/each}
  </div>
</div>

{#if showCelebration}
  <div class="celebration">
    {#each Array(50) as _, i}
      <div class="confetti" style="left: {Math.random() * 100}%; background: hsl({Math.random() * 360}, 100%, 50%); animation-delay: {Math.random() * 3}s;"></div>
    {/each}
  </div>
{/if}

<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

  :global(body) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #667eea 100%);
    font-family: 'Orbitron', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }

  .game-container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 30px;
    padding: 40px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
    min-width: 500px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .game-container::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.1), transparent);
    animation: rotate 10s linear infinite;
    z-index: -1;
  }

  @keyframes rotate {
    100% { transform: rotate(360deg); }
  }

  .title {
    font-size: 2.5rem;
    font-weight: 900;
    background: linear-gradient(45deg, #00ff88, #00d4ff, #ff0088, #ffaa00);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 3s ease infinite;
    margin-bottom: 30px;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  }

  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .target-display {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    border-radius: 20px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
  }

  .target-number {
    font-size: 3rem;
    font-weight: 900;
    color: white;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }

  .input-section {
    margin: 30px 0;
  }

  .guess-input {
    width: 200px;
    height: 60px;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    border: none;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: inset 0 5px 15px rgba(0, 0, 0, 0.1);
    outline: none;
    transition: all 0.3s ease;
  }

  .guess-input:focus {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
    background: rgba(255, 255, 255, 1);
  }

  .guess-button {
    background: linear-gradient(135deg, #00ff88, #00d4ff);
    border: none;
    border-radius: 50px;
    padding: 18px 40px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #000;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
    margin: 20px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .guess-button:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.4);
  }

  .guess-button:active {
    transform: translateY(-2px) scale(1.02);
  }

  .history {
    max-height: 300px;
    overflow-y: auto;
    margin-top: 30px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    backdrop-filter: blur(10px);
  }

  .guess-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    margin: 10px 0;
    border-radius: 10px;
    font-weight: 700;
    font-size: 1.1rem;
    animation: slideIn 0.5s ease;
    transition: all 0.3s ease;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .guess-correct {
    background: linear-gradient(135deg, #00ff88, #00d4ff);
    color: #000;
    box-shadow: 0 5px 20px rgba(0, 255, 136, 0.4);
  }

  .guess-high {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    box-shadow: 0 5px 20px rgba(255, 107, 107, 0.4);
  }

  .guess-low {
    background: linear-gradient(135deg, #4834d4, #686de0);
    color: white;
    box-shadow: 0 5px 20px rgba(72, 52, 212, 0.4);
  }

  .celebration {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
  }

  .confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    animation: confetti-fall 3s linear infinite;
  }

  @keyframes confetti-fall {
    to {
      transform: translateY(100vh) rotate(360deg);
    }
  }

  .stats {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
  }

  .stat {
    text-align: center;
    color: white;
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 900;
    background: linear-gradient(45deg, #00ff88, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .stat-label {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 5px;
  }

  .reset-button {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    border: none;
    border-radius: 25px;
    padding: 10px 25px;
    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-left: 10px;
  }

  .reset-button:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
  }
</style>