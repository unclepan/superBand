<template>
  <div :class="$style.wrap">
      <img :class="$style.dianJiFenxiang" class="pulse" src="../assets/images/img-2019-2-22/fenxiang-01.png">
      <div :class="$style.mianban">
        <p :class="$style.title" class="rubberBand">快来看我发动四两拨千斤必杀技，成功打败洗碗精！耶！</p>
        <fenxiang/>
        <div :class="$style.btn">
          <img @click="zailai()" class="pulse" src="../assets/images/img-2019-2-22/fenxiang-02.png">
          <img class="pulse" src="../assets/images/img-2019-2-22/fenxiang-03.png">
          <img @click="youjiang()" class="pulse" src="../assets/images/img-2019-2-22/fenxiang-04.png">
          <img @click="hongbao()" class="pulse" src="../assets/images/img-2019-2-22/fenxiang-05.png">
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

 export default {
   data() {
     return {

     };
   },
   components: {
     fenxiang,
   },
   mounted() {
   },
   methods: {
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
      color: #fe420f;
      width: 20rem;
      margin: 1rem auto 1.8rem;
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

