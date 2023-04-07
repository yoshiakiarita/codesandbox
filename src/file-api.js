$(function () {
  var $dropFrame = $(".dropFrame");

  //ドラッグしたとき
  $dropFrame.on("dragover", function (e) {
    console.log(e);
    e.preventDefault();
  });

  //ドロップしたとき
  $dropFrame.on("drop", function (e) {
    e.preventDefault();
  });
});
