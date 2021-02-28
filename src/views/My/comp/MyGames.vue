<template>
  <div class="mu-mygames">
    <noAuth v-if="!isLogin" />
    <template v-if="isLogin" >
      
    </template>
  </div>
</template>

<script>
import noAuth from './noAuth';
import { mapGetters } from 'vuex';

export default {
  name: 'MyGames',
  components: {
    noAuth
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'isLogin',
    ])
  },
  created() {
    
  },
}
</script>

<style>

</style>