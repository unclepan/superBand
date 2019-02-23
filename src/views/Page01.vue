<template>
  <div :class="$style.wrap">
    <div :class="$style['page-01']" @click="sui = !sui">
      <img :class="$style['loading-01']" src="/static/images/loading-01.png">
      <img :class="$style['quan-01']" src="../assets/images/img-2019-2-22/quan-01.png">

      <img v-if="!sui" :class="$style['po-01']" src="../assets/images/img-2019-2-22/po-01.png">
      <img v-if="sui" :class="$style['po-sui-01']" src="../assets/images/img-2019-2-22/po-sui-01.png">

      <img v-if="!sui" :class="$style['po-03']" src="../assets/images/img-2019-2-22/po-03.png">
      <img v-if="sui" :class="$style['po-sui-03']" src="../assets/images/img-2019-2-22/po-sui-03.png">

      <img v-if="!sui" :class="$style['po-04']" src="../assets/images/img-2019-2-22/po-04.png">
      <img v-if="sui" :class="$style['po-sui-04']" src="../assets/images/img-2019-2-22/po-sui-04.png">

      <img v-if="!sui" :class="$style['po-05']" src="../assets/images/img-2019-2-22/po-05.png">
      <img v-if="sui" :class="$style['po-sui-05']" src="../assets/images/img-2019-2-22/po-sui-05.png">

      <img v-if="!sui" :class="$style['po-06']" src="../assets/images/img-2019-2-22/po-06.png">
      <img v-if="sui" :class="$style['po-sui-06']" src="../assets/images/img-2019-2-22/po-sui-06.png">

      <img v-if="!sui" :class="$style['po-02']" src="../assets/images/img-2019-2-22/po-02.png">
      <img v-if="sui" :class="$style['po-sui-02']" src="../assets/images/img-2019-2-22/po-sui-02.png">

      <img :class="{[$style['shan-01']]:true, [$style['shan-sui-01']]: sui}" src="../assets/images/img-2019-2-22/shan-01.png">
      <img :class="{[$style['shan-02']]:true, [$style['shan-sui-02']]: sui}" src="../assets/images/img-2019-2-22/shan-02.png">
      <img :class="{[$style['shan-03']]:true, [$style['shan-sui-03']]: sui}" src="../assets/images/img-2019-2-22/shan-03.png">
      <img :class="{[$style['shan-04']]:true, [$style['shan-sui-04']]: sui}" src="../assets/images/img-2019-2-22/shan-04.png">
      <img :class="{[$style['shan-05']]:true, [$style['shan-sui-05']]: sui}" src="../assets/images/img-2019-2-22/shan-05.png">
    </div>
    <!-- <div :class="$style['page-02']">
      <img :class="$style.img01" src="../assets/images/img-2019-2-22/start-01.png">
      <img @click="next()" :class="$style.img02" src="../assets/images/img-2019-2-22/start-02.png">
      <img :class="$style.img03" src="../assets/images/img-2019-2-22/start-03.png">
    </div> -->
  </div>
</template>

<script>

  export default {
    data() {
      return {
        sui: false,
      };
    },
    mounted() {
    },
    methods: {
      next() {
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
      margin-left: -2.4rem;
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
    }
    .po-sui-03{
      width:13rem ;
      left: 3.8rem;
      top: 3.1rem;
    }
    .po-04{
      width:9rem ;
      left: 4.2rem;
      top: 9.6rem;
      z-index: 6;
    }
    .po-sui-04{
      width:9rem ;
      left: 3.8rem;
      top: 10.2rem;
      z-index: 6;
    }
    .po-05{
      width:8rem ;
      right: 5rem;
      top: 3rem;
      z-index: 6;
    }
    .po-sui-05{
      width:8rem ;
      right: 4.4rem;
      top: 2.6rem;
      z-index: 6;
    }
    .po-06{
      width:8rem ;
      right: 3.8rem;
      top: 6.4rem;
    }
    .po-sui-06{
      width:8rem ;
      right: 3.6rem;
      top: 6.3rem;
    }
    .po-02{
      width:12rem ;
      right: 4.4rem;
      top: 9.4rem;
    }
    .po-sui-02{
      width:12rem ;
      right: 4rem;
      top: 9.8rem;
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
// .wrap{
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   overflow: hidden;
//   background-image: url('../assets/images/w_page1_bg.jpg');
//   background-repeat: no-repeat;
//   background-size:100%;

//   .main{
//     margin: 0 auto;
//     position: relative;
//     width: 16rem;
//     // transform: scale(0.96,0.96);
//     .logo{
//       position:fixed;
//       left:0.6rem;
//       top:0.4rem;
//       width: 2.6rem;
//     }
//   }
//   .w_index_main{
//     width: 100%;
//     display: block;
//   }
//   .tiao1{
//     position: absolute;
//     top:9.54rem;
//     left: 3.48rem;
//     width: 2.3rem;
//     height: 7.6rem;
//     background: red;
//     overflow: hidden;
//     .tiaoInner{
//       width: 100%;
//       background-size: 100%;
//       height: 2800px;
//       background-image: url('../assets/images/w_index_tiao.jpg');
//       position: absolute;
//       animation-name: 'gundong1';
//       animation-duration: 2s;
//       animation-timing-function: linear;
//       animation-iteration-count: infinite;
//       animation-direction: normal;
//     }
//   }
//   .tiao2{
//     position: absolute;
//     top:9.54rem;
//     left: 6.76rem;
//     width: 2.3rem;
//     height: 7.6rem;
//     background: red;
//     overflow: hidden;
//     .tiaoInner{
//       width: 100%;
//       background-size: 100%;
//       height: 2800px;
//       background-image: url('../assets/images/w_index_tiao.jpg');
//       position: absolute;
//       animation-name: 'gundong2';
//       animation-duration: 2s;
//       animation-timing-function: linear;
//       animation-iteration-count: infinite;
//       animation-direction: normal;
//     }
//   }
//   .tiao3{
//     position: absolute;
//     top:9.54rem;
//     left: 10rem;
//     width: 2.3rem;
//     height: 7.6rem;
//     background: red;
//     overflow: hidden;
//     .tiaoInner{
//       width: 100%;
//       background-size: 100%;
//       height: 2800px;
//       background-image: url('../assets/images/w_index_tiao.jpg');
//       position: absolute;
//       animation-name: 'gundong1';
//       animation-duration: 2s;
//       animation-timing-function: linear;
//       animation-iteration-count: infinite;
//       animation-direction: normal;
//     }
//   }
//   .dianzong{
//     position: absolute;
//     top: 8rem;
//     left: 1.8rem;
//     width: 12.2rem;
//     height: 11rem;
//     .dian{
//       width: 0.4rem;
//       height: 0.4rem;
//       border-radius: 0.2rem;
//       border: 0.1rem solid #876d28;
//       position: absolute;
//       background: #f57021;
//     }
//     .dian1{
//       top: 0.24rem;
//       left: 1.6rem;
//     }
//     .dian2{
//       top: 0.24rem;
//       left: 3rem;
//     }
//     .dian3{
//       top: 0.24rem;
//       left: 4.5rem;
//     }
//     .dian4{
//       top: 0.24rem;
//       left: 6rem;
//     }
//     .dian5{
//       top: 0.24rem;
//       left: 7.5rem;
//     }
//     .dian6{
//       top: 0.24rem;
//       left: 9rem;
//     }
//     .dian7{
//       top: 0.24rem;
//       left: 10.4rem;
//     }


//     .dian8{
//       top: 1.1rem;
//       right: 0.24rem;
//     }
//     .dian9{
//       top: 2.6rem;
//       right: 0.24rem;
//     }
//     .dian10{
//       top: 4rem;
//       right: 0.24rem;
//     }
//     .dian11{
//       top: 5.6rem;
//       right: 0.24rem;
//     }
//     .dian12{
//       top: 7rem;
//       right: 0.24rem;
//     }
//     .dian13{
//       top: 8.6rem;
//       right: 0.24rem;
//     }


//     .dian14{
//       top: 10.18rem;
//       left: 10.4rem;
//     }
//     .dian15{
//       top: 10.18rem;
//       left: 9rem;
//     }
//     .dian16{
//       top: 10.18rem;
//       left: 7.5rem;
//     }
//     .dian17{
//       top: 10.18rem;
//       left: 6rem;
//     }
//     .dian18{
//       top: 10.18rem;
//       left: 4.5rem;
//     }
//     .dian19{
//       top: 10.18rem;
//       left: 3rem;
//     }
//     .dian20{
//       top: 10.18rem;
//       left: 1.6rem;
//     }

//     .dian21{
//       top: 8.6rem;
//       left: 0.24rem;
//     }
//     .dian22{
//       top: 7rem;
//       left: 0.24rem;
//     }
//     .dian23{
//       top: 5.6rem;
//       left: 0.24rem;
//     }
//     .dian24{
//       top: 4rem;
//       left: 0.24rem;
//     }
//     .dian25{
//       top: 2.6rem;
//       left: 0.24rem;
//     }
//     .dian26{
//       top: 1.1rem;
//       left: 0.24rem;
//     }

//     .active{
//       background: none;
//     }
//   }
//   .play{
//     width: 100%;
//     height: 2.2rem;
//     position: absolute;
//     top: 19.6rem;
//     .inner{
//         margin: 0 auto;
//         width: 6rem;
//         height: 2.2rem;
//         cursor: pointer;
//         opacity: 0;
//         background: red;
//     }
//   }
// }
</style>
