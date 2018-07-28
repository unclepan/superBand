<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="less">
  @media screen and (min-width:321px) and (max-width:375px){html{font-size:11px}}
  @media screen and (min-width:376px) and (max-width:414px){html{font-size:12px}}
  @media screen and (min-width:415px) and (max-width:639px){html{font-size:15px}}
  @media screen and (min-width:640px) and (max-width:719px){html{font-size:20px}}
  @media screen and (min-width:720px) and (max-width:749px){html{font-size:22.5px}}
  @media screen and (min-width:750px) and (max-width:799px){html{font-size:23.5px}}
  @media screen and (min-width:800px){html{font-size:25px}}
  @font-face {
    font-family: 'fzzjxss';
    src: url('../assets/fonts/FZZJ-XSS-1.eot');
    src:
        url('../assets/fonts/FZZJ-XSS-1.eot?#font-spider') format('embedded-opentype'),
        url('../assets/fonts/FZZJ-XSS-1.woff') format('woff'),
        url('../assets/fonts/FZZJ-XSS-1.ttf') format('truetype'),
        url('../assets/fonts/FZZJ-XSS-1.svg') format('svg');
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
    font-size:10px;
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
</style>
