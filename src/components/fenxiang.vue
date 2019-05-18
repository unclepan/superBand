<template>
  <div :class="$style.wrap">
      <div :class="$style.jieguo">
        <img v-show="num===1" :class="$style['fenxiang']" src="../assets/images/img-2019-2-22/fenxiang-ren-01.png">
        <img v-show="num===2" :class="$style['fenxiang']" src="../assets/images/img-2019-2-22/fenxiang-ren-02.png">
        <img v-show="num===3" :class="$style['fenxiang']" src="../assets/images/img-2019-2-22/fenxiang-ren-03.png">
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
          if (this.num < 3) {
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
        .jieguo{
            margin: 0 auto;
            width: 10rem;
            .fenxiang{
                display: block;
                width: 9rem;
                height: 8rem;
                z-index: 9;
            }
        }
    }
</style>
