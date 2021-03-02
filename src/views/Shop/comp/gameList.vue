<template>
  <div class="gameList">
    <div class="pageTitle">
      <v-breadcrumbs color="#000" :items="items"></v-breadcrumbs>
    </div>
    <div class="choose" v-if="cardType == 1">
      <div
        class="filterItem d-flex"
        v-for="(item, index) in filterList"
        :key="index"
      >
        <div class="choose_title d-flex">{{ item.title }}</div>
        <ul class="d-flex">
          <li
            :class="{ active: sub.active }"
            v-for="(sub, j) in item.list"
            :key="j"
          >
            {{ sub.title }}
          </li>
        </ul>
      </div>
    </div>
    <div class="choose" style="min-height: auto" v-if="cardType == 2">
      <div class="filterItem d-flex">
        <ul class="d-flex">
          <li class="active">热销商品</li>
          <li class="">最新发布</li>
        </ul>
      </div>
    </div>
    <div class="filterSign">
      <v-chip
        small
        v-if="chip2"
        class="ma-2"
        close
        color="red"
        text-color="white"
        @click:close="chip2 = false"
      >
        Steam
      </v-chip>
    </div>
    <div class="mt-4">
      <v-row v-if="cardType == 1">
        <goods-card v-for="i in 14" :key="i"></goods-card>
      </v-row>
      <v-row v-if="cardType == 2">
        <goods-card-spelic v-for="i in 17" :key="i"></goods-card-spelic>
      </v-row>
    </div>
  </div>
</template>

<script>
import goodsCard from "../../../components/goodsCard.vue";
import GoodsCardSpelic from "../../../components/goodsCardSpelic.vue";
export default {
  components: { goodsCard, GoodsCardSpelic },
  data: () => ({
    cardType: 1,
    chip2: true,
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
    filterList: [
      {
        title: "平台：",
        list: [
          { title: "全部", active: true },
          { title: "Steam" },
          { title: "Epic" },
          { title: "Uplay" },
          { title: "Origin" },
          { title: "Blizzard" },
          { title: "Riot" },
        ],
      },
      {
        title: "标签：",
        list: [
          { title: "全部", active: true },
          { title: "独立" },
          { title: "动作" },
          { title: "冒险" },
          { title: "角色扮演" },
          { title: "策略" },
          { title: "休闲" },
          { title: "模拟" },
          { title: "多人" },
          { title: "单人" },
        ],
      },
    ],
  }),
  watch: {
    "$route"() {
      if (["/Shop/GameList"].includes(this.$route.path)) {
        this.cardType = 1;
      } else {
        this.cardType = 2;
      }
    },
  },
  created() {},
};
</script>

<style lang='scss' scoped>
.gameList {
  .pageTitle {
  }
  .choose {
    width: 1200px;
    min-height: 98px;
    padding: 20px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(234, 234, 234);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .choose_title {
      width: 70px;
      font-size: 14px;
      color: rgb(136, 136, 136);
      line-height: 20px;
      margin-right: 10px;
    }
    ul {
      li {
        min-width: 28px;
        font-size: 14px;
        color: rgb(17, 17, 17);
        line-height: 20px;
        margin-right: 20px;
        cursor: pointer;
      }
    }
    .active {
      color: #cf2524;
    }
  }
  .v-breadcrumbs__item {
    color: #000 !important;
  }
  .v-breadcrumbs {
    padding: 8px 12px;
  }
}
</style>