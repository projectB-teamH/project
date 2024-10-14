// 要素の取得
const textInput = document.getElementById("text-input");
const playButton = document.getElementById("play-sound");
const playbackSpeed = document.getElementById("playback-speed");
const speedDisplay = document.getElementById("speed-display");

// 再生速度の表示更新
playbackSpeed.addEventListener("input", () => {
  const speed = playbackSpeed.value;
  speedDisplay.textContent = speed;
});

// テキスト読み上げ機能
playButton.addEventListener("click", () => {
  // 入力されたテキストを取得
  const text = textInput.value;
  if (!text) {
    alert("テキストを入力してください");
    return;
  }

  // SpeechSynthesisUtteranceを作成
  const utterance = new SpeechSynthesisUtterance(text);
  
  // 再生速度を設定
  utterance.rate = playbackSpeed.value;

  // 音声を再生
  window.speechSynthesis.speak(utterance);
});

