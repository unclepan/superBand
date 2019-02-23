<template>
  <div :class="$style.wrap">

    <div :class="$style['page-01']" v-show="page==='page1'">
      <img :class="$style.img01" src="../assets/images/img-2019-2-22/jinru-01.png">
      <div :class="$style.img02">{{`${jiazaiNum}%`}}</div>
    </div>

    <div :class="$style['page-02']" v-show="page==='page2'">
        <div :class="$style.top">
            <div :class="$style.left">
                <img  src="../assets/images/img-2019-2-22/xuanze-01.png">
            </div>
            <div :class="$style.right">
                <img :class="$style.jiantou" src="../assets/images/img-2019-2-22/xuanze-03.png">
                <div :class="$style.center">
                    <img :class="$style.title" src="../assets/images/img-2019-2-22/xuanze-02.png">
                    <div :class="$style.box">
                        <span @click="xuanzejineng('四两拨千斤')" :class="{[$style.change]: xuanzejinengBg('四两拨千斤')}">四两拨千斤</span>
                        <span @click="xuanzejineng('旋风无影腿')" :class="{[$style.change]: xuanzejinengBg('旋风无影腿')}">旋风无影腿</span>
                        <span @click="xuanzejineng('劲力一刀斩')" :class="{[$style.change]: xuanzejinengBg('劲力一刀斩')}">劲力一刀斩</span>
                        <span @click="xuanzejineng('净门冲击波')" :class="{[$style.change]: xuanzejinengBg('净门冲击波')}">净门冲击波</span>
                        <span @click="xuanzejineng('分瓜切果手')" :class="{[$style.change]: xuanzejinengBg('分瓜切果手')}">分瓜切果手</span>
                    </div>
                </div>
                <img :class="$style.jiantou" src="../assets/images/img-2019-2-22/xuanze-04.png">
            </div>
        </div>
        <img @click="dati()" :class="$style.bottom" src="../assets/images/img-2019-2-22/xuanze-05.png">
    </div>

    <div :class="$style['page-03']" v-show="page==='page3'">

      <blood-strip 
        v-if="tiData"
        ref="bloodStrip" 
        :xuanzedaan="xuanzedaan" 
        :changdu="tiData.tm.length" 
        :class="$style['blood-strip']"/>

      <div :class="$style['title']">
        <p>{{title}}</p>
      </div>

      <attack v-if="!jieshu" ref="attack" :class="$style['attack']"/>
      <jieguo v-if="jieshu" :class="$style['attack']" />

      <img :class="$style['main-01']" src="../assets/images/img-2019-2-22/main-01.png">
      <img :class="$style['main-02']" src="../assets/images/img-2019-2-22/main-02.png">
      <img :class="$style['main-03']" src="../assets/images/img-2019-2-22/main-03.png">
      <img v-if="jieshu" :class="$style['jieguo-01']" src="../assets/images/img-2019-2-22/jieguo-01.png">
      <img class="guang1" :class="$style['main-guang1']" src="../assets/images/img-2019-2-22/main-04.png">
      <img class="guang2" :class="$style['main-guang2']" src="../assets/images/img-2019-2-22/main-04.png">
      <img class="guang3" :class="$style['main-guang3']" src="../assets/images/img-2019-2-22/main-04.png">

      <div :class="$style['daTiMianBan']" v-if="datila">
        <div :class="$style['wen-ti']">
          <p>{{tiData.tm[pointer].w}}</p>
          <img @click="xuanze(true)" :class="$style['dati-01']" src="../assets/images/img-2019-2-22/dati-01.png">
          <img @click="xuanze(false)" :class="$style['dati-02']" src="../assets/images/img-2019-2-22/dati-02.png">
        </div>
        <div :class="$style['xian']" v-show="zhanshidaan">
          <img :class="$style['dati-04']" src="../assets/images/img-2019-2-22/dati-04.png">
          <img :class="$style['dati-04']" src="../assets/images/img-2019-2-22/dati-04.png">
        </div>
        <div :class="$style['da-an']" v-show="zhanshidaan">
          <p :class="$style['da-an-title']">{{tiData.tm[pointer].d ? '对':'错'}}</p>
          <p>{{tiData.tm[pointer].daan}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import bloodStrip from '@/components/bloodStrip';
  import attack from '@/components/attack';
  import wArena from '@/mock/wArena';
  import jieguo from '@/components/jieguo';

  export default {
    data() {
      return {
        t: {},
        jiazaiNum: 0,
        page: 'page1',
        jineng: '四两拨千斤',
        pointer: 0,
        datila: false,
        tiData: null,
        xuanzedaan: [],
        zhanshidaan: false,
        title: '第一题',
        jieshu: false,
      };
    },
    components: {
      bloodStrip,
      attack,
      jieguo,
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.t = setInterval(() => {
          if (this.jiazaiNum >= 100) {
            this.page = 'page2';
            clearInterval(this.t);
          } else {
            const random = Math.floor(Math.random() * 6);
            this.jiazaiNum = this.jiazaiNum + random;
          }
        }, 10);
      },
      dati() {
        this.pointer = 0;
        this.page = 'page3';
        const data = wArena.find(item => {
          return item.title === this.jineng;
        });
        this.tiData = data;
        setTimeout(() => {
          this.datila = true;
        }, 2000);
      },
      xuanze(val) {
        if (this.zhanshidaan) return;
        this.zhanshidaan = true;
        if (this.tiData.tm[this.pointer].d === val) {
          this.$refs.attack.styl = 1;
          this.title = this.jineng;
          this.xuanzedaan.push(1);
        } else {
          this.$refs.attack.styl = 2;
          this.title = '脏脏拳';
          this.xuanzedaan.push(0);
        }
        setTimeout(() => {
          if (this.pointer >= this.tiData.tm.length - 1) {
            console.log('没了');
            this.datila = false;
            const dui = this.xuanzedaan.filter(item => {
              return item === 1;
            }).length;
            setTimeout(() => {
              if (dui === this.tiData.tm.length) {
                this.title = 'KO';
                this.jieshu = true;
                setTimeout(() => {
                  this.$router.replace({ name: 'Page04' });
                }, 1000);
              } else {
                this.$router.replace({ name: 'Page03' });
              }
            }, 100);
          } else {
            this.zhanshidaan = false;
            this.nextTi();
          }
        }, 1300);
      },
      nextTi() {
        this.datila = false;
        setTimeout(() => {
          this.pointer = this.pointer + 1;
          this.$refs.attack.styl = 0;
          this.title = `第${this.pointer + 1}题`;
          setTimeout(() => {
            this.datila = true;
          }, 1000);
        }, 3000);
      },
      xuanzejineng(val) {
        this.jineng = val;
      },
      xuanzejinengBg(val) {
        if (this.jineng === val) {
          return true;
        }
        return false;
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
    img,div{
      display: block;
      margin: 0 auto;
    }
    .img01{
      width: 8rem;
    }
    .img02{
      width: 4rem;
      height: 4rem;
      background-image:url('../assets/images/img-2019-2-22/jinru-02.png'); 
      background-size:100%;
      background-repeat: no-repeat;
      text-align: center;
      line-height: 2.6rem;
      font-size: 0.8rem;
      color: #b93123;
    }
  }
  .page-02{
      position: absolute;
      height: 100%;
      width: 100%;
      overflow: hidden;
      background-image:url('../assets/images/img-2019-2-22/xuanze-07.png'); 
      background-position: center center;
      background-size:100%;
      background-repeat: no-repeat;
      .top{
          margin: 0 auto;
          width: 23rem;
          display: flex;
          justify-content: space-between;
        .left{
            width: 7.3rem; 
            background-image:url('../assets/images/img-2019-2-22/xuanze-06.png'); 
            background-size:100%;
            background-repeat: no-repeat;
            img{
                width: 100%;
                margin-top: 3.5rem
            }
        } 
        .right{
            width: 12rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 3rem;
            .center{
              width: 9.6rem;
              padding: 0.2rem;
              text-align: center;
              border: 0.08rem dotted #d04022;
              .title{
                width: 5rem;
                margin-top: -2rem;
              }
              .box{
                span{
                  font-size: 0.7rem;
                  display: inline-block;
                  background: #54954d;
                  border: 0.12rem solid #f9e4b2;
                  margin-bottom: 0.3rem;
                  border-radius: 0.6rem;
                  padding: 0.3rem;
                  color: #f9e4b2;
                  box-shadow: 0 0.18rem 0 #e9cc6e;
                }
                .change{
                  background: #d04022;
                }
              }
            }
            .jiantou{
              width: 1rem;
              height: 2rem;
            }
        }
      }
      .bottom{
        width: 6.8rem;
        display: block;
        margin: 1.6rem auto 0;
      }
  }





  .page-03{
    .blood-strip{
      margin-top: 0.4rem;
    }
    .title{
      text-align: center;
      font-size: 4rem;
      font-weight: bold;
      margin: 2rem 0;
      color: #fdf3b8;
      text-shadow:0 0.3rem 0 #e5a62a;
    }
    .attack{
      width: 100%;
      position: absolute;
      bottom: 2.2rem;
      left: 0;
      z-index: 10;
    }
    .main-01{
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .main-02{
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .main-03{
      width: 23rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -11.5rem;
    }
    .jieguo-01{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .main-guang1{
      width: 36rem;
      position: absolute;
      top: 0;
      left: 0;
      margin-left: -18rem;
      transform: rotate(40deg);
    }
    .main-guang2{
      width: 36rem;
      position: absolute;
      top: -5rem;
      left: 50%;
      margin-left: -18rem;
      transform: rotate(98deg);
    }
    .main-guang3{
      width: 36rem;
      position: absolute;
      top: 0;
      right: 0;
      margin-right: -18rem;
      transform: rotate(-40deg);
    }


    .daTiMianBan{
      position: fixed;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.4);
      text-align: center;
      z-index: 1000;
      .wen-ti{
        margin: 0 auto;
        margin-top: 2rem;
        width: 18rem;
        background: #54954d;
        color: #fdf3b8;
        border: 0.14rem solid #fdf3b8;
        border-radius: 1.4rem;
        padding: 0.4rem 0.4rem 0.2rem;
        box-shadow: 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2);
        .dati-01{
          display: inline-block;
          width: 1.2rem;
          margin: 0.2rem 2rem 0;
        }
        .dati-02{
          display: inline-block;
          width: 1.2rem;
          margin: 0.2rem 2rem 0;
        }
      }
      .xian{
        width: 18rem;
        margin: 0 auto;
        height: 1rem;
        .dati-04{
          width: 0.4rem;
          margin: 0 4rem;
          margin-top: -0.6rem;
        }
      }
      .da-an{
        font-size: 0.7rem;
        margin: 0 auto;
        width: 18rem;
        background: #54954d;
        color: #fdf3b8;
        border: 0.14rem solid #fdf3b8;
        border-radius: 1.4rem;
        padding: 0.4rem;
        box-shadow: 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2);
        .da-an-title{
          color: #e3a52a;
          margin: 0 auto 0.2rem;
          font-size: 1.5rem;
          width: 9rem;
          background-image:url('../assets/images/img-2019-2-22/dati-03.png');
          background-size:100%;
          background-position: center center;
          background-repeat: no-repeat;
        }
      }
    }
  }
}
</style>
