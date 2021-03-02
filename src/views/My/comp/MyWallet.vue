<template>
  <div>
    <noAuth v-if="!isLogin" />
    <template v-if="isLogin" >
      wallet
    </template>
  </div>
</template>

<script>
export default {
  name: 'MyWallet',
  data() {
    return {
      
    }
  },
}
</script>

<style>

</style>