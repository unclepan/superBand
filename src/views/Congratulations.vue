<template>
  <div :class="$style.wrap">
    <h3 :class="$style.example" id="example">共答对10道题</h3>
    <div  :class="$style.butWrapBox">
      <div :class="$style.butWrap">
        <div
          :class="[$style.nextWrap, $style.nextWrapO]"
          @click="luckDraw()">
          <div :class="$style.next">红包抽奖</div>
        </div>
        <div
          :class="[$style.nextWrap, $style.nextWrapO]"
          @click="turntable()">
          <div :class="$style.next">礼品抽奖</div>
        </div>
      </div>
      <div :class="$style.butWrap">
        <div
          :class="$style.nextWrap">
          <div :class="$style.next">长按分享</div>
        </div>
        <div
          :class="$style.nextWrap"
          @click="zailai()">
          <div :class="$style.next">再来一次</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import '../assets/javascript/jquery.arctext';

  export default {
    data() {
      return {
      };
    },
    mounted() {
      const $example = $('#example').hide();
      $example.show().arctext({ radius: 116 });
    },
    methods: {
      luckDraw() {
        this.$router.push({ name: 'LuckDraw' });
      },
      turntable() {
        this.$router.push({ name: 'Turntable' });
      },
      zailai() {
        this.$router.push({ name: 'Answer' });
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
  background-image: url('../assets/images/w_congratulationsBg.jpg');
  background-repeat: no-repeat;
  background-size:100%;
  .example{
    text-align: center;
    margin-top: 5.4rem;
    color: #ff771d;
    font-size: 1.4rem;
    text-shadow:#fff 2px 0 0,#fff 0 2px 0,#fff -2px 0 0,#fff 0 -1px 0;
  }
  .butWrapBox{
    position: absolute;
    z-index: 1000;
    bottom: 0;
    width: 100%;
    transform: scale(0.8,0.8);
    .butWrap{
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.2rem;
    }
  }
  .nextWrap{
    cursor: pointer;
    border-radius: 0.8rem;
    border: 0.12rem solid #856c28;
    width: 6.5rem;
    min-height:2.3rem;
    display: block;
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
  .nextWrapO{
    background: rgba(255, 138, 60, 1);
    .next{
      color: #fff6b6;
      background: #ff8a3c;
    }
  }
}
</style>
