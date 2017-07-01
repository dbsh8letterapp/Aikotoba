// This is a JavaScript file
$(function()
{
  //mBaaSの初期化
  var application_key = "bc212a98e39e112634962ae2cc5e51a1b9b2048f6287674f41cdb3dfde339394";
  var client_key = "ba03e02e614215efdd9d79b96385b1a9cdbb906098b26dd2e236c31d295d12a8";
  var ncmb = new NCMB(application_key, client_key);
  var user = ncmb.User.getCurrentUser();
  // ログインチェック
  // if (user === null) {
  //     location.href = "./index.html";
  // } else {
  //     $("#youkoso").append("ようこそ " + user.userName + " さん！<br>" + "[ログアウトはこちら]");
  // }
  // 
  // // ログアウト
  // $("#youkoso").on("click", function() {
  //     ncmb.User.logout()
  //     .then(function() {
  //         location.href = "./index.html";
  //     })
  // });
  //送信ボタン
  $('#sousin')
    .on('click', function()
    {
      var Contents = ncmb.DataStore("Contents");
      var contents = new Contents();
      var cts = $("#content")
        .val();
      //var cts= document.form.content.value;
      contents.set("contents", cts)
        .save()
        .then(function()
        {
          // $("#msg").append("内容を送信しました！<br>");
          alert("送信完了！");
        })
        .catch(function(err)
        {
          $("#msg")
            .append("error:" + error.message + "<br>");
        })
      return false;
    });
  //受信ボタン
  $(document)
    .ready(function()
    {
      var Contents = ncmb.DataStore("Contents");
      Contents.limit(100)
        .fetchAll()
        .then(function(contents)
        {
          $("#post")
            .append(contents[Math.floor(Math.random() * contents.length)].get("contents"));
        })
      return false;
    });
  //戻るボタン
  $("#writemodoru")
    .on("click", function()
    {
      location.href = "./home.html";
    });
  //戻るボタン
  $("#showmodoru")
    .on("click", function()
    {
      location.href = "./home.html";
    });
  //おくる
  $('#okuru')
    .on('click', function()
    {
      location.href = "./write.html";
    });
  //であう
  $('#deau')
    .on('click', function()
    {
      location.href = "./recieve.html";
    });
  //おきに
  // $('#okini').on('click', function() {
  //   location.href = "./favorite.html";
  // });
  //クリアボタン
  //   $('#clear').on('click', function() {
  //     $('#post').empty();
  // });
});