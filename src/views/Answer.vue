<template>
  <div :class="$style.wrap">
    <div :class="$style.main">
      <div :class="[$style.header, {fadeInLeft: noClick}]">{{currentData.title}}</div>
      <div :class="$style.problem" class="fadeOut">
        <p>{{currentData.q}}</p>
      </div>
      <div class="www" :class="[$style.answer, {flipInY: noClick}]">
        <img class="fadeOut" :class="$style.w_luobo" src="../assets/images/w_luobo.png">
        <img class="fadeOut" :class="$style.w_mogu" src="../assets/images/w_mogu.png">
          <div @click="next(item, index)" :class="$style.item" v-for="(item, index) in currentData.o" :key="index">
            <div :class="[$style.itemWrap, {[$style.zhengque]: showB&&item.b}]">
              <div :class="$style.itemInner">{{item.id.toUpperCase()}}: {{item.t}}</div>
              <transition name="fade">
                <div v-if="showB">
                  <img v-if="item.b&&itemIndex === index" :class="$style.panduan" src="../assets/images/w_dui.png">
                  <img v-if="!item.b&&itemIndex === index" :class="$style.panduan" src="../assets/images/w_cuo.png">
                </div>
              </transition>
            </div>
          </div>
      </div>
      <img :style="{ top: dingzhu}" v-if="item.b === 'b'" :class="$style.ren" src="../assets/images/w_ren01.png">
      <img :style="{ top: dingzhu}" v-else-if="item.b === true" :class="$style.ren" src="../assets/images/w_ren03.png">
      <img :style="{ top: dingzhu}" v-else :class="$style.ren" src="../assets/images/w_ren02.png">
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';
  import data from '../mock/wProblem';

  export default {
    name: 'Answer',
    data() {
      return {
        dingzhu: 'inherit',
        sty: 0,
        arrData: {},
        currentData: {},
        showB: false,
        itemIndex: -1,
        noClick: true,
        item: { b: 'b' },
      };
    },
    computed: {
      ...mapState(['choice']),
    },
    methods: {
      ...mapMutations({
        add: 'increment',
        reset: 'reset',
      }),
      init() {
        let tmRan = this.$route.query.ran || 1;
        tmRan = tmRan.toString();
        this.arrData = data.find(item => {
          return item.key === tmRan;
        });
      },
      vData() {
        this.currentData = this.arrData.tm[this.sty];
        this.$nextTick(() => {
          this.getHeight();
        });
      },
      next(item, index) {
        if (this.noClick) {
          this.item = item;
          this.itemIndex = index;
          this.showB = true;
          this.noClick = false;
          this.add(item);
          if (this.sty < this.arrData.tm.length - 1) {
            setTimeout(() => {
              this.item = { b: 'b' };
              this.noClick = true;
              this.sty += 1;
              this.itemIndex = -1;
              this.showB = false;
              this.vData();
            }, 1200);
          } else {
            setTimeout(() => {
              this.item = { b: 'b' };
              this.itemIndex = -1;
              this.showB = false;
              this.$router.replace({ name: 'Congratulations' });
            }, 1500);
          }
        }
      },
      getHeight() {
        const dom1 = document.querySelector(`.${this.$style.answer}`).offsetHeight;
        const dom2 = document.querySelector(`.${this.$style.answer}`).offsetTop;
        const bodyHeight = document.body.clientHeight;
        const gao = dom1 + dom2 + 156;
        if (gao > bodyHeight) {
          console.log('顶住了');
          this.dingzhu = `${dom1 + dom2}px`;
        } else {
          console.log('没顶住');
          this.dingzhu = 'inherit';
        }
      },
    },
    mounted() {
      this.reset();
      this.init();
      this.vData();
      this.$nextTick(() => {
        this.getHeight();
      });
    },
    watch: {
    },
  };
</script>
<style lang="less" module>
  .wrap{
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url('../assets/images/w_answerBg.jpg');
    background-repeat: no-repeat;
    background-size:100%;
    background-position: 0 bottom;
    .header{
      background-image: url('../assets/images/w_answerHeader.png');
      background-repeat: no-repeat;
      background-size:100%;
      width: 12rem;
      margin: 0.4rem auto 0.3rem;
      height: 2.5rem;
      font-size: 1rem;
      line-height: 3rem;
      text-align: center;
      color: #ffffff;
      text-shadow:#222 1px 0 1px,#222 0 1px 1px,#222 -1px 0 1px,#222 0 -1px 1px;
    }
    .problem{
      width: 14rem;
      margin: 0 auto;
      background: #ffe01b;
      border: 0.1rem solid #555555;
      border-radius: 2rem;
      padding: 0.3rem 1rem;
      font-size: 1rem;
      color: #eb4311;
      box-shadow: -0.3rem 0.2rem 0 rgba(255, 128, 4, 0.6);
    }
    .answer{
      background-color: #fff9e3;
      border: 0.1rem solid #7d6b35;
      width: 14rem;
      margin: 0.4rem auto;
      border-radius: 0.6rem;
      position: relative;
      padding: 0.3rem 0;
      .w_luobo{
        position: absolute;
        bottom: -0.4rem;
        right: -0.4rem;
        width: 2rem;
      }
      .w_mogu{
        position: absolute;
        top: 3rem;
        left: -0.8rem;
        width: 1.6rem;
      }
      .item{
        .itemWrap{
          width: 11rem;
          margin: 0.4rem auto;
          border-radius: 2rem;
          box-shadow: -0.23rem 0.2rem 0 rgba(255, 224, 27, 0.6);
          position: relative;
          .itemInner{
            background-image: url('../assets/images/w_itemBg.jpg');
            padding: 0.3rem 0.7rem;
            border-radius: 2rem;
            color: #5b5b5e;
            font-size: 0.7rem;
            border: 0.06rem solid #555555;
            box-shadow:0.1rem -0.1rem 0.1rem rgba(0, 0, 0, 0.4) inset;
          }
          .panduan{
            position: absolute;
            top: 0;
            right: -1rem;
            top: 50%;
            margin-top: -1rem;
            width: 2rem;
          }
        }
        .zhengque{
          box-shadow: -0.23rem 0.2rem 0 rgba(147, 205, 115, 0.8);
          .itemInner{
            color: #92cc71;
          }
        }
      }
    }
    .ren{
      width: 100px;
      position: absolute;
      bottom:0;
      right:2rem;
      display: block;
    }
  }
</style>
