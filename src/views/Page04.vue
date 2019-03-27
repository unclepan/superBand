<template>
  <div :class="$style.wrap">
      <img v-if="fff" :class="$style.dianJiFenxiang" class="pulse" src="../assets/images/img-2019-2-22/fenxiang-01.png">
      <div :class="$style.mianban">
        <p :class="$style.title" class="rubberBand" v-if="tiData.fenxiang">{{tiData.fenxiang||'即将回到首页'}}</p>
        <fenxiang/>
        <div :class="$style.btn">
          <img @click="zailai()" src="../assets/images/img-2019-2-22/fenxiang-02.png">
          <img @click="fff=true" src="../assets/images/img-2019-2-22/fenxiang-03.png">
          <img @click="youjiang()" class="pulse" src="../assets/images/img-2019-2-22/fenxiang-04.png">
          <img @click="hongbao()" src="../assets/images/img-2019-2-22/fenxiang-05.png">
        </div>
      </div>
      <img :class="$style['main-01']" src="../assets/images/img-2019-2-22/main-01.png">
      <img :class="$style['main-02']" src="../assets/images/img-2019-2-22/main-02.png">
      <img class="xianying" :class="$style['main-03']" src="../assets/images/img-2019-2-22/fenxiang-07.png">
      <img :class="$style['main-04']" src="../assets/images/img-2019-2-22/fenxiang-06.png">
  </div>
</template>

<script>
 import fenxiang from '@/components/fenxiang';
 import { mapState } from 'vuex';

 export default {
   data() {
     return {
       fff: false,
     };
   },
   computed: {
     ...mapState(['tiData', 'xuanDeDaAn']),
   },
   components: {
     fenxiang,
   },
   mounted() {
     this.action();
   },
   methods: {
     action() {
       const dui = this.xuanDeDaAn.filter(item => {
         return item === 1;
       }).length;
       if (dui < 3) {
         this.$router.replace({ name: 'Page01' });
       } else {
         this.init();
       }
     },
     init() {
       if (!this.tiData.fenxiang) {
         this.$router.replace({ name: 'Page02' });
       }
     },
     zailai() {
       this.$router.replace({ name: 'Page02' });
     },
     youjiang() {
       this.$router.replace({ name: 'Page06' });
     },
     hongbao() {
       this.$router.replace({ name: 'Page05' });
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
  .dianJiFenxiang{
    position: fixed;
    right: 1rem;
    top: 1rem;
    z-index: 1000;
    width: 1.2rem;
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
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .main-04{
    width: 20rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10rem;
  }
  .mianban{
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    text-align: center;
    z-index: 1000;
    text-align: center;
    .title{
      font-size: 1.2rem;
      text-shadow:0.1rem 0.1rem 0 #f9e4b2;
      color: #fe420f;
      width: 20rem;
      margin: 1rem auto 1.1rem;
    }
    .btn{
      margin: 0.1rem auto 0;
      width: 20rem;
      display: flex;
      justify-content: space-between;
      img{
        display: block;
        width: 4rem;
        height: 1.6rem;
      }
    }
  }
}
</style>

