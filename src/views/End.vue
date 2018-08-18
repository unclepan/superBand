<template>
  <div :class="$style.wrap">
    <div :class="$style.main">
      <div :class="$style.header">
        <img :class="$style.logo" src="../assets/images/01.png">
        <img :class="$style.mainLogo" src="../assets/images/03.png">
      </div>
      <div :class="$style.problemCard">
        <div :class="$style.header">
          <img id="headerPic" :src="headimgurl">
        </div>
        <p :class="$style.problem">{{Vdata.h}}</p>
        <p :class="$style.text">{{Vdata.t}}</p>
        <div :class="$style.qr">
          <p>我是第{{num}}个测试过《超级乐队》的人长按识别二维码，跟我一起测测你是属于乐队哪个角色吧</p>
          <img src="../assets/images/QR_code.png" alt="">
        </div>
      </div>
      <div :class="$style.sPic">
        <img src="../assets/images/s.png">
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import axios from 'axios';
import { mapState } from 'vuex';
import Canvas2Image from '../assets/javascript/canvas2image';
import data from '../mock/comment';


export default {
  name: 'End',
  data() {
    return {
      data,
      Vdata: null,
      num: 0,
      headimgurl: '',
    };
  },
  created() {
    const v = this.choice.slice(0, 4).join('');
    const c = this.data.find((item, index) => {
      return item.m.indexOf(v) >= 0;
    });
    this.Vdata = c || this.data[3];
    this.headimgurl = window.npoc.pic;
    window.wxTitle = this.Vdata.h;
    window.wxDoc = this.Vdata.t;
    window.wwxx();
    this.$nextTick(() => {
      // DOM 更新了
      axios.get('http://www.erji1pin.cn/index.php/wxapi/jsq').then((response) => {
        this.num = response.data;
        this.convert2canvas(document.body);
      }).catch((response) => {
        console.log('统计接口报错');
      });
    });
  },
  computed: {
    ...mapState(['choice']),
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
        img.id = 'superPic';
        const pic = document.getElementById('superPic');
        if (pic) {
          document.body.removeChild(pic);
        }
        document.body.appendChild(img);
      });
    },
  },
  destroyed() {
    const pic = document.getElementById('superPic');
    if (pic) {
      document.body.removeChild(pic);
    }
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
      margin: 1rem auto;
    }
    .problemCard{
      border:3px solid rgba(255, 255, 255, 0.6);
      background: rgba(12, 255, 240, 0.6);
      border-radius: 10px;
      padding: 1rem;
      margin: 1rem;
      margin-top: 2rem;
      .header{
        width: 4.5rem;
        height: 4.5rem;
        margin: 0 auto 0.4rem;
        img{
          width: 100%;
        }
      }
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
        padding-top: 1.2rem;
        display: flex;
        justify-content: center;
        img{
          width: 5rem;
          height: 5rem;
        }
        p{
          padding-right: 1rem;
          font-size: 1.4rem;
          color: #ffffff;
          font-family: '微软雅黑';
          line-height: 1.5rem;
          font-weight: bold;
        }
      }
    }
    .sPic{
      margin: 1.3rem auto 0;
      display: black;
      width: 70%;
      img{
        width:100%;
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
