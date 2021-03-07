<template>
  <div class="mu-mygames">
    <noAuth v-if="!isLogin" />
    <template v-if="isLogin" >
      <div class="mu-mygames-topbar">
        <v-card
          class="mu-mygames-topbar-btn"
          width="300"
          height="120"
          dark
          color="primary"
        >
          <v-icon dark>
            mdi-controller-classic
          </v-icon>
          <span class="mu-mygames-topbar-title">会员专享</span >
          <span class="mu-mygames-topbar-title">(0)</span >
        </v-card>
        <v-card
          class="mu-mygames-topbar-btn"
          width="300"
          height="120"
          dark
          color="primary"
        >
          <v-icon dark>
            mdi-controller-classic
          </v-icon>
          <span class="mu-mygames-topbar-title">付费试玩</span >
          <span class="mu-mygames-topbar-title">(0)</span >
        </v-card
        >
        <v-card
          class="mu-mygames-topbar-btn"
          width="300"
          height="120"
          dark
          color="primary"
        >
          <v-icon dark>
            mdi-controller-classic
          </v-icon>
          <span class="mu-mygames-topbar-title">独享游戏</span >
          <span class="mu-mygames-topbar-title">(0)</span >
        </v-card>
      </div>
      <!-- <GameList class="mu-mygames-gamelist" :games-data="[1, 2, 3]" /> -->
      <div class="mu-mygames-input">
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="请输入游戏名称"
            placeholder="请输入游戏名称"
            solo
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-btn color="primary" height="47">搜索</v-btn >
        </v-col>
      </div>
      <div class="mu-mygames-list">
        <v-treeview
          activatable
          :items="items"
        ></v-treeview>
      </div>
    </template>
  </div>
</template>

<script>
import noAuth from './noAuth';
// import GameList from './GameList';
import { mapGetters } from 'vuex';

export default {
  name: 'MyGames',
  components: {
    noAuth,
    // GameList
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: '会员专享 :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: '付费试玩 :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: '独享游戏 :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
      ],
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
  height: 100%;
  overflow: auto;
  &-topbar {
    padding: 30px 50px;
    &-btn {
      display: inline-block;
      box-sizing: border-box;
      padding-top: 50px;
      text-align: center;
      margin-left: 10px;
      margin-bottom: 10px;
    }
    &-title {
      margin-left: 5px;
      cursor: default;
    }
  }
  // &-gamelist {
  //   margin: 10px 60px;
  //   min-height: 480px;
  //   background-color: #E6F7FF;
  // }
  &-input {
    display: flex;
    padding: 20px 50px;
  }
  &-list {
    padding: 0 50px;
  }
}

</style>