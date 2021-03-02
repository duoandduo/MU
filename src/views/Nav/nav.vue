<template>
  <div class="topMenu d-flex align-center">
    <span class="current d-flex align-center justify-center">热门游戏</span>
    <ul class="d-flex align-center pa-0">
      <li
        @click="toPage(item.path)"
        :class="{ active: activeKey == item.key }"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      activeKey:'home',
      list: [
        {
          title: "首页",
          path: "Home",
          key:'home'
        },
        {
          title: "电脑游戏",
          path: "GameList",
          key:'gameList'
        },
        {
          title: "手机游戏",
          path: "Phonegamelist",
          key:'phonegamelist'
        },
        {
          title: "主机游戏",
          path: "Localgamelist",
          key:'localgamelist'
        },
        {
          title: "充值中心",
          path: "cdk",
          key:'cdk'
        },
      ],
      seachKey: "111",
    };
  },
  watch:{
    '$route' (){
      this.activeKey=this.$route.meta.key
    }
  }, 
  methods: {
    toPage(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style lang='scss' scoped>
.topMenu {
  max-width: 1200px;
  margin: 0 auto;
  height: 48px;
  .current {
    //   background: #ffb401;
    background: linear-gradient(90deg, #ff9e4a 0%, #ff3b4e 100%);
    height: 100%;
    width: 210px;
    font-weight: 600;
  }
  ul,
  li {
    height: 100%;
    font-size: 14px;
  }
  li {
    line-height: 48px;
    margin: 0 16px;
    transition: all 0.5s;
    cursor: pointer;
  }
  li:hover {
    color: #cf2524;
    font-weight: 600;
  }
  .active {
    color: #cf2524;
    font-weight: 600;
  }
}
</style>