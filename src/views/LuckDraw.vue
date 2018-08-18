<template>
  <div :class="$style.wrap">
    <p :class="$style.info">获得1.16元现金好礼</p>
    <div
      :class="$style.nextWrap">
      <div :class="$style.next">返回</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Answer',
    data() {
      return {
      };
    },
  };
</script>
<style lang="less" module>
  .wrap{
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url('../assets/images/w_luckBg.jpg');
    background-repeat: no-repeat;
    background-size:100%;
    .info{
      width: 10rem;
      text-align: center;
      margin: 13.8rem auto 0;
      color: #ffef82;
    }
    .nextWrap{
      cursor: pointer;
      border-radius: 0.8rem;
      border: 0.12rem solid #856c28;
      width: 6.5rem;
      min-height:2.3rem;
      left:50%;
      margin-left: -3rem;
      display: block;
      position: absolute;
      z-index: 10000;
      bottom: 2rem;
      background: rgba(250, 187, 34, 1);
      box-shadow: -0.23rem 0.2rem 0 rgba(255, 138, 3, 0.6);
      .next{
        text-shadow: 0px 0px 1px #ffffff;
        border-radius: 0.8rem;
        border: 0.12rem solid #856c28;
        text-align: center;
        width: 6.3rem;
        min-height: 2.1rem;
        line-height: 2.1rem;
        margin: -0.5rem auto;
        color: #ff7519;
        background: #ffe264;
        font-weight: bolder;
      }
    }
  }
</style>
