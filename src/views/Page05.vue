<template>
  <div :class="$style.wrap">
      <img :class="$style.dianJiFenxiang" src="../assets/images/img-2019-2-22/fenxiang-01.png">

      <div :class="$style.mianban">
        <img :class="$style.title" src="../assets/images/img-2019-2-22/hongbao-01.png">
        <div :class="$style.hongbao">
            <p>
                <span :class="$style.big">5</span>
                <span>元</span>
            </p>
        </div>
        <div :class="$style.btn">
          <img @click="show=true" src="../assets/images/img-2019-2-22/hongbao-03.png">
          <img src="../assets/images/img-2019-2-22/hongbao-04.png">
        </div>
      </div>

      <div :class="$style.mianbanZheZhao" v-if="show">
        <div :class="$style.gongxi">
            <p>恭喜您！</p>
            <p>获得了5元红包！</p>
            <p>已存入您的微信钱包！</p> 
        </div>
        <div :class="$style.btn">
            <img src="../assets/images/img-2019-2-22/hongbao-03.png">
            <img src="../assets/images/img-2019-2-22/hongbao-04.png">
        </div>
      </div>

      <img :class="$style['main-01']" src="../assets/images/img-2019-2-22/main-01.png">
      <img :class="$style['main-02']" src="../assets/images/img-2019-2-22/main-02.png">
      <img :class="$style['main-03']" src="../assets/images/img-2019-2-22/fenxiang-07.png">
      <img :class="$style['main-04']" src="../assets/images/img-2019-2-22/fenxiang-06.png">
  </div>
</template>

<script>
 import fenxiang from '@/components/fenxiang';

 export default {
   data() {
     return {
       show: false,
     };
   },
   components: {
     fenxiang,
   },
   mounted() {
   },
   methods: {
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
      width: 17rem;
      margin: 0.8rem auto 0;
    }
    .hongbao{
        width: 8rem;
        height: 8rem;
        margin: 0 auto;
        margin-top: -0.5rem;
        background-image: url('../assets/images/img-2019-2-22/hongbao-02.png');
        background-repeat: no-repeat;
        background-size:100%; 
        p{
            padding-top: 1.4rem;
            color: #cc2c23;
            .big{
                font-size: 2rem;
            }
        }
    }
    .btn{
      position: absolute;
      bottom: 1rem;
      left: 50%;
      margin-left: -5rem;
      width: 10rem;
      display: flex;
      justify-content: space-between;
      img{
        display: block;
        width: 4rem;
        height: 1.6rem;
      }
    }
  }

  .mianbanZheZhao{
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        text-align: center;
        z-index: 1000;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.4);
        .gongxi{
           position: absolute;
           width: 100%;
           bottom: 3rem;
           color: #fef7a8;
        }
        .btn{
            position: absolute;
            bottom: 1rem;
            left: 50%;
            margin-left: -5rem;
            width: 10rem;
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

