<template>
  <div :class="$style.wrap">
    <div :class="$style.main">
      <div :class="$style.header">
        <img :class="$style.logo" src="../assets/images/01.png">
        <img :class="$style.mic" src="../assets/images/02.png">
      </div>
      <img :class="$style.mainLogo" src="../assets/images/03.png">
      <img :class="$style.mainPic" src="../assets/images/04.png">
      <img @click="play" :class="$style.play" src="../assets/images/play.png" >
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data() {
    return {
      msg: 'Index',
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
    }
    .play{
      cursor: pointer;
      width: 13rem;
      left:50%;
      margin-left: -6.5rem;
      display: block;
      position: absolute;
      bottom: 2rem;
    }
  }

}
</style>
