<template>
  <v-card class="mx-auto goodsCard" width="286">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg" :aspect-ratio="16/9">
    </v-img>
    <v-card-text class="py-2">
      <div class="mb-2">
        赛博朋克2077
      </div>
    </v-card-text>
    <v-card-text class="py-2">
      <v-chip class="mr-2" small>
        试玩
      </v-chip>
      <v-chip class="mr-2" small>
        游戏账号
      </v-chip>
    </v-card-text>
    <v-divider class="mt-2 mx-4"></v-divider>
    <v-card-text class="py-2">
      <div class="mb-2">
        ￥<span class="price">223.86</span>
        <span class="discount">￥200</span>
        <span class="discountNum">7.5折</span>
        <span class="sellNum">销量：6257</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: {
      price: {
        type: Number,
        defalut: 0,
      },
      lists: {
        type: Object,
        defalut: {},
      }
    },
  }
</script>

<style lang='scss'>
  .goodsCard {

    .gameImg {
      width: 262px;
      height: 126px;
    }
    .price{
        font-size: ;
    }

    .discount {
      text-decoration: line-through;
    }

    .discountNum {
        display: inline-block;
      text-align: center;
      width: 50px;
      height: 20px;
      line-height: 20px; 
      background: linear-gradient(90deg, rgb(255, 158, 74) 0%, rgb(255, 59, 78) 100%);
      border-radius: 8px 0px 0px;
      font-size: 12px; 
      color: rgb(255, 255, 255);
      margin-left: 18px;
    }
  }
</style>