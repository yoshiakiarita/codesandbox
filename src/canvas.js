let canvas = document.getElementById("workSpace");
context = canvas.getContext("2d");

//path（軌跡）を始めるということを宣言する
context.beginPath();
//pathの開始座標を指定する
context.moveTo(50, 50);
//座標を指定してpathを引いていく
context.lineTo(150, 150);
//現在のpathを描画する
context.stroke();

//矩形の色を指定
context.fillStyle = "#a00000";
//矩形を描画する
context.fillRect(160, 50, 100, 70);
