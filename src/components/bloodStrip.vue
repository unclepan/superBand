<template>
  <div :class="$style.wrap">
    <img :class="$style['main-05']" src="../assets/images/img-2019-2-22/main-05.png">
    <div :class="$style.center">
        <div :class="$style.line">
            <div :class="$style.innerLine" :style="{width: `${xi}%`}"></div>
        </div>
        <img class="rotateIn" :class="$style['main-07']" src="../assets/images/img-2019-2-22/main-07.png">
        <div :class="$style.line">
            <div :class="$style.innerLine" :style="{width: `${you}%`}"></div>
        </div>
    </div>
    <img v-if="you" :class="$style['main-06']" src="../assets/images/img-2019-2-22/main-06.png">
    <img v-else :class="$style['main-06']" src="../assets/images/img-2019-2-22/main-09.png">
  </div>
</template>

<script>

  export default {
    props: {
      xuanzedaan: {
        type: Array,
      },
      changdu: {
        type: Number,
      },
    },
    data() {
      return {
        xi: 100,
        you: 100,
      };
    },
    mounted() {
    },
    methods: {
      jiSuanXueTiao() {
        const dui = this.xuanzedaan.filter(item => {
          return item === 1;
        }).length;
        const cuo = this.xuanzedaan.filter(item => {
          return item === 0;
        }).length;
        const duiA = this.changdu - dui;
        const cuoB = this.changdu - cuo;
        this.xi = cuoB * (100 / this.changdu);
        this.you = duiA * (100 / this.changdu);
      },
    },
    watch: {
      xuanzedaan() {
        this.jiSuanXueTiao();
      },
    },
  };
</script>
<style lang="less" module>
.wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    .main-05{
        width: 1.4rem;
        height: 1.8rem;
        margin-right: 0.3rem;
    }
    .main-06{
        width: 1.4rem;
        height: 1.8rem;
        margin-left: 0.3rem;
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        .line{
            height: 0.42rem;
            background: #dfa229;
            width: 8rem;
            border-radius: 0.16rem;
            overflow: hidden;
            box-shadow: 0 0.1rem 0 #c78f1f;
            .innerLine{
                height: 0.42rem;
                background-image: url('../assets/images/img-2019-2-22/main-08.png'); 
                background-size: 1.2rem;
                border-radius: 0.16rem;
                overflow: hidden; 
            }
        }
        .main-07{
            width: 1.8rem;
            margin: 0 0.3rem;
        }
    }
}
</style>
