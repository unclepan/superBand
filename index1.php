<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script type="text/javascript">

   wx.config({
  debug: false,
   appId: '{$signPackage.appId}',
   timestamp: '{$signPackage.timestamp}',
   nonceStr: '{$signPackage.nonceStr}',
   signature: '{$signPackage.signature}',
   jsApiList: [
     // 所有要调用的 API 都要加到这个列表中
     "onMenuShareTimeline",
     "onMenuShareAppMessage",
     "onMenuShareQQ"
   ]
 });
 function wwxx(data){
  wx.ready(function () {
       wx.onMenuShareTimeline({
           title: data ? data : '吃货属性暴露！光吃光吃光吃（看成“吃光”的你已经没救了！）', // 分享标题
           link: 'http://app.erji1pin.cn/index/index/wjl20180821/', // 分享链接
           imgUrl: 'http://app.erji1pin.cn/static/images/zhuanfa.jpg', // 分享图标
           success: function () {
               // 用户确认分享后执行的回调函数
           },
           cancel: function () {
               // 用户取消分享后执行的回调函数
           }
       });
       wx.onMenuShareAppMessage({
           title: data ? data : '吃货属性暴露！光吃光吃光吃（看成“吃光”的你已经没救了！）', // 分享标题
           desc: '一站到底厨房脑洞大比拼！', // 分享描述
           link: 'http://app.erji1pin.cn/index/index/wjl20180821/', // 分享链接
           imgUrl: 'http://app.erji1pin.cn/static/images/zhuanfa.jpg', // 分享图标
           type: 'link', // 分享类型,music、video或link，不填默认为link
           dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
           success: function () {
               // 用户确认分享后执行的回调函数
           },
           cancel: function () {
               // 用户取消分享后执行的回调函数
           }
       });
   });
 }

 wwxx(null);


</script>


<script>
var _mtac = {};
(function() {
    var mta = document.createElement("script");
    mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.2";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "500645576");
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
})();
</script>
