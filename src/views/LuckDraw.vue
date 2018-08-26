<template>
  <div :class="$style.wrap">
    <div :class="$style.main">
      <img class="bounceIn" :class="$style.header" src="../assets/images/w_hongbaoBg.png">
      <img :class="$style.mainBox" src="../assets/images/w_hongbaoMain.png">
      <p class="shake" :class="$style.info">获得{{num}}元现金好礼</p>
      <div
        class="fadeOut"
        @click="fanhui()"
        :class="$style.nextWrap">
        <div :class="$style.next">返回</div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Answer',
    data() {
      return {
        num: 0,
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        axios.get('http://app.erji1pin.cn/index/index/cxsfzj/').then((response) => {
          if (response.data === '未中奖') {
            this.money();
          } else {
            window.alert('请明天再来哦！');
          }
        }).catch((response) => {
          window.alert('请明天再来哦！');
        });
      },
      money() {
        axios.get('http://app.erji1pin.cn/index/index/get_hbje').then((response) => {
          this.num = (response.data / 100);
          console.log(response.data);
        }).catch((response) => {
          window.alert('出错了！');
        });
      },
      fanhui() {
        this.$router.push({ name: 'Congratulations' });
      },
    },
  };
</script>
<style lang="less" module>
  .wrap{
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url('../assets/images/w_page04_bg.jpg');
    background-size:10%;
    .main{
      .header{
        width: 12rem;
        margin: 0.8rem auto 0;
        display: block;
      }
      .mainBox{
        width: 100%;
        margin: -0.8rem auto 0.7rem;
        display: block;
      }
      .info{
        top: 13rem;
        position: absolute;
        width: 100%;
        text-align: center;
        color: #ffef82;
        text-shadow:#666 0 0 2px;
      }
    }

    .nextWrap{
      cursor: pointer;
      border-radius: 0.8rem;
      border: 0.12rem solid #856c28;
      width: 5.5rem;
      min-height:2rem;
      left:50%;
      margin-left: -3rem;
      display: block;
      position: absolute;
      z-index: 10000;
      bottom: 1rem;
      background: rgba(250, 187, 34, 1);
      box-shadow: -0.23rem 0.2rem 0 rgba(255, 138, 3, 0.6);
      .next{
        text-shadow: 0px 0px 1px #ffffff;
        border-radius: 0.8rem;
        border: 0.12rem solid #856c28;
        text-align: center;
        width: 5.3rem;
        min-height: 1.8rem;
        line-height: 1.8rem;
        margin: -0.5rem auto;
        color: #ff7519;
        background: #ffe264;
        font-weight: bolder;
      }
    }
  }
</style>
