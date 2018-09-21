<template>
  <div :class="$style.wrap">
    <div class="zoomInDown" :class="$style.toast" v-if="showToast">
      <div>
        <img :class="$style.wGxTitle" src="../assets/images/w_yhTitle_h.png">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您未能赢得抽取红包的机会，请再试一次！<span>答对五道题，</span>就可以抽取<span style="font-size: 1.3rem;">红包！</span></p>
      </div>
      <div :class="$style.toastButWrap">
        <div
          class="fadeOut"
          :class="$style.nextWrap"
          @click="guanbiToast()">
          <div :class="$style.next">返回</div>
        </div>
        <div
          class="fadeOut"
          :class="$style.nextWrap"
          @click="zailai()">
          <div :class="$style.next">再来一次</div>
        </div>
      </div>
    </div>

    <div class="zoomInDown" :class="[$style.toast, $style.showToastTishiBox]" v-else-if="showToastTishi">
      <div>
        <img :class="$style.wGxTitle" src="../assets/images/w_gengduo_title.png">
        <p :class="$style.textP">
          <span :class="$style.wangjiale">万家乐</span>
          <span>首席产品体验官李好</span>
          邀您到线下终端门店参加“焕新乐万家，一站购到底”活动可获更多优惠，及分享100万装修基金
        </p>
      </div>
      <div :class="[$style.toastButWrap, $style.toastButWrapTishi]">
        <div
          class="fadeOut"
          :class="$style.nextWrap"
          @click="showToastTishi = false">
          <div :class="$style.next">返回</div>
        </div>
      </div>
      <img :class="$style.lihaoImg" src="../assets/images/lihao.png">
    </div>

    <div :class="$style.main" v-else>
      <img class="bounceIn" :class="$style.header" src="../assets/images/w_title01.png">
      <div :class="$style.mainBoxExample" class="zoomInDown">
        <img :class="$style.mainBox" src="../assets/images/w_page02.png">
        <h3 :class="$style.example" id="example">共答对{{choiceNum}}道题</h3>
      </div>
      <p :class="$style.text">{{fenxian}}</p>
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
            @click="showToastTishi = true"
            :class="$style.nextWrap">
            <div :class="$style.next">更多惊喜</div>
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
        fenxian: '',
        showToast: false,
        showToastTishi: false,
      };
    },
    mounted() {
      const $example = $('#example').hide();
      $example.show().arctext({ radius: 116 });
      this.init();
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
      init() {
        const v = this.choice.filter(item => {
          return item.b;
        });
        if (v.length > 1 && v.length <= 4) {
          this.fenxian = '吃货属性暴露！光吃光吃光吃（看成“吃光”的你已经没救了！）';
        } else if (v.length > 5 && v.length <= 7) {
          this.fenxian = '隐形下厨人口！常年存在于朋友圈，厨房里...人呢？！';
        } else if (v.length > 8 && v.length <= 10) {
          this.fenxian = '完美厨神一枚！拥有你等于拥有全世界...的美食~';
        } else {
          this.fenxian = '吃货属性暴露！光吃光吃光吃（看成“吃光”的你已经没救了！）';
        }
        window.wwxx(this.fenxian);
      },
      guanbiToast() {
        this.showToast = false;
      },
      luckDraw() {
        const v = this.choice.filter(item => {
          return item.b;
        });
        if (v.length >= 5) {
          axios.get('http://app.erji1pin.cn/index/index/cxsfzj/').then((response) => {
            if (response.data === '未中奖') {
              this.$router.replace({ name: 'LuckDraw' });
            } else {
              window.alert('请明天再来领红包哦！');
            }
          }).catch((response) => {
            window.alert('请明天再来领红包哦！');
          });
        } else {
          this.showToast = true;
        }
      },
      turntable() {
        axios.get('http://app.erji1pin.cn/index/index/cxsfcj/').then((response) => {
          if (response.data === '未抽奖') {
            this.$router.replace({ name: 'Turntable' });
          } else {
            window.alert('请明天再来抽奖哦！');
          }
        }).catch((response) => {
          window.alert('请明天再来抽奖哦！');
        });
      },
      zailai() {
        this.$router.replace({ name: 'Answer' });
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
      margin: 0.8rem auto 0.6rem;
      display: block;
    }
    .mainBoxExample{
        position: relative;
       .mainBox{
        width: 12rem;
        margin: 0.6rem auto 0.6rem;
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
      padding: 0 1rem;
      font-size: 0.9rem;
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
      margin-bottom: 0.9rem;
    }
  }
  .nextWrap{
    cursor: pointer;
    border-radius: 0.8rem;
    border: 0.12rem solid #856c28;
    width: 5.3rem;
    min-height:2rem;
    display: block;
    background: rgba(250, 187, 34, 1);
    box-shadow: -0.23rem 0.2rem 0 rgba(255, 138, 3, 0.6);
    .next{
      text-shadow: 0px 0px 1px #ffffff;
      border-radius: 0.8rem;
      border: 0.12rem solid #856c28;
      text-align: center;
      width: 5.1rem;
      min-height: 1.8rem;
      line-height: 1.8rem;
      margin: -0.4rem auto;
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

  .toast{
    position: absolute;
    left:50%;
    top:2rem;
    z-index: 1000;
    background-color: #ffeea7;
    border: 0.1rem solid #7d6b35;
    width: 14rem;
    margin-left: -7rem;
    padding: 1rem;
    border-radius: 1.6rem;
    text-align: center;
    box-shadow: -0.23rem 0.2rem 0 rgba(255, 138, 3, 0.6);
    .wGxTitle{
      width: 6rem;
    }
    p{
      text-align: left;
      padding: 1rem 0;
      color: #ffeea7;
      font-size: 1.2rem;
      text-shadow:#856c28 1px 0 1px,#856c28 0 1px 1px,#856c28 -1px 0 1px,#856c28 0 -1px 1px;
      span{
        color: #ff7519;
        text-shadow:#ffffff 1px 0 1px,#ffffff 0 1px 1px,#ffffff -1px 0 1px,#ffffff 0 -1px 1px;
      }
    }
    .toastButWrap{
      display: flex;
      justify-content: space-between;
      margin: 0.6rem 0;
      .nextWrap{
        cursor: pointer;
        width: 5rem;
        min-height: 2rem;
        .next{
          width: 4.8rem;
          min-height: 1.8rem;
          line-height: 1.8rem;
        }
      }
    }
    .toastButWrapTishi{
      justify-content: center;
    }
  }

  .showToastTishiBox{
    position: relative;
    .textP{
      font-size: 0.9rem;
      line-height: 1.3rem;
      .wangjiale{
        color: #ff7519;
        text-shadow:#856c28 1px 0 1px,#856c28 0 1px 1px,#856c28 -1px 0 1px,#856c28 0 -1px 1px;
      }
    }
    .lihaoImg{
      position: absolute;
      width: 100%;
      left: 0;
      margin-top: -0.5rem;
    }
  }
}
</style>
