<template>
  <div class="mu-mygames">
    <noAuth v-if="!isLogin" />
    <template v-if="isLogin" >
      <div class="mu-mygames-topbar">
        <v-btn
          class="mu-mygames-topbar-btn"
          width="200"
          height="100"
          dark
          color="primary"
        >
          <v-icon dark>
            mdi-controller-classic
          </v-icon>
          <span class="mu-mygames-topbar-title">我的游戏</span >
        </v-btn>
        <v-btn
          class="mu-mygames-topbar-btn"
          width="200"
          height="100"
          dark
          color="primary"
        >
          <v-icon dark>
            mdi-controller-classic
          </v-icon>
          <span class="mu-mygames-topbar-title">我的VIP游戏</span >
        </v-btn
        >
        <v-btn
          class="mu-mygames-topbar-btn"
          width="200"
          height="100"
          dark
          color="primary"
        >
          <v-icon dark>
            mdi-controller-classic
          </v-icon>
          <span class="mu-mygames-topbar-title">我的心愿单</span >
        </v-btn>
        <v-btn
          class="mu-mygames-topbar-btn"
          width="200"
          height="100"
          dark
          color="primary"
        >
          <v-icon dark>
            mdi-controller-classic
          </v-icon>
          <span class="mu-mygames-topbar-title">更多</span >
        </v-btn>
      </div>
      <GameList class="mu-mygames-gamelist" :games-data="[1, 2, 3]" />
      <div class="mu-mygames-input">
        <!-- <v-text-field label="Another input"></v-text-field> -->
      </div>
    </template>
  </div>
</template>

<script>
import noAuth from './noAuth';
import GameList from './GameList';
import { mapGetters } from 'vuex';

export default {
  name: 'MyGames',
  components: {
    noAuth,
    GameList
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

<style lang="scss" scoped>
$r: mu-mygames;

.#{$r} {
  &-topbar {
    padding: 30px 50px;
    &-btn {
      margin-left: 10px;
      margin-bottom: 10px;
    }
    &-title {
      margin-left: 5px;
    }
  }
  &-gamelist {
    margin: 10px 60px;
    min-height: 480px;
    background-color: #E6F7FF;
  }
}

</style>