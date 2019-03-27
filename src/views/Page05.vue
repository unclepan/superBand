<template>
  <div :class="$style.wrap">
      <div :class="$style['daTiMianBan']" v-if="tishiShow">
        <div class="bounceInDown" :class="$style['da-an']">
          <p :class="$style['da-an-title']">提示</p>
          <p>{{tishiText}}</p>
          <img :class="$style['fanhui']" @click="fanHuiFenXiang()" src="../assets/images/img-2019-2-22/hongbao-04.png">
        </div>
      </div>


      <!-- <img :class="$style.dianJiFenxiang" src="../assets/images/img-2019-2-22/fenxiang-01.png"> -->

      <div :class="$style.mianban">
        <img class="zoomInDown" :class="$style.title" src="../assets/images/img-2019-2-22/hongbao-01.png">
        <div class="fadeInDown" :class="$style.hongbao">
            <p>
                <span :class="$style.big">{{num}}</span>
                <span>元</span>
            </p>
        </div>
        <div :class="$style.btn">
          <img @click="show=true" src="../assets/images/img-2019-2-22/hongbao-03.png">
          <img @click="fanHuiFenXiang()" src="../assets/images/img-2019-2-22/hongbao-04.png">
        </div>
      </div>

      <div :class="$style.mianbanZheZhao" v-if="show">
        <div :class="$style.gongxi">
            <p>恭喜您！</p>
            <p>获得了{{num}}元红包！</p>
            <p>已存入您的微信钱包！</p> 
        </div>
        <div :class="$style.btn">
            <!-- <img src="../assets/images/img-2019-2-22/hongbao-03.png"> -->
            <img @click="fanHuiFenXiang()" src="../assets/images/img-2019-2-22/hongbao-04.png">
        </div>
      </div>

      <img :class="$style['main-01']" src="../assets/images/img-2019-2-22/main-01.png">
      <img :class="$style['main-02']" src="../assets/images/img-2019-2-22/main-02.png">
      <img class="xianying" :class="$style['main-03']" src="../assets/images/img-2019-2-22/fenxiang-07.png">
      <img :class="$style['main-04']" src="../assets/images/img-2019-2-22/fenxiang-06.png">
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      tishiShow: false,
      tishiText: '出错了！',
      show: false,
      num: 0,
    };
  },
  computed: {
    ...mapState(['xuanDeDaAn']),
  },
  components: {
  },
  created() {
    this.init();
  },
  mounted() {

  },
  methods: {
    init() {
      const dui = this.xuanDeDaAn.filter(item => {
        return item === 1;
      }).length;
      if (dui < 3) {
        this.$router.replace({ name: 'Page01' });
      } else {
        this.jiangjin();
      }
    },
    jiangjin() {
      axios.get('http://app.erji1pin.cn/index/index/wjldjdhqhb').then((response) => {
        const vData = response.data;
        if (vData === '非法登录') {
          this.$router.replace({ name: 'Page01' });
        } else if (vData === 0) {
          this.tishiText = '您已经领取了红包，请明天再来！';
          this.tishiShow = true;
        } else if (vData === 1) {
          this.tishiText = '今日红包已全部发放，请明天再来！';
          this.tishiShow = true;
        } else if (vData === 2) {
          this.tishiText = '未中奖！';
          this.tishiShow = true;
        } else {
          this.num = (vData / 100);
        }
      }).catch(() => {
        this.tishiText = '出错了！';
        this.tishiShow = true;
      });
    },
    fanHuiFenXiang() {
      this.$router.replace({ name: 'Page04' });
    },
  },
};
</script>
<style lang="less" module>
.daTiMianBan{
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 4000;
  display: flex;
  justify-content: center;
  align-items: center;
  .da-an{
    text-align: center;
    font-size: 0.7rem;
    margin: 0 auto;
    width: 16rem;
    background: #54954d;
    color: #fdf3b8;
    border: 0.14rem solid #fdf3b8;
    border-radius: 1.4rem;
    padding: 0.3rem;
    box-shadow: 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2);
    .da-an-title{
      text-shadow:0.12rem 0.12rem 0 #4d7d2e;
      color: #fdf3b8;
      -webkit-text-fill-color: #fdf3b8;/*文字的填充色*/
      -webkit-text-stroke: 0.023rem #fdf3b8;/*描边的像素，也就是粗细，这里指定是2像素的黑色边框*/
      margin: 0 auto 0.2rem;
      font-size: 1rem;
      width: 9rem;
      background-image:url('../assets/images/img-2019-2-22/dati-03.png');
      background-size:100%;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .fanhui{
      width: 4rem;
      margin-top: 0.4rem;
    }
  }
}
.wrap{
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url('../assets/images/img-2019-2-22/wrap-bg.jpg');
  background-size:12px;
  .dianJiFenxiang{
    position: fixed;
    right: 1rem;
    top: 1rem;
    z-index: 1000;
    width: 1.2rem;
  }
  .main-01{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .main-02{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .main-03{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 0 !important;
  }
  .main-04{
    width: 20rem;
    position: fixed;
    bottom: 0;
    left: 50%;
    margin-left: -10rem;
    z-index: 1 !important;
  }
  .mianban{
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    text-align: center;
    z-index: 3000 !important;
    text-align: center;
    .title{
      width: 17rem;
      margin: 0.8rem auto 0;
    }
    .hongbao{
        width: 8rem;
        height: 8rem;
        margin: 0 auto;
        margin-top: -0.5rem;
        background-image: url('../assets/images/img-2019-2-22/hongbao-02.png');
        background-repeat: no-repeat;
        background-size:100%; 
        opacity: 0;
        p{
            padding-top: 1.4rem;
            color: #cc2c23;
            .big{
                font-size: 2rem;
            }
        }
    }
    .btn{
      position: absolute;
      bottom: 1rem;
      left: 50%;
      margin-left: -5rem;
      width: 10rem;
      display: flex;
      justify-content: center;
      img{
        margin: 0 0.5rem;
        display: block;
        width: 4rem;
        height: 1.6rem;
      }
    }
  }

  .mianbanZheZhao{
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        text-align: center;
        z-index: 3001;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.8);
        .gongxi{
           position: absolute;
           width: 100%;
           bottom: 3rem;
           color: #fef7a8;
        }
        .btn{
            position: absolute;
            bottom: 1rem;
            left: 50%;
            margin-left: -5rem;
            width: 10rem;
            display: flex;
            justify-content: center;
            img{
                margin: 0 0.5rem;
                display: block;
                width: 4rem;
                height: 1.6rem;
            }
        }
    }

}
</style>

