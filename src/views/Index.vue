<template>
  <div :class="$style.wrap">
    <div :class="$style.main">
      <img :class="$style.logo" src="../assets/images/wanjiale.png">
      <img :class="$style.w_index_main" src="../assets/images/w_index_main.png">

      <div :class="$style.tiao1">
        <div :class="$style.tiaoInner"></div>
      </div>

      <div :class="$style.tiao2">
        <div :class="$style.tiaoInner"></div>
      </div>

      <div :class="$style.tiao3">
        <div :class="$style.tiaoInner"></div>
      </div>

      <div :class="$style.dianzong">
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="[$style[`dian${item}`], $style.dian, { [$style.active]: active === item }]">
        </div>
      </div>
      <div :class="$style.play">
        <div :class="$style.inner" @click="play()">开始</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Index',
    data() {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
        active: 1,
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        setInterval(() => {
          if (this.active === 26) {
            this.active = 1;
          } else {
            this.active = this.active + 1;
          }
        }, 100);
      },
      randomNumBoth(Min, Max) {
        const Range = Max - Min;
        const Rand = Math.random();
        const num = Min + Math.round(Rand * Range); // 四舍五入
        return num;
      },
      play() {
        this.mic();
        const ran = this.randomNumBoth(1, 5);
        this.$router.replace({ name: 'Answer', query: { ran } });
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
  background-image: url('../assets/images/w_page1_bg.jpg');
  background-repeat: no-repeat;
  background-size:100%;

  .main{
    margin: 0 auto;
    position: relative;
    width: 16rem;
    // transform: scale(0.96,0.96);
    .logo{
      position:fixed;
      left:0.6rem;
      top:0.4rem;
      width: 3.6rem;
    }
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
    .tiaoInner{
      width: 100%;
      background-size: 100%;
      height: 2800px;
      background-image: url('../assets/images/w_index_tiao.jpg');
      position: absolute;
      animation-name: 'gundong1';
      animation-duration: 2s;
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
    .tiaoInner{
      width: 100%;
      background-size: 100%;
      height: 2800px;
      background-image: url('../assets/images/w_index_tiao.jpg');
      position: absolute;
      animation-name: 'gundong2';
      animation-duration: 2s;
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
    .tiaoInner{
      width: 100%;
      background-size: 100%;
      height: 2800px;
      background-image: url('../assets/images/w_index_tiao.jpg');
      position: absolute;
      animation-name: 'gundong1';
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: normal;
    }
  }
  .dianzong{
    position: absolute;
    top: 8rem;
    left: 1.8rem;
    width: 12.2rem;
    height: 11rem;
    .dian{
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      border: 0.1rem solid #876d28;
      position: absolute;
      background: #f57021;
    }
    .dian1{
      top: 0.24rem;
      left: 1.6rem;
    }
    .dian2{
      top: 0.24rem;
      left: 3rem;
    }
    .dian3{
      top: 0.24rem;
      left: 4.5rem;
    }
    .dian4{
      top: 0.24rem;
      left: 6rem;
    }
    .dian5{
      top: 0.24rem;
      left: 7.5rem;
    }
    .dian6{
      top: 0.24rem;
      left: 9rem;
    }
    .dian7{
      top: 0.24rem;
      left: 10.4rem;
    }


    .dian8{
      top: 1.1rem;
      right: 0.24rem;
    }
    .dian9{
      top: 2.6rem;
      right: 0.24rem;
    }
    .dian10{
      top: 4rem;
      right: 0.24rem;
    }
    .dian11{
      top: 5.6rem;
      right: 0.24rem;
    }
    .dian12{
      top: 7rem;
      right: 0.24rem;
    }
    .dian13{
      top: 8.6rem;
      right: 0.24rem;
    }


    .dian14{
      top: 10.18rem;
      left: 10.4rem;
    }
    .dian15{
      top: 10.18rem;
      left: 9rem;
    }
    .dian16{
      top: 10.18rem;
      left: 7.5rem;
    }
    .dian17{
      top: 10.18rem;
      left: 6rem;
    }
    .dian18{
      top: 10.18rem;
      left: 4.5rem;
    }
    .dian19{
      top: 10.18rem;
      left: 3rem;
    }
    .dian20{
      top: 10.18rem;
      left: 1.6rem;
    }

    .dian21{
      top: 8.6rem;
      left: 0.24rem;
    }
    .dian22{
      top: 7rem;
      left: 0.24rem;
    }
    .dian23{
      top: 5.6rem;
      left: 0.24rem;
    }
    .dian24{
      top: 4rem;
      left: 0.24rem;
    }
    .dian25{
      top: 2.6rem;
      left: 0.24rem;
    }
    .dian26{
      top: 1.1rem;
      left: 0.24rem;
    }

    .active{
      background: none;
    }
  }
  .play{
    width: 100%;
    height: 2.2rem;
    position: absolute;
    top: 19.6rem;
    .inner{
        margin: 0 auto;
        width: 6rem;
        height: 2.2rem;
        cursor: pointer;
        opacity: 0;
        background: red;
    }
  }
}
</style>
