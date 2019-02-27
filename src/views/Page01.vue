<template>
  <div :class="$style.wrap">
    <div :class="$style['page-01']" v-show="show">
      <img class="pulse" :class="$style['loading-01']" src="/static/images/loading-01.png">
      <img class="quantou" :class="$style['quan-01']" src="../assets/images/img-2019-2-22/quan-01.png">

      <img v-show="!sui" class="bounceIn1" :class="$style['po-01']" src="../assets/images/img-2019-2-22/po-01.png">
      <img v-show="sui" class="rotateOutDownLeft1" :class="$style['po-sui-01']" src="../assets/images/img-2019-2-22/po-sui-01.png">

      <img v-show="!sui" class="bounceIn2" :class="$style['po-03']" src="../assets/images/img-2019-2-22/po-03.png">
      <img v-show="sui" class="rotateOutDownLeft2" :class="$style['po-sui-03']" src="../assets/images/img-2019-2-22/po-sui-03.png">

      <img v-show="!sui" class="bounceIn3" :class="$style['po-04']" src="../assets/images/img-2019-2-22/po-04.png">
      <img v-show="sui" class="rotateOutDownLeft3" :class="$style['po-sui-04']" src="../assets/images/img-2019-2-22/po-sui-04.png">

      <img v-show="!sui" class="bounceIn4" :class="$style['po-05']" src="../assets/images/img-2019-2-22/po-05.png">
      <img v-show="sui" class="rotateOutDownLeft4" :class="$style['po-sui-05']" src="../assets/images/img-2019-2-22/po-sui-05.png">

      <img v-show="!sui" class="bounceIn5" :class="$style['po-06']" src="../assets/images/img-2019-2-22/po-06.png">
      <img v-show="sui" class="rotateOutDownLeft5" :class="$style['po-sui-06']" src="../assets/images/img-2019-2-22/po-sui-06.png">

      <img v-show="!sui" class="bounceIn6" :class="$style['po-02']" src="../assets/images/img-2019-2-22/po-02.png">
      <img v-show="sui" class="rotateOutDownLeft6" :class="$style['po-sui-02']" src="../assets/images/img-2019-2-22/po-sui-02.png">

      <img :class="{[$style['shan-01']]:true, [$style['shan-sui-01']]: sui}" src="../assets/images/img-2019-2-22/shan-01.png">
      <img :class="{[$style['shan-02']]:true, [$style['shan-sui-02']]: sui}" src="../assets/images/img-2019-2-22/shan-02.png">
      <img :class="{[$style['shan-03']]:true, [$style['shan-sui-03']]: sui}" src="../assets/images/img-2019-2-22/shan-03.png">
      <img :class="{[$style['shan-04']]:true, [$style['shan-sui-04']]: sui}" src="../assets/images/img-2019-2-22/shan-04.png">
      <img :class="{[$style['shan-05']]:true, [$style['shan-sui-05']]: sui}" src="../assets/images/img-2019-2-22/shan-05.png">
    </div>

    <div class="bounceInJinru" :class="$style['page-02']" v-show="!show">
      <img class="bounceInDown" :class="$style.img01" src="../assets/images/img-2019-2-22/start-01.png">
      <img class="pulse" @click="next()" :class="$style.img02" src="../assets/images/img-2019-2-22/start-02.png">
      <img class="flipInX" :class="$style.img03" src="../assets/images/img-2019-2-22/start-03.png">
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        sui: false,
        show: false,
      };
    },
    mounted() {
    },
    methods: {
      next() {
        this.playMic();
        this.show = true;
        setTimeout(() => {
          this.sui = true;
          setTimeout(() => {
            this.$router.replace({ name: 'Page02' });
          }, 3300);
        }, 7300);
      },
      playMic() {
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
  background-image: url('../assets/images/img-2019-2-22/wrap-bg.jpg');
  background-size:12px;
  .page-01{
    img{
      position: absolute;
    }
    .loading-01{
      width:8rem ;
      left: 50%;
      top: 4rem;
      margin-left: -4rem;
    }
    .quan-01{
      width:6rem ;
      left: 50%;
      top: 5rem;
      margin-left: -1.73rem;
    }
    .po-01{
      width:8rem ;
      left: 5.4rem;
      top: 1.6rem;
      z-index: 6;
    }
    .po-sui-01{
      width:8rem ;
      left: 4rem;
      top: 0.8rem;
      z-index: 6;
    }
    .po-03{
      width:13rem ;
      left: 4.2rem;
      top: 3.4rem;
      z-index: 7;
    }
    .po-sui-03{
      width:13rem ;
      left: 3.8rem;
      top: 3.1rem;
      z-index: 7;
    }
    .po-04{
      width:9rem ;
      left: 4.2rem;
      top: 9.6rem;
      z-index: 8;
    }
    .po-sui-04{
      width:9rem ;
      left: 3.8rem;
      top: 10.2rem;
      z-index: 8;
    }
    .po-05{
      width:8rem ;
      right: 5rem;
      top: 3rem;
      z-index: 9;
    }
    .po-sui-05{
      width:8rem ;
      right: 4.4rem;
      top: 2.6rem;
      z-index: 9;
    }
    .po-06{
      width:8rem ;
      right: 3.8rem;
      top: 6.4rem;
      z-index: 10;
    }
    .po-sui-06{
      width:8rem ;
      right: 3.6rem;
      top: 6.3rem;
      z-index: 10;
    }
    .po-02{
      width:12rem ;
      right: 4.4rem;
      top: 9.4rem;
      z-index: 11;
    }
    .po-sui-02{
      width:12rem ;
      right: 4rem;
      top: 9.8rem;
      z-index: 11;
    }
    .shan-01{
      width:3rem;
      left: 1.3rem;
      top: 2.3rem;
    }
    .shan-sui-01{
      width:3rem;
      left: 1rem;
      top: 2rem;
    }
    .shan-02{
      width:1.6rem;
      right: 1.3rem;
      top: 6.2rem;
    }
    .shan-sui-02{
      width:1.6rem;
      right: 1rem;
      top: 6rem;
    }
    .shan-03{
      width:1.6rem;
      left: 1.3rem;
      top: 11.7rem;
    }
    .shan-sui-03{
      width:1.6rem;
      left: 1.3rem;
      top: 12rem;
    }
    .shan-04{
      width:1.5rem;
      right: 2.3rem;
      top: 2.3rem;
    }
    .shan-sui-04{
      width:1.5rem;
      right: 2rem;
      top: 2rem;
    }
    .shan-05{
      width:1rem;
      right: 2.4rem;
      top: 11.7rem;
    }
    .shan-sui-05{
      width:1rem;
      right: 2rem;
      top: 12rem;
    }
  }
  .page-02{
    img{
      display: block;
      margin: 0 auto;
    }
    .img01{
      margin-top: 3rem;
      width: 20rem;
    }
    .img02{
      width: 4rem;
      margin-top: 1.8rem;
    }
    .img03{
      margin-top: 1.8rem;
      width: 4rem;
    }
  }
}
</style>
