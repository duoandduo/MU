<template>
  <v-card class="mx-auto goodsCard mb-4" width="286">
    <v-img
      src="https://files.zuhaohao.com/good/3a4c49a5d3784726b82917b1fd51dadb.jpg?x-oss-process=image/resize,m_lfit,h_264,x-oss-process=image/crop,w_264,h_264,g_center"
      :aspect-ratio="18 / 18"
    >
    </v-img>
    <v-card-text class="py-2">
      <div class="">赛博朋克2077</div>
    </v-card-text>
    <v-card-text class="py-2">
      <div class="mb-2">
        ￥<span class="price">223.86</span>
        <span class="discount">￥200</span>
        <span class="sellNum float-right">销量：6257</span>
      </div>
    </v-card-text>
    <v-card-text class="d-flex py-2">
      <span class="mr-3">满堂彩</span>
      <v-rating
        x-small
        v-model="rating"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="18"
      ></v-rating>
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
    },
  },
  data() {
    return {
      rating: 4,
    };
  },
};
</script>

<style lang='scss'>
.goodsCard {
  .gameImg {
    width: 262px;
    height: 126px;
  }
  .price {
    font-size: 18px;
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
    background: linear-gradient(
      90deg,
      rgb(255, 158, 74) 0%,
      rgb(255, 59, 78) 100%
    );
    border-radius: 8px 0px 0px;
    font-size: 12px;
    color: rgb(255, 255, 255);
    margin-left: 18px;
  }
}
</style>