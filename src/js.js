var videoElement = document.getElementById("video"),
  comment = document.getElementById("comment");

//動画を再生する関数
function playVideo() {
  videoElement.play();
  comment.innerHTML = "動画再生中";
  console.log(element.innerHTML);
}

//動画を一時停止する関数
function pauseVideo() {
  videoElement.pause();
  comment.innerHTML = "動画が一時停止されました";
}

//動画再生が終了した時の文言を表示する関数
function displayEndComment() {
  comment.innerHTML =
    "動画再生終了<br>もう一度見たい場合は再生ボタンを押してください";
}

//動画再生終了時のイベント発火時の処理
videoElement.addEventListener("ended", displayEndComment, false);
