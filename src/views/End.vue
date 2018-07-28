<template>
  <div :class="$style.wrap">
    <div :class="$style.main">
      <div :class="$style.header">
        <img :class="$style.logo" src="../assets/images/01.png">
        <img :class="$style.mainLogo" src="../assets/images/03.png">
      </div>
      <div :class="$style.problemCard">
        <p :class="$style.problem">你是乐队主唱</p>
        <p :class="$style.text">具有领导者的潜质，是朋友圈的灵魂 人物，团队中的存在感担当！你思想 单纯，天生一副热心肠，时刻为他人 着想，又善于协调人际关系</p>
        <div :class="$style.qr">
          <img src="../assets/images/QR_code.jpg" alt="">
          <p>识别二维码，测试你在乐队中的领导力</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import Canvas2Image from '../assets/javascript/canvas2image';

export default {
  name: 'End',
  data() {
    return {
    };
  },
  methods: {
    convert2canvas(cntElem) {
      const shareContent = cntElem;// 需要截图的包裹的（原生的）DOM 对象
      const width = shareContent.offsetWidth; // 获取dom 宽度
      const height = shareContent.offsetHeight; // 获取dom 高度
      const canvas = document.createElement('canvas'); // 创建一个canvas节点
      const scale = 2; // 定义任意放大倍数 支持小数
      canvas.width = width * scale; // 定义canvas 宽度 * 缩放
      canvas.height = height * scale; // 定义canvas高度 *缩放
      canvas.getContext('2d').scale(scale, scale); // 获取context,设置scale
      const opts = {
        scale, // 添加的scale 参数
        canvas, // 自定义 canvas
        // logging: true, //日志开关，便于查看html2canvas的内部执行流程
        width, // dom 原始宽度
        height,
        useCORS: true, // 【重要】开启跨域配置
      };

      html2canvas(shareContent, opts).then((canvas) => {
        const context = canvas.getContext('2d');
        // 【重要】关闭抗锯齿
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

        // 【重要】默认转化的格式为png,也可设置为其他格式
        const img = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height);
        img.className = this.$style.superPic;
        document.body.appendChild(img);
      });
    },
  },
  mounted() {
    this.convert2canvas(document.body);
  },
};
</script>

<style lang="less">

</style>
<style lang="less" module>
.wrap{
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url('../assets/images/end_bg.jpg');
  background-repeat: no-repeat;
  background-size:100%;
  background-position: 0 bottom;
  .main{
    padding: 10px;
    img{
      display: inline-block;
    }
    .logo{
      width: 7rem;
    }
    .mainLogo{
      width: 15rem;
      display: block;
      margin: 1.6rem auto;
    }
    .problemCard{
      border:3px solid rgba(255, 255, 255, 0.6);
      background: rgba(12, 255, 240, 0.6);
      border-radius: 10px;
      padding: 1rem;
      margin: 1rem;
      margin-top: 4rem;
      .problem{
        color: #ffffff;
        font-size: 3rem;
        padding: 1rem;
        text-align:center;
      }
      .text{
        color: #ffffff;
        font-size: 1.6rem;
      }
      .qr{
        text-align: right;
        padding-top: 1.2rem;
        img{
          width: 4rem;
        }
        p{
          padding-top: 1rem;
          font-size: 1rem;
          color: #ffffff;
          font-family: '微软雅黑';
        }
      }
    }
  }
}
.superPic{
  width: 100%;
  position:fixed;
  left: 0;
  top:0;
  z-index: 100;
}
</style>
