<template>
  <div :class="$style.wrap">
    <div :class="$style.main">
      <img class="bounceIn" :class="$style.header" src="../assets/images/w_title01.png">
      <div :class="$style.mainBoxExample" class="zoomInDown">
        <img :class="$style.mainBox" src="../assets/images/w_page02.png">
        <h3 :class="$style.example" id="example">共答对{{choiceNum}}道题</h3>
      </div>
      <p :class="$style.text">这么厉害！你一定经常下厨吧！</p>
      <div class="flipInX" :class="$style.butWrapBox">
        <div :class="$style.butWrap">
          <div
            class="fadeOut"
            :class="[$style.nextWrap, $style.nextWrapO]"
            @click="luckDraw()">
            <div :class="$style.next">红包抽奖</div>
          </div>
          <div
            class="fadeOut"
            :class="[$style.nextWrap, $style.nextWrapO]"
            @click="turntable()">
            <div :class="$style.next">礼品抽奖</div>
          </div>
        </div>
        <div :class="$style.butWrap">
          <div
            class="fadeOut"
            :class="$style.nextWrap">
            <div :class="$style.next">长按分享</div>
          </div>
          <div
            class="fadeOut"
            :class="$style.nextWrap"
            @click="zailai()">
            <div :class="$style.next">再来一次</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapState } from 'vuex';
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
    computed: {
      ...mapState(['choice']),
      choiceNum() {
        if (this.choice.length === 0) {
          return 0;
        }
        const v = this.choice.filter(item => {
          return item.b;
        });
        return v.length;
      },
    },
    methods: {
      luckDraw() {
        axios.get('http://app.erji1pin.cn/index/index/cxsfzj/').then((response) => {
          if (response.data === '未中奖') {
            this.$router.push({ name: 'LuckDraw' });
          } else {
            window.alert('请明天再来领红包哦！');
          }
        }).catch((response) => {
          window.alert('请明天再来领红包哦！');
        });
      },
      turntable() {
        axios.get('http://app.erji1pin.cn/index/index/cxsfcj/').then((response) => {
          if (response.data === '未抽奖') {
            this.$router.push({ name: 'Turntable' });
          } else {
            window.alert('请明天再来抽奖哦！');
          }
        }).catch((response) => {
          window.alert('请明天再来抽奖哦！');
        });
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
  background-image: url('../assets/images/w_page03_bg.jpg');
  background-size:10%;
  .main{
    .header{
      width: 12rem;
      margin: 0.8rem auto 0.7rem;
      display: block;
    }
    .mainBoxExample{
        position: relative;
       .mainBox{
        width: 12rem;
        margin: 0.8rem auto 0.7rem;
        display: block;
      }
      .example{
        top: 0.4rem;
        position: absolute;
        width: 100%;
        text-align: center;
        color: #ff771d;
        font-size: 1.4rem;
        text-shadow:#fff 1px 0 1px,#fff 0 1px 1px,#fff -1px 0 1px,#fff 0 -1px 1px;
      }
    }

    .text{
      text-align: center;
      color: #fff7bd;
      text-shadow:#ff7519 1px 0 1px,#ff7519 0 1px 1px,#ff7519 -1px 0 1px,#ff7519 0 -1px 1px;
    }
  }

  .butWrapBox{
    position: absolute;
    z-index: 1000;
    left: 50%;
    margin-left: -6.5rem;
    bottom: 0;
    width: 13rem;
    // transform: scale(0.8,0.8);
    .butWrap{
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
  }
  .nextWrap{
    cursor: pointer;
    border-radius: 0.8rem;
    border: 0.12rem solid #856c28;
    width: 5.5rem;
    min-height:2rem;
    display: block;
    background: rgba(250, 187, 34, 1);
    box-shadow: -0.23rem 0.2rem 0 rgba(255, 138, 3, 0.6);
    .next{
      text-shadow: 0px 0px 1px #ffffff;
      border-radius: 0.8rem;
      border: 0.12rem solid #856c28;
      text-align: center;
      width: 5.3rem;
      min-height: 1.8rem;
      line-height: 1.8rem;
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
