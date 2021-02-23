<template>
  <div class='mu-noauth'>
    <v-icon x-large color="orange darken-2" class="mu-noauth-icon" >info</v-icon>
    <p class="mu-noauth-span">您还未登录,请您前往登录</p>
    <v-btn class="mu-noauth-btn" color="orange darken-3" @click="handleLogin">前往登录</v-btn>
    <v-dialog v-model="LoginDialogVisible" width="400">
      <Login />
    </v-dialog>
  </div>
</template>

<script>
import Login from '@/components/Login';

export default {
  name: 'noAuth',
  components: {
    Login
  },
  data() {
    return {
      LoginDialogVisible: false
    }
  },
  methods: {
    handleLogin() {
      this.LoginDialogVisible = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("../../../assets/scss/common.scss");

$r: mu-noauth;

.#{$r} {
  text-align: center;
  &-icon {
    display: block;
    margin-top: 200px;
    margin-bottom: 20px;
  }
  &-span {
    opacity: .6;
  }
  &-btn {
    color: #FFF;
  }
}

</style>