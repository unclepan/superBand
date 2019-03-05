<template>
  <div :class="$style.wrap">
      <div :class="$style.mianban">
        <img :class="$style['shibai-01']" src="../assets/images/img-2019-2-22/shibai-01.png">
        <img v-if="num === 0" :class="$style['shibai-02']" src="../assets/images/img-2019-2-22/shibai-02.png">
        <img v-if="num === 1" :class="$style['shibai-02']" src="../assets/images/img-2019-2-22/shibai-04.png">
        <img @click="push()" class="pulse" :class="$style['shibai-03']" src="../assets/images/img-2019-2-22/shibai-03.png">
      </div>
      <img :class="$style['main-01']" src="../assets/images/img-2019-2-22/main-01.png">
      <img :class="$style['main-02']" src="../assets/images/img-2019-2-22/main-02.png">
  </div>
</template>

<script>

export default {
  data() {
    return {
      num: 0,
    };
  },
  components: {

  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      setInterval(() => {
        if (this.num < 1) {
          this.num = this.num + 1;
        } else {
          this.num = 0;
        }
      }, 150);
    },
    push() {
      this.$router.replace({ name: 'Page02' });
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
  background-image: url('../assets/images/img-2019-2-22/wrap-bg.jpg');
  background-size:12px;
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
  .mianban{
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    text-align: center;
    z-index: 1000;
    .shibai-01{
      margin: 0 auto;
      margin-top: 1.8rem;
      width:10rem;
      display: block;
    }
    .shibai-02{
      margin:0.8rem auto;
      width:8rem;
      display: block;
    }
    .shibai-03{
      margin: 0 auto;
      width:5rem;
      display: block;
    }
  }
}
</style>
