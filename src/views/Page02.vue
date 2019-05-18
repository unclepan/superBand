<template>
  <div :class="$style.wrap">

    <div :class="$style['page-01']" v-show="page==='page1'">
      <img :class="$style.img01" src="../assets/images/img-2019-2-22/jinru-01.png">
      <div :class="$style.img02">{{`${jiazaiNum}%`}}</div>
    </div>

    <div :class="$style['page-02']" v-show="page==='page2'">
        <div :class="$style.top">
            <div :class="$style.left">
                <fenxiang :class="$style['fenxiang']"/>
            </div>
            <div :class="$style.right">
                <img class="pianyi1" :class="$style.jiantou" src="../assets/images/img-2019-2-22/xuanze-03.png">
                <div :class="$style.center">
                    <div class="pulse" :class="$style.title">
                      <img src="../assets/images/img-2019-2-22/xuanze-02.png">
                    </div>
                    <div :class="$style.box">
                        <span 
                          v-for="(item, index) in xianzejineng.list" :key="index"
                          @click="xuanzejineng(item)" 
                          :class="{[$style.change]: xuanzejinengBg(item)}">
                          {{item}}
                        </span>
                    </div>
                </div>
                <img class="pianyi2" :class="$style.jiantou" src="../assets/images/img-2019-2-22/xuanze-04.png">
            </div>
        </div>
        <img @click="dati()" class="pulse" :class="$style.bottom" src="../assets/images/img-2019-2-22/xuanze-05.png">
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
      <img class="xianying" :class="$style['main-02']" src="../assets/images/img-2019-2-22/main-02.png">
      <img :class="$style['main-03']" src="../assets/images/img-2019-2-22/main-03.png">
      <img v-if="jieshu" class="xianying" :class="$style['jieguo-01']" src="../assets/images/img-2019-2-22/jieguo-01.png">
      <img class="guang1" :class="$style['main-guang1']" src="../assets/images/img-2019-2-22/main-04.png">
      <img class="guang2" :class="$style['main-guang2']" src="../assets/images/img-2019-2-22/main-04.png">
      <img class="guang3" :class="$style['main-guang3']" src="../assets/images/img-2019-2-22/main-04.png">

      <div :class="$style['daTiMianBan']" v-if="datila" @click="aaaaaa()">
        <div class="bounceInDown" :class="$style['wen-ti']">
          <p>{{tiData.tm[pointer].w}}</p>
          <img @click.stop="xuanze(true)" :class="$style['dati-01']" src="../assets/images/img-2019-2-22/dati-01.png">
          <img @click.stop="xuanze(false)" :class="$style['dati-02']" src="../assets/images/img-2019-2-22/dati-02.png">
        </div>
        <div class="bounceInDown" :class="$style['xian']" v-show="zhanshidaan">
          <img :class="$style['dati-04-1']" src="../assets/images/img-2019-2-22/dati-04.png">
          <img :class="$style['dati-04-2']" src="../assets/images/img-2019-2-22/dati-04.png">
        </div>
        <div class="bounceInDown"  :class="$style['da-an']" v-show="zhanshidaan">
          <p :class="{[$style['da-an-title']]:true,[$style['da-an-title-an']]:!duicuo}">{{duicuo ? '对':'错'}}</p>
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
  import fenxiang from '@/components/fenxiang';
  import { mapMutations } from 'vuex';

  export default {
    data() {
      return {
        ttttttt: {},
        duicuo: true,
        xianzejineng: {
          list: ['四两拨千斤', '旋风无影腿', '劲力一刀斩', '净门冲击波', '分瓜切果手'],
          k: true,
        },
        t: {},
        t2: {},
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
      fenxiang,
    },
    mounted() {
      this.init();
      this.t2 = setInterval(() => {
        if (this.xianzejineng.k) {
          this.xianzejinengTimeOut();
        }
      }, 300);
    },
    methods: {
      xianzejinengTimeOut() {
        let v1 = 0;
        this.xianzejineng.list.forEach((item, index) => {
          if (item === this.jineng) {
            v1 = index + 1;
          }
        });
        if (v1 === this.xianzejineng.list.length) {
          v1 = 0;
        }
        this.jineng = this.xianzejineng.list[v1];
      },
      ...mapMutations({
        setTiData: 'setTiData',
        setXuanDeDaAn: 'setXuanDeDaAn',
      }),
      init() {
        this.t = setInterval(() => {
          if (this.jiazaiNum >= 90) {
            this.page = 'page2';
            clearInterval(this.t);
          } else {
            const random = Math.floor(Math.random() * 6);
            this.jiazaiNum = this.jiazaiNum + random;
          }
        }, 70);
      },
      dati() {
        this.pointer = 0;
        this.page = 'page3';
        const data = wArena.find(item => {
          return item.title === this.jineng;
        });
        this.tiData = data;
        this.setTiData(data);
        window.wwxx(this.tiData.fenxiang);
        setTimeout(() => {
          this.datila = true;
        }, 1800);
      },
      xuanze(val) {
        if (this.zhanshidaan) return;
        this.zhanshidaan = true;
        if (this.tiData.tm[this.pointer].d === val) {
          this.duicuo = true;
          this.$refs.attack.styl = 1;
          this.title = this.jineng;
          this.xuanzedaan.push(1);
        } else {
          this.duicuo = false;
          this.$refs.attack.styl = 2;
          this.title = '脏脏拳';
          this.xuanzedaan.push(0);
        }
        this.ttttttt = setTimeout(() => {
          if (this.pointer >= this.tiData.tm.length - 1) {
            console.log('没了');
            this.setXuanDeDaAn(this.xuanzedaan);
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
                }, 2800);
              } else if (dui >= 3) {
                this.$router.replace({ name: 'Page04' });
              } else {
                this.$router.replace({ name: 'Page03' });
              }
            }, 2800);
          } else {
            this.zhanshidaan = false;
            this.nextTi();
          }
        }, 3800);
      },
      nextTi() {
        this.datila = false;
        setTimeout(() => {
          this.pointer = this.pointer + 1;
          this.$refs.attack.styl = 0;
          switch (this.pointer + 1) {
            case 1:
              this.title = '第一题';
              break;
            case 2:
              this.title = '第二题';
              break;
            case 3:
              this.title = '第三题';
              break;
            case 4:
              this.title = '第四题';
              break;
            case 5:
              this.title = '第五题';
              break;
            case 6:
              this.title = '第六题';
              break;
            case 7:
              this.title = '第七题';
              break;
            default:
              this.jiangxiang = 1;
          }
          setTimeout(() => {
            this.datila = true;
          }, 1800);
        }, 1600);
      },
      aaaaaa() {
        if (!this.zhanshidaan) return;
        this.datila = false;
      },
      xuanzejineng(val) {
        this.xianzejineng.k = false;
        clearInterval(this.t2);
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
      height: 10rem;
    }
    .img02{
      width: 4rem;
      height: 4rem;
      background-image:url('../assets/images/img-2019-2-22/jinru-02.png'); 
      background-size:100%;
      background-repeat: no-repeat;
      text-align: center;
      line-height: 2.6rem;
      font-size: 1rem;
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
            width: 7rem;
            height: 10rem;
            background-image:url('../assets/images/img-2019-2-22/xuanze-06.png'); 
            background-size:100%;
            background-repeat: no-repeat;
            .fenxiang{
              transform: scale(0.8,0.8);
              margin-left: -1rem;
              margin-top: 2.2rem
            }
        } 
        .right{
            width: 12rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2.8rem;
            .center{
              width: 10rem;
              text-align: center;
              .title{
                width: 6rem;
                margin: 0 auto;
                margin-bottom: 0.4rem;
                border: 0.08rem dotted #d04022;
                border-radius: 0.2rem;
                padding: 0.1rem 0.3rem;
                img{
                  width: 100%;
                }
              }
              .box{
                padding: 0.3rem;
                border: 0.08rem dotted #d04022;
                border-radius: 0.2rem;
                span{
                  font-size: 0.7rem;
                  display: inline-block;
                  background: #54954d;
                  border: 0.12rem solid #f9e4b2;
                  margin: 0 0.1rem;
                  margin-bottom: 0.4rem;
                  border-radius: 0.6rem;
                  padding: 0.2rem 0.3rem;
                  color: #f9e4b2;
                  box-shadow: 0 0.18rem 0 #e9cc6e;
                }
                .change{
                  background: #d04022;
                }
              }
            }
            .jiantou{
              margin-top: 2rem;
              width: 1rem;
              height: 2rem;
            }
        }
      }
      .bottom{
        width: 6rem;
        display: block;
        margin: 1.6rem auto 0;
      }
  }





  .page-03{
    .blood-strip{
      margin-top: 0.4rem;
    }
    .title{
      position: relative;
      z-index: 999;
      text-align: center;
      font-size: 4.3rem;
      font-weight: bold;
      margin: 1rem 0;
      color: #fdf3b8;
      text-shadow:0 0.3rem 0 #e5a62a;
      p{
        font-family: 'happyzcool' !important;
      }
    }
    .attack{
      width: 100%;
      position: absolute;
      bottom: 2.2rem;
      left: 0;
      z-index: 1000;
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
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      margin-left: -18rem;
    }
    .main-guang2{
      width: 36rem;
      position:fixed;
      top: -5rem;
      left: 50%;
      z-index: 101;
      margin-left: -18rem;
    }
    .main-guang3{
      width: 36rem;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 102;
      margin-right: -18rem;
    }


    .daTiMianBan{
      position: fixed;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.8);
      text-align: center;
      z-index: 1000;
      .wen-ti{
        margin: 0 auto;
        margin-top: 2rem;
        width: 16rem;
        background: #54954d;
        color: #fdf3b8;
        border: 0.14rem solid #fdf3b8;
        border-radius: 1.4rem;
        padding: 0.4rem 0.4rem 0.2rem;
        box-shadow: 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2);
        p{
          font-size: 1.1rem;
        }
        .dati-01{
          display: inline-block;
          width: 1.6rem;
          margin: 0.2rem 2rem 0;
        }
        .dati-02{
          display: inline-block;
          width: 1.6rem;
          margin: 0.2rem 2rem 0;
        }
      }
      .xian{
        width: 16rem;
        margin: 0 auto;
        height: 1rem;
        position: relative;
        z-index: 2000;
        .dati-04-1{
          width: 0.4rem;
          margin-right: 4.3rem;
          margin-top: -0.6rem;
        }
        .dati-04-2{
          width: 0.4rem;
          margin-left: 4.3rem;
          margin-top: -0.6rem;
        }
      }
      .da-an{
        font-size: 0.7rem;
        margin: 0 auto;
        width: 16rem;
        background: #54954d;
        color: #fdf3b8;
        border: 0.14rem solid #fdf3b8;
        border-radius: 1.4rem;
        padding: 0.3rem;
        box-shadow: 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2);
        .da-an-title{
          text-shadow:0.12rem 0.12rem 0 #4d7d2e;
          color: #fe420f;
          -webkit-text-fill-color: #fe420f;/*文字的填充色*/
          -webkit-text-stroke: 0.023rem #fdf3b8;/*描边的像素，也就是粗细，这里指定是2像素的黑色边框*/
          margin: 0 auto 0.2rem;
          font-size: 2.3rem;
          width: 9rem;
          background-image:url('../assets/images/img-2019-2-22/dati-03.png');
          background-size:100%;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .da-an-title-an{
          text-shadow:0.12rem 0.12rem 0 #4d7d2e;
          color: #000000;
          -webkit-text-fill-color: #000000;/*文字的填充色*/
          -webkit-text-stroke: 0.023rem #fdf3b8;/*描边的像素，也就是粗细，这里指定是2像素的黑色边框*/
        }
      }
    }
  }
}
</style>
