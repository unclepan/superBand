<template>
  <div :class="$style.wrap">
    <div :class="$style.main">
      <img :class="$style.w_index_main" src="../assets/images/w_index_main.png">
      <div :class="$style.tiao1">
        <img :class="$style.w_index_main" src="../assets/images/w_index_tiao.jpg">
      </div>
      <div :class="$style.tiao2">
        <img :class="$style.w_index_main" src="../assets/images/w_index_tiao.jpg">
      </div>
      <div :class="$style.tiao3">
        <img :class="$style.w_index_main" src="../assets/images/w_index_tiao.jpg">
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
      this.mic();
      this.$router.push({ name: 'Main' });
    },
    mic() {
      const myVideo = document.getElementById('audios');
      myVideo.play();
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
  background-image: url('../assets/images/w_indexBg.jpg');
  background-repeat: no-repeat;
  background-size:116%;
  background-position: 0 bottom;
  animation-name: 'bounceInLeft';
  animation-duration: 8s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  .main{
    margin: 0 auto;
    position: relative;
    width: 16rem;
  }
  .w_index_main{
    width: 100%;
    display: block;
  }
  .tiao1{
    position: absolute;
    top:9.54rem;
    left: 3.48rem;
    width: 2.3rem;
    height: 7.6rem;
    background: red;
    overflow: hidden;
    img{
      position: absolute;
      animation-name: 'gundong1';
      animation-duration: 0.8s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: normal;
    }
  }
  .tiao2{
    position: absolute;
    top:9.54rem;
    left: 6.76rem;
    width: 2.3rem;
    height: 7.6rem;
    background: red;
    overflow: hidden;
    img{
      position: absolute;
      animation-name: 'gundong2';
      animation-duration: 0.8s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: normal;
    }
  }
  .tiao3{
    position: absolute;
    top:9.54rem;
    left: 10rem;
    width: 2.3rem;
    height: 7.6rem;
    background: red;
    overflow: hidden;
    img{
      position: absolute;
      animation-name: 'gundong1';
      animation-duration: 0.8s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: normal;
    }
  }
}
</style>
