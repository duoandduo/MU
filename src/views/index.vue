<template>
  <v-app>
    <v-app-bar height="80" app color="#000" dark class="top_bar">
      <div class="topBar d-flex align-center">
        <div class="d-flex align-center " >
          <v-img
            @click="toPage('/home')"
            alt="Vuetify Logo"
            class="shrink mr-6"
            contain
            src="../assets/img/logo.png"
            transition="scale-transition"
            width="70"
          />
          <span class="mr-2" @click="toPage('/Shop/Home')"><i class="iconfont icon-iconfontshop  mr-2"></i>商城</span>
          <span class="mr-2" @click="toPage('/freeplay')"><i class="iconfont icon-game  mr-2"></i>试玩</span>
          <span class="mr-2" @click="toPage('/my')"><i class="iconfont icon-me mr-2"></i>我的</span>
        </div>
        <v-spacer></v-spacer>
        <!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>/ -->
        <span class="mr-2">请登录</span>
        <span class="mr-2">帮助中心</span>
        <span class="mr-2"><i class="iconfont icon-kefu  mr-2"></i>在线客服</span>
        <span class="mr-2"><v-btn color="#f2952e">下载客户端</v-btn></span> 
      </div>
    </v-app-bar>
    <v-main>
      <NavMenu></NavMenu>
      <div class="main">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { common } from '../components/mixins/public'
import NavMenu from "@/views/Nav/nav";

  export default {
    name: "Index",
    mixins:[common],
  components: { NavMenu },
    data() {
      return {
        
      }
    },
    methods: {
      // toPage(url) {
      //   this.$router.push(url)
      // }
    }
  } 
</script>

<style lang="scss" scoped>
.shrink {
  cursor: pointer;
}
.top_bar {
  border-top: 2px solid #e4c281;
  border-bottom: 2px solid #e4c281;
  span {
    cursor: pointer;
  }
}
.main {
  min-height: 100%;
  background: url('../assets/img/bg-94b7f6b3.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.topBar{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>