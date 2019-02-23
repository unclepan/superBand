<template>
  <div :class="$style.wrap">
    <!-- <div :class="$style['page-01']">
      <img :class="$style.img01" src="../assets/images/img-2019-2-22/jinru-01.png">
      <div :class="$style.img02">12</div>
    </div> -->
    <div :class="$style['page-02']">
        <div :class="$style.top">
            <div :class="$style.left">
                <img  src="../assets/images/img-2019-2-22/xuanze-01.png">
            </div>
            <div :class="$style.right">
                <img src="../assets/images/img-2019-2-22/xuanze-03.png">
                <div>
                    <img src="../assets/images/img-2019-2-22/xuanze-02.png">
                    <div>
                        <span>1111</span>
                        <span>1111</span>
                        <span>1111</span>
                        <span>1111</span>
                    </div>
                </div>
                <img src="../assets/images/img-2019-2-22/xuanze-04.png">
            </div>
        </div>
        <img :class="$style.bottom" src="../assets/images/img-2019-2-22/xuanze-05.png">
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
      };
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
      .top{
          margin: 0 auto;
          width: 20rem;
          display: flex;
          justify-content: space-between;
        .left{
            width: 8rem; 
            img{
                width: 100%;
            }
        } 
        .right{
            width: 8rem;
        }
      }
      
  }
}
</style>
