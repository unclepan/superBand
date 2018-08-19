export default {
  data() {
    return {
      easejoy_bean: 0, // 金豆
      lottery_ticket: 0, // 抽奖次数
      prize_list: [
        {
          icon: require('../assets/img/bean_500.png'), // 奖品图片
          count: 10, // 奖品数量
          name: '易趣豆', // 奖品名称
          isPrize: 1, // 该奖项是否为奖品
        },
        {
          icon: require('../assets/img/bean_five.png'),
          count: 5,
          name: '豆',
          isPrize: 1,
        },
        {
          icon: require('../assets/img/bean_one.png'),
          count: 10,
          name: '易趣豆',
          isPrize: 1,
        },
        {
          icon: require('../assets/img/point_five.png'),
          count: 5,
          name: '积分',
          isPrize: 1,
        },
        {
          icon: require('../assets/img/point_ten.png'),
          count: 10,
          name: '积分',
          isPrize: 1,
        },
        {
          icon: require('../assets/img/bean_500.png'),
          count: 10,
          name: '易趣豆',
          isPrize: 1,
        },
        {
          icon: require('../assets/img/give_up.png'),
          count: 0,
          name: '未中奖',
          isPrize: 0,
        },
        {
          icon: require('../assets/img/bean_500.png'),
          count: 10,
          name: '易趣豆',
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
      this.i = this.i + 2;
    },
    rotating(index) {
      if (!this.click_flag) return;
      const type = 0; // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
      const during_time = 5; // 默认为1s
      const random = Math.floor(Math.random() * 7);
      const result_index = index || random; // 最终要旋转到哪一块，对应prize_list的下标
      const result_angle = [337.5, 292.5, 247.5, 202.5, 157.5, 112.5, 67.5, 22.5]; // 最终会旋转到下标的位置所需要的度数
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
  },
};
