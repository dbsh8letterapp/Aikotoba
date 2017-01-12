// This is a JavaScript file
$(function()
{
  //mBaaSの初期化
  var application_key = "efa576f10d4276d54840cd0d977dfd5691c299f048beba77d988da6f0134e7ef";
  var client_key = "ee99cda55eb9bb8e288419f424fe0c6917c3c32a6fbb01c21fc0ffe271cead67";
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