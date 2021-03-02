<template>
  <v-app>
    <v-app-bar app color="#cf2524" dark class="top_bar">
      <div class="d-flex align-center">
        <v-img
          @click="toPage('/home')"
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <span class="mr-2" @click="toPage('/Shop/Home')">商城</span>
        <span class="mr-2" @click="toPage('/freeplay')">试玩</span>
        <span class="mr-2" @click="toPage('/my')">我的</span>
      </div>
      <v-spacer></v-spacer>
      <!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>/ -->
      <span class="mr-2">请登录</span>
      <span class="mr-2">帮助中心</span>
      <span class="mr-2">在线客服</span>
      <span class="mr-2">下载客户端</span>
      <!-- </v-btn> -->
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
</style>