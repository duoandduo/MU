<template>
  <div class="mu-mygames">
    <noAuth v-if="isLogin" />
  </div>
</template>

<script>
import noAuth from './noAuth';

export default {
  name: 'MyGames',
  components: {
    noAuth
  },
  data() {
    return {
      isLogin: false
    }
  },
  created() {
    
  },
}
</script>

<style>

</style>