<template>
  <v-app>
    <v-app-bar app color="#cf2524" dark class="top_bar">
      <div class="d-flex align-center">
        <v-img @click="toPage('/home')" alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
        <span class="mr-2" @click="toPage('/shop')">商城</span>
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
      <router-view></router-view>
    </v-main >
  </v-app>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        
      }
    },
    methods: {
      toPage(url) {
        this.$router.push(url)
      }
    }
  }
</script>

<style lang="scss" scoped>
.shrink{
  cursor: pointer;
}
.top_bar{
  border-top: 2px solid #e4c281;
  border-bottom: 2px solid #e4c281;
  span {
    cursor: pointer;
  }
}
</style>