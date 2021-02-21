<template>
  <div class="mu-my">
    <!-- <div class="mu-my-menu">
      <div class="mu-my-menu-item" v-for="(i, _i) in menuList" :key="_i">{{ i.routeTitle }}</div>
    </div> -->
    <v-card class="mu-my-left">
      <v-list>
        <v-list-item-group
        v-model="selectedItem"
        color="primary"
        >
          <v-list-item
            v-for="(item, index) in menuList"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.routeTitle"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-card class="mu-my-right"></v-card >
  </div>
</template>

<script>
export default {
  name: 'My',
  mounted() {
    
  },
  data() {
    return {
      isMobile: false,
      selectedItem: 0,
      menuList: [{ routeTitle: '我的游戏', url: '/My/Games', icon: 'game' }, { routeTitle: '我的订单', url: '/My/Games', icon: 'game' }, { routeTitle: '我的钱包', url: '/My/Games', icon: 'game' }, { routeTitle: '售后退款', url: '/My/Games', icon: 'game' }, { routeTitle: '激活码兑换', url: '/My/Games', icon: 'game' }, { routeTitle: '帮助中心', url: '/My/Games', icon: 'game' }, { routeTitle: '辅助工具', url: '/My/Games', icon: 'game' }, { routeTitle: '邀请有礼', url: '/My/Games', icon: 'game' }, ]
    }
  },
  methods: {
    replaceContent(url) {
      this.$router.replace(url);
    }
  }
}
</script>

<style lang="scss" scoped>
$r: mu-my;
$radix: 1 / 20 * 1rem;

@function pxToPem($px) {
  @return $px * $radix;
}

.#{$r} {
  display: flex;
  padding: 20px 50px;
  height: 100%;
  background-color: #F2F2F2;
  &-left {
    max-width: 200px;
    min-height: 100%;
  }
  &-right {
    flex: 1;
    margin-left: 10px;
    min-height: 100%;
  }
}

</style>