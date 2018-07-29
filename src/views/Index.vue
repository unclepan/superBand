<template>
  <div :class="$style.wrap">
    <div :class="$style.main">
      <div :class="$style.header">
        <img :class="$style.logo" src="../assets/images/01.png">
      </div>
      <img class="deviation" :class="$style.mainLogo" src="../assets/images/03.png">
      <img :class="$style.mainPic" src="../assets/images/04.png">
      <div
        :class="$style.nextWrap"
        class="play"
        @click="play" >
        <div :class="$style.next">开始测试</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data() {
    return {
      msg: 'Index',
      m: false,
    };
  },
  methods: {
    play() {
      this.$router.push({ name: 'Main' });
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
  background-image: url('../assets/images/bg.jpg');
  background-repeat: no-repeat;
  background-size:116%;
  background-position: 0 bottom;
  animation-name: 'bounceInLeft';
  animation-duration: 8s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  .main{
    padding: 10px;
    img{
      display: inline-block;
    }
    .logo{
      width: 7rem;
    }
    .mic{
      width: 3rem;
      float: right;
    }
    .mainLogo{
      width: 15rem;
      display: block;
      margin:  2rem auto;

    }
    .mainPic{
      width: 28rem;
      display: block;
      margin:  0 auto;
      animation-name: 'jello';
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-delay: 1s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-play-state: running;
    }

    .nextWrap{
      cursor: pointer;
      border-radius: 2rem;
      border: 4px solid #333333;
      width: 13rem;
      min-height:6rem;
      left:50%;
      margin-left: -6.5rem;
      display: block;
      position: absolute;
      z-index: 10000;
      bottom: 2rem;
      background: rgba(12, 255, 240, 1);
    }
    .next{
      text-shadow: 0px 0px 1px #ffffff;
      border-radius: 2rem;
      border: 4px solid #333333;
      text-align: center;
      line-height: 5rem;
      font-size: 2.6rem;
      color: #333333;
      width: 12rem;
      min-height:5rem;
      margin: -1rem auto 0;
      display: block;
      background: rgba(12, 255, 240, 1);
    }
  }

}
</style>
