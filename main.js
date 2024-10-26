const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// 開始時間
let startTime;
// 停止時間
let stopTime = 0;
// インターバルID
let intervalID;

// 時間を表示する関数
function displayTime() {
    const elapsedTime = Date.now() - startTime + stopTime;

    const h = Math.floor(elapsedTime / (1000 * 60 * 60));                 // 時
    const m = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)); // 分
    const s = Math.floor((elapsedTime % (1000 * 60)) / 1000);             // 秒
    const ms = Math.floor((elapsedTime % 1000) / 100);                    // ミリ秒（1桁）

    time.textContent = `${h}:${m}:${s}:${ms}`;
}

// スタートボタンがクリックされたら時間を進める
startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    startTime = Date.now();
    
    // setIntervalを使って100ミリ秒ごとにdisplayTime関数を実行
    intervalID = setInterval(displayTime, 100);
});

// ストップボタンがクリックされたら時間を止める
stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    clearInterval(intervalID); // インターバルを停止
    stopTime += (Date.now() - startTime);
});

// リセットボタンがクリックされたら時間を0に戻す
resetButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    time.textContent = '0:0:0:0';
    stopTime = 0;
});