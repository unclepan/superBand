<template>
  <div :class="$style.wrap">
    <div :class="$style.main">
      <img class="bounceIn" :class="$style.header" src="../assets/images/w_turntableTitle.png">
      <div :class="$style.wheelMain" v-if="!toast_control">
          <div :class="$style.wheelPointerBox">
            <div :class="$style.wheelPointer" @click="rotate_handle()" :style="{transform:rotate_angle_pointer,transition:rotate_transition_pointer}"></div>
          </div>
          <div :class="$style.wheelBg" :style="{transform:rotate_angle,transition:rotate_transition}"></div>
      </div>
      <div class="zoomInDown" :class="$style.toast" v-else>
        <img :class="$style.wGxTitle" src="../assets/images/w_gxTitle.png">
        <p>获得{{prize_list[this.i].name}}</p>
        <img :class="$style.wText" src="../assets/images/w_text.png">
      </div>
      <div :class="$style.butWrap">
        <div
          class="fadeOut"
          @click="fanhui()"
          :class="$style.nextWrap">
          <div :class="$style.next">返回</div>
        </div>
        <div
          class="fadeOut"
          :class="$style.nextWrap">
          <div :class="$style.next">奖品说明</div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      easejoy_bean: 0, // 金豆
      lottery_ticket: 0, // 抽奖次数
      prize_list: [
        {
          count: 0, // 奖品数量
          name: '一等奖', // 奖品名称
          isPrize: 1, // 该奖项是否为奖品
        },
        {
          count: 1,
          name: '感谢参与1',
          isPrize: 1,
        },
        {
          count: 2,
          name: '二等奖',
          isPrize: 1,
        },
        {
          count: 3,
          name: '感谢参与2',
          isPrize: 1,
        },
        {
          count: 4,
          name: '三等奖',
          isPrize: 1,
        },
        {
          count: 5,
          name: '感谢参与3',
          isPrize: 1,
        },
      ], // 奖品列表
      toast_control: false, // 抽奖结果弹出框控制器
      hasPrize: false, // 是否中奖
      start_rotating_degree: 0, // 初始旋转角度
      rotate_angle: 0, // 将要旋转的角度
      start_rotating_degree_pointer: 0, // 指针初始旋转角度
      rotate_angle_pointer: 0, // 指针将要旋转的度数
      rotate_transition: 'transform 6s ease-in-out', // 初始化选中的过度属性控制
      rotate_transition_pointer: 'transform 12s ease-in-out', // 初始化指针过度属性控制
      click_flag: true, // 是否可以旋转抽奖
      i: 0, // 测试使用
    };
  },
  created() {
    this.init_prize_list();
  },
  computed: {
    toast_title() {
      return this.hasPrize
        ? `恭喜您，获得${this.prize_list[this.i].count} ${this.prize_list[this.i].name}`
        : '未中奖';
    },
    toast_pictrue() {
      return this.hasPrize
        ? require('../assets/img/congratulation.png')
        : require('../assets/img/sorry.png');
    },
  },
  methods: {
    // 此方法为处理奖品数据
    init_prize_list(list) {},
    rotate_handle() {
      this.rotating();
      // this.i = this.i + 2;
    },
    rotating(index) {
      if (!this.click_flag) return;
      const type = 0; // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
      const during_time = 5; // 默认为1s
      const random = Math.floor(Math.random() * 5);
      this.i = random;
      console.log(random);
      const result_index = index || random; // 最终要旋转到哪一块，对应prize_list的下标
      const result_angle = [330, 270, 210, 150, 90, 30]; // 最终会旋转到下标的位置所需要的度数
      const rand_circle = 6; // 附加多转几圈，2-3
      this.click_flag = false; // 旋转结束前，不允许再次触发
      if (type == 0) {
        // 转动盘子
        const rotate_angle =
          this.start_rotating_degree +
          rand_circle * 360 +
          result_angle[result_index] -
          this.start_rotating_degree % 360;
        this.start_rotating_degree = rotate_angle;
        this.rotate_angle = `rotate(${rotate_angle}deg)`;
        // // //转动指针
        // this.rotate_angle_pointer = "rotate("+this.start_rotating_degree_pointer + 360*rand_circle+"deg)";
        // this.start_rotating_degree_pointer =360*rand_circle;
        const that = this;
        // 旋转结束后，允许再次触发
        setTimeout(function () {
          that.click_flag = true;
          that.game_over(this.i);
        }, during_time * 1000 + 1500); // 延时，保证转盘转完
      } else {
        //
      }
    },
    game_over() {
      this.toast_control = true;
      this.hasPrize = this.prize_list[this.i].isPrize;
    },
    // 关闭弹窗
    close_toast() {
      this.toast_control = false;
    },
    fanhui() {
      this.$router.push({ name: 'Congratulations' });
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
  background-image: url('../assets/images/w_turntableBg.jpg');
  background-repeat: no-repeat;
  background-size:100%;
  .main{
    .header{
      width: 12rem;
      margin: 0.8rem auto;
      display: block;
    }
    .wheelMain{
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .wheelPointerBox {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 100;
        transform: translate(-50%, -60%);
        width: 5.2rem;
        height: 5.2rem;
        .wheelPointer {
          width: 5.2rem;
          height: 5.2rem;
          background: url("../assets/img/draw_btn.png") no-repeat center top;
          background-size: 100%;
          transform-origin: center 60%;
        }
      }
      .wheelBg{
        width: 12rem;
        height: 12rem;
        border-radius: 6rem;
        box-shadow: 0 0 0.2rem rgba(255, 138, 3, 0.6);
        background: url("../assets/images/w_turntablePan.png") no-repeat center top;
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
    .butWrap{
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 50%;
      margin-left: -6.5rem;
      z-index: 1000;
      bottom: 2rem;
      width: 13rem;
      .nextWrap{
        cursor: pointer;
        border-radius: 0.8rem;
        border: 0.12rem solid #856c28;
        width: 5.5rem;
        min-height:2rem;
        display: block;
        background: rgba(250, 187, 34, 1);
        box-shadow: -0.23rem 0.2rem 0 rgba(255, 138, 3, 0.6);
        .next{
          text-shadow: 0px 0px 1px #ffffff;
          border-radius: 0.8rem;
          border: 0.12rem solid #856c28;
          text-align: center;
          width: 5.3rem;
          min-height: 1.8rem;
          line-height: 1.8rem;
          margin: -0.5rem auto;
          color: #ff7519;
          background: #ffe264;
          font-weight: bolder;
          font-size: 0.8rem;
        }
      }
    }
    .toast{
      background-color: #ffeea7;
      border: 0.1rem solid #7d6b35;
      width: 14rem;
      margin: 2rem auto;
      padding: 1rem;
      border-radius: 1.6rem;
      text-align: center;
      box-shadow: -0.23rem 0.2rem 0 rgba(255, 138, 3, 0.6);
      .wGxTitle{
        width: 6rem;
      }
      p{
        padding: 1rem 0;
        color: #fff000;
        font-size: 1.2rem;
        text-shadow:#ffa521 1px 0 1px,#ffa521 0 1px 1px,#ffa521 -1px 0 1px,#ffa521 0 -1px 1px;
      }
      .wText{
        width: 10rem;
      }
    }
  }

}
</style>
