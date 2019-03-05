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
            title: '洗碗精大激斗', // 分享标题
            link: 'http://app.erji1pin.cn/index/index/wjldjd/', // 分享链接
            imgUrl: 'http://app.erji1pin.cn/static/images/zhuanfa.jpg', // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: '洗碗精大激斗', // 分享标题
            desc: data ? data : '快来看我发动四两拨千斤必杀技，成功打败洗碗精！耶！', // 分享标题, // 分享描述
            link: 'http://app.erji1pin.cn/index/index/wjldjd/', // 分享链接
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