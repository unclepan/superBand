<?php

  session_start();


  if((!@$_SESSION['openid'])||(!@$_SESSION['nickname'])||(!@$_SESSION['headimgurl'])){
        header('Location:/front/yinlian1207_openid');
    exit;
  }

require_once "jssdk.php";
$jssdk = new JSSDK("wx62ad58ea7b94c3c9", "16dc05d00e765abe119309a9be7f517b");
$signPackage = $jssdk->GetSignPackage();



  //$tx=base64_encode($_SESSION["headimgurl"]);
  //echo $tx;
  //echo $_SESSION["headimgurl"];


 $url=$_SESSION["headimgurl"];
 $curl = curl_init();curl_setopt($curl, CURLOPT_URL, $url);curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
 curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);curl_setopt($curl, CURLOPT_ENCODING, 'gzip');
 curl_setopt($curl, CURLOPT_HTTPHEADER, $header);$data = curl_exec($curl);$code = curl_getinfo($curl, CURLINFO_HTTP_CODE);curl_close($curl);
 if ($code == 200) {//把URL格式的图片转成base64_encode格式的！
 $imgBase64Code = "data:image/jpg;base64," . base64_encode($data);
 }
 $img_content=$imgBase64Code;//图片内容


?>


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0" name="viewport">
    <title>超级乐队</title>
  <link href="/cjyd/static/css/app.01aced42abc077a0df8505b45c3c6b0c.css" rel="stylesheet"></head>
  <body>
    <div id="app"></div>

   <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script type="text/javascript">
  wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',

    jsApiList: [
    'checkJsApi',
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'openCard'
    ]

  });

  function wwxx(){
    wx.ready(function () {
      wx.onMenuShareAppMessage({
        title: '<?php echo $_SESSION["nickname"];?>:'+ (window.wxTitle || '喊你来测试乐队角色担当'), // 分享标题
        desc: window.wxDoc || '跟我一起在《超级乐队》测测你是属于乐队哪个角色吧！', // 分享描述
        link: "http://app.pr365.com.cn/cjyd",
        imgUrl: '<?php echo $_SESSION["headimgurl"];?>',
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: ''
      });

      wx.onMenuShareTimeline({
        title:'<?php echo $_SESSION["nickname"];?>:' + (window.wxTitle || '喊你来测试乐队角色担当'),
        link: "http://app.pr365.com.cn/cjyd",
        imgUrl: '<?php echo $_SESSION["headimgurl"];?>',
      });

    });
  }
  wwxx()

  var npoc = {
    name: '<?php echo $_SESSION["nickname"];?>',
    pic: '<?php echo $img_content;?>'
  }

</script>

    <!-- built files will be auto injected -->
    <script type="text/javascript" src="/cjyd/static/js/manifest.8bc6314ccb92a441ac10.js"></script><script type="text/javascript" src="/cjyd/static/js/vendor.b6e352898056adcbceb4.js"></script><script type="text/javascript" src="/cjyd/static/js/app.41b2ed28336f3a3a3caa.js"></script></body>
</html>
