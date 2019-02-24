<template>
  <div id="wrapper">
    <router-view/>
    <!-- <img v-if="showMic" @click="mic" :class="$style.mic" src="../assets/images/02.png"> -->
    <!-- <audio autoplay="autoplay" loop="loop" id="audios">
      <source src="../assets/music/aaaaaaaaa.ogg" type="audio/ogg" />
      <source src="../assets/music/aaaaaaaaa.mp3" type="audio/mpeg" />
    </audio> -->
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
    };
  },
  mounted() {
    this.init();
    // axios.get('http://3600413e.ngrok.io/').then((response) => {
    //   console.log(response);
    // }).catch((response) => {
    //   console.log(response);
    // });
  },
  computed: {
    // showMic() {
    //   if (this.$route.name === 'Index') {
    //     return true;
    //   }
    //   return false;
    // },
  },
  methods: {
    init() {
      // 利用 CSS3 旋转 对根容器逆时针旋转 90 度
      const detectOrient = function () {
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        const $wrapper = document.getElementById('wrapper');
        let style = '';

        if (width >= height) { // 横屏
          style += `width:${width}px;`; // 注意旋转后的宽高切换
          style += `height:${height}px;`;
          style += '-webkit-transform: rotate(0); transform: rotate(0);';
          style += '-webkit-transform-origin: 0 0;';
          style += 'transform-origin: 0 0;';
        } else { // 竖屏
          style += `width:${height}px;`;
          style += `height:${width}px;`;
          style += '-webkit-transform: rotate(90deg); transform: rotate(90deg);';
          // 注意旋转中点的处理
          style += `-webkit-transform-origin: ${width / 2}px ${width / 2}px;`;
          style += `transform-origin: ${width / 2}px ${width / 2}px;`;
        }
        $wrapper.style.cssText = style;
      };
      window.onresize = detectOrient;
      detectOrient();
    },
    mic() {
      // const myVideo = document.getElementById('audios');
      // if (this.m) {
      //   myVideo.play();
      // } else {
      //   myVideo.pause();
      // }
      // this.m = !this.m;
    },
  },
};
</script>

<style lang="less">
  // @media screen and (min-width:321px) and (max-width:375px){html{font-size:11px}}
  // @media screen and (min-width:376px) and (max-width:414px){html{font-size:12px}}
  // @media screen and (min-width:415px) and (max-width:639px){html{font-size:15px}}
  // @media screen and (min-width:640px) and (max-width:719px){html{font-size:20px}}
  // @media screen and (min-width:720px) and (max-width:749px){html{font-size:22.5px}}
  // @media screen and (min-width:750px) and (max-width:799px){html{font-size:23.5px}}
  // @media screen and (min-width:800px){html{font-size:25px}}
  @font-face {
    font-family: 'fzzjxss';
    src: url('../assets/fonts/sfont.eot');
    src:
        url('../assets/fonts/sfont.eot?#font-spider') format('embedded-opentype'),
        url('../assets/fonts/sfont.woff') format('woff'),
        url('../assets/fonts/sfont.ttf') format('truetype'),
        url('../assets/fonts/sfont.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'happyzcool';
    src: url('../assets/fonts/happyzcool.eot');
    src:
        url('../assets/fonts/happyzcool.eot?#font-spider') format('embedded-opentype'),
        url('../assets/fonts/happyzcool.woff') format('woff'),
        url('../assets/fonts/happyzcool.ttf') format('truetype'),
        url('../assets/fonts/happyzcool.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
    font-family: 'fzzjxss';
    margin: 0;
    padding: 0;
  }
  html,body {
    width: 100%;
    height: 100%;
    background: #FBFBFB;
    overflow: hidden;
    position: relative;
    font-family: 'fzzjxss';
  }
  html{
    font-size:19px;
  }
  li{
    list-style: none;
  }
  .clearfix {
    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
<style lang="less" module>
  .mic{
    width: 3rem;
    position: absolute;
    z-index: 1000;
    top:10px;
    right: 10px;
    animation-name: 'rotateIn';
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }
</style>
