<template>
  <div :class="$style.wrap">
    <!-- <div :class="$style['page-01']">
      <img :class="$style.img01" src="../assets/images/img-2019-2-22/jinru-01.png">
      <div :class="$style.img02">12</div>
    </div> -->
    <!-- <div :class="$style['page-02']">
        <div :class="$style.top">
            <div :class="$style.left">
                <img  src="../assets/images/img-2019-2-22/xuanze-01.png">
            </div>
            <div :class="$style.right">
                <img :class="$style.jiantou" src="../assets/images/img-2019-2-22/xuanze-03.png">
                <div :class="$style.center">
                    <img :class="$style.title" src="../assets/images/img-2019-2-22/xuanze-02.png">
                    <div :class="$style.box">
                        <span>四两拨千斤</span>
                        <span>旋风无影腿</span>
                        <span>劲力一刀斩</span>
                        <span>净门冲击波</span>
                        <span>分瓜切果手</span>
                    </div>
                </div>
                <img :class="$style.jiantou" src="../assets/images/img-2019-2-22/xuanze-04.png">
            </div>
        </div>
        <img :class="$style.bottom" src="../assets/images/img-2019-2-22/xuanze-05.png">
    </div> -->
    <div :class="$style['page-03']">
      <blood-strip :class="$style['blood-strip']"/>
      <div :class="$style['title']">第一题</div>
      <attack :class="$style['attack']"/>
      <img :class="$style['main-01']" src="../assets/images/img-2019-2-22/main-01.png">
      <img :class="$style['main-02']" src="../assets/images/img-2019-2-22/main-02.png">
      <img :class="$style['main-03']" src="../assets/images/img-2019-2-22/main-03.png">
    </div>
  </div>
</template>

<script>
  import bloodStrip from '@/components/bloodStrip';
  import attack from '@/components/attack';

  export default {
    data() {
      return {
      };
    },
    components: {
      bloodStrip,
      attack,
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
      line-height: 3rem;
      font-size: 0.8rem;
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
      bottom: 0;
      left: 0;
    }
    .main-03{
      width: 23rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -11.5rem;
    }
  }
}
</style>
