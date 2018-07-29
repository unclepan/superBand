<template>
  <div :class="$style.wrap">
    <transition name="bounce">
      <div :class="$style.tip" v-if="tip">请你选择一项</div>
    </transition>
    <div :class="$style.main">
      <div :class="$style.header">
        <img :class="$style.logo" src="../assets/images/01.png">
        <img :class="$style.mainLogo" src="../assets/images/03.png">
      </div>
      <transition name="fade">
        <div class="clearfix" :class="$style.problemCard" v-if="pageData">
          <p :class="$style.problem">{{pageData.q}}</p>
          <div :class="$style.option">
            <div
              :class="{[$style.c]: item.id === pageData.c, [$style.pic]: item.url}"
              v-for="(item, index) in pageData.o"
              :key="index"
              @click="changeOption(item.id)">
                <div v-if="item.url">
                  <img :class="$style.url" :src="item.url">
                </div>
                <span :class="$style.ico"></span>
                <span
                  v-if="item.t"
                  :class="$style.text">
                  {{item.t}}
                </span>
            </div>
          </div>
        </div>
      </transition>
      <div
        :class="$style.nextWrap"
        class="play"
        @click="play(data.length === Vkey)">
        <div :class="$style.next">{{data.length === Vkey ? '完成' : '下一题'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import data from '../mock/problem';

export default {
  name: 'Main',
  data() {
    return {
      tip: false,
      data,
      Vkey: 1,
      pageData: null,
    };
  },
  methods: {
    ...mapMutations({
      add: 'increment',
    }),
    play(v) {
      if (v) {
        this.end();
      } else {
        this.next();
      }
    },
    init() {
      this.pageData = null;
      setTimeout(() => {
        const data = this.data.find(item => {
          return item.key === this.Vkey;
        });
        this.pageData = data;
      }, 10);
    },
    changeOption(v) {
      const data = this.data.find(item => {
        return item.key === this.Vkey;
      });
      data.c = v;
    },
    next() {
      if (this.pageData.c === '') {
        this.tip = true;
        const t = setTimeout(() => {
          this.tip = false;
          clearTimeout(t);
        }, 1000);
      } else {
        this.Vkey += 1;
        this.init();
      }
    },
    end() {
      if (this.pageData.c === '') {
        this.tip = true;
        const t = setTimeout(() => {
          this.tip = false;
          clearTimeout(t);
        }, 1000);
      } else {
        const v = this.data.map(item => {
          return item.c;
        });
        this.add(v);
        this.$router.push({ name: 'End' });
      }
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    $router() {
      this.init();
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
  background-image: url('../assets/images/bg.jpg');
  background-repeat: no-repeat;
  background-size:116%;
  background-position: 0 bottom;
  animation-name: 'bounceInLeft';
  animation-duration: 8s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  .tip{
    position:absolute;
    border-radius: 3px;
    width: 120px;
    height: 30px;
    line-height: 30px;
    left: 50%;
    top: 10px;
    margin-left: -60px;
    text-align: center;
    background: rgba(12, 255, 240, 0.7);
    color: #ffffff;
    font-size: 1.3rem;
  }
  .main{
    padding: 10px;
    img{
      display: inline-block;
    }
    .logo{
      width: 7rem;
    }
    .mainLogo{
      width: 10rem;
      display: block;
      float: right;
    }
    .problemCard{
      border:3px solid rgba(255, 255, 255, 0.6);
      background: rgba(12, 255, 240, 0.6);
      border-radius: 10px;
      padding: 1rem;
      margin: 1rem;
      margin-top: 4rem;
      .problem{
        color: #ffffff;
        font-size: 2rem;
        padding: 1rem 0;
      }
      .option{
        div{
          line-height: 2rem;
          padding: 0.5rem 0;
          .ico{
            display: inline-block;
            width: 1.2rem;
            height: 1.2rem;
            border: 2px solid #333333;
            border-radius: 0.6rem;
            background: #ffffff;
          }
          .url{
            width: 100px;
            height: 100px;
            background: #ffffff;
            border-radius: 4px;
            overflow: hidden;
          }
          .text{
            color: #ffffff;
            font-size: 2rem;
            padding-left: 0.8rem;
          }
        }
        .pic{
          width: 50%;
          text-align: center;
          float: left;
        }
        .c{
          transform: scale(1.01);
          .ico{
            background: #ffd139;
            border: 3px solid #333333;
          }
          .text{
            color: #ffd139;
          }
        }
      }
    }
    .nextWrap{
      cursor: pointer;
      border-radius: 2rem;
      border: 4px solid #333333;
      width: 13rem;
      min-height:6rem;
      left:50%;
      margin-left: -6.5rem;
      display: block;
      position: absolute;
      z-index: 10000;
      bottom: 2rem;
      background: rgba(12, 255, 240, 1);
    }
    .next{
      text-shadow: 0px 0px 1px #ffffff;
      border-radius: 2rem;
      border: 4px solid #333333;
      text-align: center;
      line-height: 5rem;
      font-size: 2.6rem;
      color: #333333;
      width: 12rem;
      min-height:5rem;
      margin: -1rem auto 0;
      display: block;
      background: rgba(12, 255, 240, 1);
    }
  }

}
</style>
