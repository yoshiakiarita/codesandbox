//Objectを生成
var reader = new FileReader();

$(function () {
  var $dropFrame = $(".dropFrame");

  //ドラッグしたとき
  $dropFrame.on("dragover", function (e) {
    e.preventDefault();
  });

  //ドロップしたとき
  $dropFrame.on("drop", function (e) {
    e.preventDefault();
    reader.readAsDataURL(e.originalEvent.dataTransfer.files[0]);
  });

  //サムネイルの作成
  reader.addEventListener("load", function () {
    $(".thumbnail ul").append('<li><img alt=""></li>');
    $(".thumbnail ul li:last img").attr("src", reader.result);
  });

  //サムネイル画像をクリックした時の処理
  $(document).on("click", ".thumbnail img", function () {
    $(".photo").html("<img />").children().attr("src", $(this).attr("src"));
  });

  //終了ボタンを押した時の処理
  $(".finish").on("click", function () {
    $(this).add(".dropFrame").fadeOut();
  });
});
