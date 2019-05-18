<template>
  <div :class="$style.wrap">
      <div :class="$style.jieguo">
        <div :class="$style.innerJieguo">
          <img v-show="num===1" :class="$style['jieguo-xi']" src="../assets/images/img-2019-2-22/jieguojieguo-xi-01.png">
          <img v-show="num===2" :class="$style['jieguo-xi']" src="../assets/images/img-2019-2-22/jieguojieguo-xi-02.png">
          <!-- <img v-show="num===3" :class="$style['jieguo-xi']" src="../assets/images/img-2019-2-22/jieguo-xi-03.png"> -->
          <img v-show="num===1" :class="$style['jieguo-you']" src="../assets/images/img-2019-2-22/jieguojieguo-you-01.png">
          <img v-show="num===2" :class="$style['jieguo-you']" src="../assets/images/img-2019-2-22/jieguojieguo-you-02.png">
          <!-- <img v-show="num===3" :class="$style['jieguo-you']" src="../assets/images/img-2019-2-22/jieguo-you-03.png"> -->
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        num: 1,
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
        }, 70);
      },
    },
  };
</script>
<style lang="less" module>
    .wrap{
        width: 100%;
        .jieguo{
            margin: 0 auto;
            width: 10rem;
            height: 3.8rem;
            position: relative;
            .innerJieguo{
                .jieguo-xi{
                    position: absolute;
                    left: 2rem;
                    top: -2rem;
                    display: block;
                    width: 5rem;
                    height: 4rem;
                    z-index: 9;
                }
                .jieguo-you{
                    position: absolute;
                    right: 0;
                    top: 0;
                    display: block;
                    width: 5rem;
                    height: 4rem;
                }
            }
        }
    }
</style>
