<template>
  <div :class="$style.wrap">
    <div :class="$style.main">
      <div :class="$style.header">问题二</div>
      <div :class="$style.problem">
        <p>诗句“富贵不肯吃，贫者不解煮”描写的是哪道菜？</p>
      </div>
      <div :class="$style.answer">
        <img :class="$style.w_luobo" src="../assets/images/w_luobo.png">
        <img :class="$style.w_mogu" src="../assets/images/w_mogu.png">
        <div :class="$style.item">
          <div :class="$style.itemWrap">
            <div :class="$style.itemInner">A.放入清水中，新鲜的鸡蛋会沉下去，反之则会浮上来</div>
            <img :class="$style.panduan" src="../assets/images/w_dui.png">
          </div>
        </div>
        <div :class="$style.item">
          <div :class="$style.itemWrap">
            <div :class="$style.itemInner">A.放入清水中，新鲜的鸡蛋会沉下去，反之则会浮上来</div>
            <img :class="$style.panduan" src="../assets/images/w_dui.png">
          </div>
        </div>
        <div :class="$style.item">
          <div :class="$style.itemWrap">
            <div :class="$style.itemInner">A.放入清水中，新鲜的鸡蛋会沉下去，反之则会浮上来</div>
            <img :class="$style.panduan" src="../assets/images/w_dui.png">
          </div>
        </div>
        <div :class="$style.item">
          <div :class="$style.itemWrap">
            <div :class="$style.itemInner">A.放入清水中，新鲜的鸡蛋会沉下去，反之则会浮上来</div>
            <img :class="$style.panduan" src="../assets/images/w_cuo.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Answer',
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
  watch: {
  },
};
</script>
<style lang="less" module>
  .wrap{
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url('../assets/images/w_answerBg.jpg');
    background-repeat: no-repeat;
    background-size:100%;
    background-position: 0 bottom;
    .header{
      background-image: url('../assets/images/w_answerHeader.png');
      background-repeat: no-repeat;
      background-size:100%;
      width: 12rem;
      margin: 0.4rem auto 0.3rem;
      height: 2.5rem;
      font-size: 1rem;
      line-height: 3rem;
      text-align: center;
      color: #ffffff;
      text-shadow:#222 2px 0 0,#222 0 1px 0,#222 -1px 0 0,#222 0 -1px 0;
    }
    .problem{
      width: 14rem;
      margin: 0 auto;
      background: #ffe01b;
      border: 0.1rem solid #555555;
      border-radius: 2rem;
      padding: 0.3rem 1rem;
      font-size: 1rem;
      color: #eb4311;
      box-shadow: -0.3rem 0.2rem 0 rgba(255, 128, 4, 0.6);
    }
    .answer{
      background-color: #fff9e3;
      border: 0.1rem solid #7d6b35;
      width: 14rem;
      margin: 0.6rem auto;
      border-radius: 1.6rem;
      position: relative;
      .w_luobo{
        position: absolute;
        bottom: -0.4rem;
        right: -0.4rem;
        width: 2rem;
      }
      .w_mogu{
        position: absolute;
        top: 3rem;
        left: -0.8rem;
        width: 1.6rem;
      }
      .item{
        .itemWrap{
          width: 11rem;
          margin: 0.5rem auto;
          border-radius: 2rem;
          box-shadow: -0.23rem 0.2rem 0 rgba(255, 224, 27, 0.6);
          position: relative;
        }
        .itemInner{
          background-image: url('../assets/images/w_itemBg.jpg');
          padding: 0.3rem 0.7rem;
          border-radius: 2rem;
          color: #5b5b5e;
          font-size: 0.7rem;
          border: 0.06rem solid #555555;
          box-shadow:0.1rem -0.1rem 0.1rem rgba(0, 0, 0, 0.4) inset;
        }
        .panduan{
          position: absolute;
          top: 0;
          right: -1rem;
          top: -0.2rem;
          width: 2.6rem;
        }
      }
    }
  }
</style>
