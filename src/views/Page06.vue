<template>
  <div :class="$style.wrap">
      <!-- <img :class="$style.dianJiFenxiang" src="../assets/images/img-2019-2-22/fenxiang-01.png"> -->

      <div :class="$style.mianban" v-if="!jieshu">
        <div :class="$style.wheelMain">
            <div :class="$style.wheelPointerBox">
              <div :class="$style.wheelPointer" @click="rotate_handle()"></div>
            </div>
            <div :class="$style.wheelBg" :style="{transform:rotate_angle,transition:rotate_transition}"></div>
        </div>
      </div>

      <div :class="$style.zhongjiangjieguo" v-if="jieshu">
        <span v-if="jiangxiangText === '一等奖'">
            <img :class="$style.title" src="../assets/images/img-2019-2-22/zhongjiangla-01.png">
            <img :class="$style.jiangping" src="../assets/images/img-2019-2-22/zhongjiangla-02.png"> 
        </span>
        <span v-if="jiangxiangText === '二等奖'">
            <img :class="$style.title" src="../assets/images/img-2019-2-22/zhongjiangla-03.png">
            <img :class="$style.jiangping" src="../assets/images/img-2019-2-22/zhongjiangla-04.png"> 
        </span>
        <span v-if="jiangxiangText === '三等奖'">
            <img :class="$style.title" src="../assets/images/img-2019-2-22/zhongjiangla-05.png">
            <img :class="$style.jiangping" src="../assets/images/img-2019-2-22/zhongjiangla-06.png"> 
        </span>
        <div :class="$style.btn">
            <img @click="show=true" src="../assets/images/img-2019-2-22/hongbao-03.png">
            <img src="../assets/images/img-2019-2-22/hongbao-04.png">
        </div>
      </div>

      <div :class="$style.mianbanZheZhao" v-if="jieshu&&show">
        <div :class="$style.shuru" v-if="!lingqu">
            <p>请输入联系方式</p>
            <input type="text">
        </div>
        <div :class="$style.chenggong" v-if="lingqu">
            <p :class="$style.p1">领取成功！</p>
            <p :class="$style.p2">活动结束后总部工作人员会与您联系 奖品将在4月份统一由总部寄出</p>
        </div>
        <div :class="$style.btn">
            <img @click="lingqu=true" src="../assets/images/img-2019-2-22/hongbao-03.png">
            <img src="../assets/images/img-2019-2-22/hongbao-04.png">
        </div>
      </div>

      <img :class="$style['main-01']" src="../assets/images/img-2019-2-22/main-01.png">
      <img :class="$style['main-02']" src="../assets/images/img-2019-2-22/main-02.png">
      <img v-if="jieshu" :class="$style['jieguo-01']" src="../assets/images/img-2019-2-22/jieguo-01.png">
      <img :class="$style['main-03']" src="../assets/images/img-2019-2-22/fenxiang-07.png">
      <img :class="$style['main-04']" src="../assets/images/img-2019-2-22/fenxiang-06.png">
  </div>
</template>

<script>
/* eslint-disable */
 import fenxiang from '@/components/fenxiang';

 export default {
   data() {
     return {
        lingqu:false,
        jiangxiangText:'三等奖',
        jieshu:false,
        show: false,
        yichoujiang: false,
        jiangxiang: 1,
        click_flag: true, // 是否可以旋转抽奖
        start_rotating_degree: 0, // 初始旋转角度
        rotate_angle: 0, // 将要旋转的角度
        rotate_transition: 'transform 6s ease-in-out', // 初始化选中的过度属性控制
     };
   },
   components: {
     fenxiang,
   },
   mounted() {
   },
   methods: {
     rotate_handle() {
       this.yichoujiang = true;
       this.init_prize_list();
     },
     init_prize_list() {
       switch (this.jiangxiangText) {
         case '一等奖':
           this.jiangxiang = 0;
           break;
         case '二等奖':
           this.jiangxiang = 2;
           break;
         case '三等奖':
           this.jiangxiang = 3;
           break;
         default:
           this.jiangxiang = 1;
       }
       this.init();
     },
     init() {
       if (this.yichoujiang) {
         this.rotating(this.jiangxiang);
       } else {
         window.alert('请明天再来抽奖哦！');
       }
     },
     rotating(index) {
       if (!this.click_flag) return;

       const type = 0; // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
       const during_time = 5; // 默认为1s

       const result_index = index;

    //    const result_angle = [330, 270, 210, 150, 90, 30]; // 最终会旋转到下标的位置所需要的度数
       const result_angle = [342, 306, 270, 234, 198, 162, 126, 90, 54, 18]; // 最终会旋转到下标的位置所需要的度数
       const rand_circle = 6; // 附加多转几圈，2-3
       this.click_flag = false; // 旋转结束前，不允许再次触发
       if (type === 0) {
         // 转动盘子
         const rotate_angle =
          this.start_rotating_degree +
          rand_circle * 360 +
          result_angle[result_index] -
          this.start_rotating_degree % 360;

         this.start_rotating_degree = rotate_angle;
         console.log(rotate_angle);

         this.rotate_angle = `rotate(${rotate_angle}deg)`;
         const that = this;
         setTimeout(() => {
           that.click_flag = true; // 旋转结束后，允许再次触发
           that.game_over();
         }, during_time * 1000 + 1500); // 延时，保证转盘转完
       } else {
         // console.log('');
       }
     },
     game_over() {
        this.jieshu = true;
        console.log('游戏结束');
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
   .jieguo-01{
        width: 100%;
        position: absolute;
        bottom: 0;
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
    .wheelMain{
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background: url("../assets/images/img-2019-2-22/choujiang-03.png") no-repeat center bottom;
      background-size:12rem; 
      padding-bottom: 2.6rem;
      .wheelPointerBox {
        margin-top: -1.3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 100;
        transform: translate(-50%, -60%);
        width: 4rem;
        height: 4rem;
        .wheelPointer {
          width: 4rem;
          height: 4rem;
          background: url("../assets/images/img-2019-2-22/choujiang-02.png") no-repeat center top;
          background-size: 100%;
          transform-origin: center 60%;
        }
      }
      .wheelBg{
        width: 10rem;
        height: 10rem;
        border-radius: 5rem;
        box-shadow: 0 0 0.2rem rgba(255, 138, 3, 0.6);
        background: url("../assets/images/img-2019-2-22/choujiang-01.png") no-repeat center top;
        background-size: 100%;
        color: #fff;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        transition: transform 3s ease;
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
        .shuru{
           position: absolute;
           width: 100%;
           bottom: 3rem;
           color: #fef7a8;
           p{
               font-size: 0.6rem;
           }
           input{
               color: #666666;
               margin: 0.2rem 0;
               border: none;
               background: #fef7a8;
               width: 8rem;
               border-radius:0.3rem; 
               height: 1rem;
               line-height: 1rem;
               font-size: 0.6rem;

           }
        }
        .chenggong{
            position: absolute;
            width: 100%;
            bottom: 3rem;
            color: #fef7a8;
            .p1{
               font-size: 1rem;
            }
            .p2{
               font-size: 0.6rem;
               width: 12rem;
               display: inline-block;
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
    .zhongjiangjieguo{
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        text-align: center;
        z-index: 1000;
        text-align: center;
        .title{
            display: block;
            margin: 1rem auto 0;
            width: 20rem;
        }
        .jiangping{
            display: block;
            margin: 0 auto;
            margin-top: -1rem;
            width: 10rem;
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

