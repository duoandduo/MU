<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
        <span class="mr-2">商城</span>
        <span class="mr-2">试玩</span>
        <span class="mr-2" @click="toMy">我的</span> 
      </div>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">请登录</span>
        <span class="mr-2">帮助中心</span>
        <span class="mr-2">在线客服</span>
        <span class="mr-2">下载客户端</span> 
      </v-btn>
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

    },
    methods: {
      toMy() {
        this.$router.push('/My')
      }
    }
  }
</script>

<style>

</style>