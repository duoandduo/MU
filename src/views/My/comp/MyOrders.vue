<template>
  <div>
    <noAuth v-if="!isLogin" />
    <template v-if="isLogin" >
      orders
    </template>
  </div>
</template>

<script>
export default {
  name: 'MyOrders',
  data() {
    return {
      
    }
  },
}
</script>

<style>

</style>