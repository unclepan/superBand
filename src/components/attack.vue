<template>
  <div :class="$style.wrap">
      <div :class="$style.kaishi" v-if="styl===0">
          <div :class="$style.innerKaishi">
            <img class="xiaoRenSuo1" :class="$style['kaishi-xi']" src="../assets/images/img-2019-2-22/kaishi-xi-01.png">
            <img class="xiaoRenSuo2" :class="$style['kaishi-you']" src="../assets/images/img-2019-2-22/kaishi-you-01.png">
          </div>
      </div>

      <div :class="$style.dui" v-if="styl===1">
        <img  :class="$style['dui-shan']" :style="{left:`${2.9+num}rem`}" src="../assets/images/img-2019-2-22/dui-shan.png">
        <div :class="$style.innerDui">
          <img v-show="num===1" :class="$style['dui-xi']" src="../assets/images/img-2019-2-22/duidui-xi-01.png">
          <img v-show="num===2" :class="$style['dui-xi']" src="../assets/images/img-2019-2-22/duidui-xi-02.png">
          <!-- <img v-show="num===3" :class="$style['dui-xi']" src="../assets/images/img-2019-2-22/dui-xi-03.png"> -->
          <img v-show="num===1" :class="$style['dui-you']" src="../assets/images/img-2019-2-22/duidui-you-01.png">
          <img v-show="num===2" :class="$style['dui-you']" src="../assets/images/img-2019-2-22/duidui-you-02.png">
          <!-- <img v-show="num===3" :class="$style['dui-you']" src="../assets/images/img-2019-2-22/dui-you-03.png"> -->
        </div>
      </div>

      <div :class="$style.cuo" v-if="styl===2">
        <img  :class="$style['cuo-shan']" :style="{right:`${3+num}rem`}" src="../assets/images/img-2019-2-22/cuo-shan.png">
        <div :class="$style.innerCuo">
          <img v-show="num===1" :class="$style['cuo-xi']" src="../assets/images/img-2019-2-22/cuocuo-xi-01.png">
          <img v-show="num===2" :class="$style['cuo-xi']" src="../assets/images/img-2019-2-22/cuocuo-xi-02.png">
          <!-- <img v-show="num===3" :class="$style['cuo-xi']" src="../assets/images/img-2019-2-22/cuo-xi-03.png"> -->
          <img v-show="num===1" :class="$style['cuo-you']" src="../assets/images/img-2019-2-22/cuocuo-you-01.png">
          <img v-show="num===2" :class="$style['cuo-you']" src="../assets/images/img-2019-2-22/cuocuo-you-02.png">
          <!-- <img v-show="num===3" :class="$style['cuo-you']" src="../assets/images/img-2019-2-22/cuo-you-03.png"> -->
        </div>
      </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        num: 1,
        styl: 0,
      };
    },
    mounted() {
      this.action();
    },
    methods: {
      action() {
        setInterval(() => {
          if (this.num < 2) {
            this.num = this.num + 1;
          } else {
            this.num = 1;
          }
        }, 100);
      },
    },
  };
</script>
<style lang="less" module>
    .wrap{
        width: 100%;
        .kaishi{
            margin: 0 auto;
            width: 10rem;
            position: relative;  
            .innerKaishi{
                display: flex;
                justify-content: center;
                .kaishi-xi{
                    display: block;
                    width: 4rem;
                    height: 3.8rem;
                }
                .kaishi-you{
                    display: block;
                    width: 4rem;
                    height: 3.8rem;
                }
            }
        }
        .dui{
            margin: 0 auto;
            width: 10rem;
            position: relative;
            .innerDui{
                display: flex;
                justify-content: center;
                .dui-xi{
                    display: block;
                    width: 4rem;
                    height: 3.3rem;
                }
                .dui-you{
                    display: block;
                    width: 3.4rem;
                    height: 3rem;
                }
            }
            .dui-shan{
                position: absolute;
                left: 4.5rem;
                top: 0.3rem;
                display: block;
                width: 1rem;
                height: 2rem;
            }
        }
         .cuo{
            margin: 0 auto;
            width: 10rem;
            position: relative;
            .innerCuo{
                display: flex;
                justify-content: center;
                .cuo-xi{
                    display: block;
                    width: 4rem;
                    height: 3.8rem;
                }
                .cuo-you{
                    display: block;
                    width: 4rem;
                    height: 3.8rem;
                }
            }
            .cuo-shan{
                position: absolute;
                right: 5rem;
                top: 1.3rem;
                display: block;
                width: 0.8rem;
                height: 1.1rem;
            }
        }
    }
</style>
