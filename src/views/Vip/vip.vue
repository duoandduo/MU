<template>
  <div class="vip">
    <div class="imgScroll" id="banner-inner">
      <div class="scroll-bg" id="scroll-1"><img
          src="https://steam.cdn.namejin.com/store/gog2/static/banner.b1eb1fe3.png" alt=""></div>
      <div class="scroll-bg" id="scroll-2"><img
          src="https://steam.cdn.namejin.com/store/gog2/static/banner.b1eb1fe3.png" alt=""></div>
      <div class="scroll-bg-overlay"></div>
      <div class="mask"></div>
    </div>
    <div>
    </div>
    <div class="title">
      <img src="https://steam.cdn.namejin.com/store/gog2/static/wenzi.8ad6020a.png" alt="" srcset="" />
    </div>
    <div class="vip_card">
      <div class="vip_card_item"></div>
      <div class="vip_card_item"></div>
      <div class="vip_card_item"></div>
    </div>
    <div class="benefit-icon-box">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <img src="https://steam.cdn.namejin.com/store/gog2/static/benefit2.d0e16dac.png" alt="" />
    </div>
    <div class="free_title">游戏免费玩</div>
    <div class="filter_game">
        <v-chip  v-for="(item,index) in list" :key="index">{{item}}</v-chip>
    </div>
  </div>
</template>

<script>
  export default {
      data(){
          return {
              list:['全部','Steam','Epic','Uplay','Origin','Blizaard','Riot']
          }
      }
  };
</script>

<style lang='scss' scoped>
  .vip {
    background: #000;
    overflow: hidden;

    #banner-inner {
      width: 100%;
      overflow: hidden;
      position: absolute;
      top: 0;
      height: 560px;
      .mask{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.6);
      }
    }

    .scroll-bg {
      width: 2561px;
      height: 612px;
      position: absolute;
      left: 50%;
      top: 0;
      margin-left: -1280px;

      img {
        height: 612px;
        width: 100%;
      }
    }

    #scroll-1 {
      -ms-transform: translateX(0);
      transform: translateX(0);
      -webkit-transform: translateX(0);
      animation: scrollBackground1 80s linear infinite;
      -webkit-animation: scrollBackground1 80s linear infinite;
    }

    #scroll-2 {
      -ms-transform: translateX(2560px);
      transform: translateX(2560px);
      -webkit-transform: translateX(2560px);
      animation: scrollBackground2 80s linear infinite;
      -webkit-animation: scrollBackground2 80s linear infinite;
    }

    @keyframes scrollBackground1 {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-2560px);
      }
    }

    @keyframes scrollBackground2 {
      0% {
        transform: translateX(2560px);
      }

      100% {
        transform: translateX(0);
      }
    }

    .title {
      width: 1018px;
      height: 128px;
      margin: 0 auto;
      margin-top: 115px;
      position: relative;
    }

    .vip_card {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;

      .vip_card_item {
        margin-top: 80px;
        position: relative;
        cursor: pointer;
        width: 372px;
        height: 202px;
        background-image: url("https://steam.cdn.namejin.com/store/gog2/static/membercard.369bcf58.png");
        background-repeat: no-repeat;
        transition: all 0.3s;
        //   -ms-transform: scale(0.922);
        transform: scale(0.85);

        &:nth-child(2) {
          transform: scale(1);
        }
      }
    }

    .benefit-icon-box {
      text-align: center;
      margin-top: 100px;

      ul {
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        cursor: pointer;
        transform: scale(0.9);

        li {
          background: url(https://steam.cdn.namejin.com/store/gog2/static/benefit.abc4b20a.png) 0 no-repeat;
          width: 166px;
          height: 192px;
          margin-right: 28px;
          transition: all 0.3s;

          // transform: scale(0.9);
          &:nth-child(2) {
            background-position: -194px;
          }

          &:nth-child(3) {
            background-position: -387px;
          }

          &:nth-child(4) {
            background-position: -581px;
          }

          &:nth-child(5) {
            background-position: -774px;
          }

          &:nth-child(5) {
            background-position: -968px;
          }

          &:hover {
            transform: translateY(-4px);

          }
        }
      }
    }
  }
</style>