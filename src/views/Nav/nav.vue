<template>
  <div class="topMenu d-flex align-center">
    <span class="current d-flex align-center justify-center">热门游戏</span>
    <ul class="d-flex align-center pa-0">
      <li class="d-flex flex_full align-center" v-for="(item, index) in list" :key="index">{{ item.title }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "首页",
          path: "",
        },
        {
          title: "电脑游戏",
          path: "",
        },
        {
          title: "手机游戏",
          path: "",
        },
        {
          title: "主机游戏",
          path: "",
        },
        {
          title: "充值中心",
          path: "",
        },
      ],
      seachKey: "111",
    };
  },
};
</script>

<style lang='scss' scoped>
.topMenu {
  max-width: 1200px;
  margin: 0 auto;
  height: 48px;
  .current{
      background: #ffb401;
      height: 100%;
      width: 210px;
      font-weight: 600; 
  }
  ul,li{
      height: 100%; 
  }
}
</style>