<template>
  <div class="home">
    <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              {{ slide }} Slide
          </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="good_card_title">热销商品</div>
    <v-row justify="space-around">
      <goodsCard v-for="(i) in 4" :key="i"></goodsCard>
    </v-row>
    <div class="good_card_title">特惠商品</div>
    <v-row justify="space-around">
      <goodsCard v-for="(i) in 4" :key="i"></goodsCard>
    </v-row>
  </div>
</template>

<script>
  import goodsCard from "@/components/goodsCard.vue";
  export default {
    data() {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
    components: {
      goodsCard
    }
  }
</script>

<style lang='scss' scoped>
  .home {
    .good_card_title {
        height: 100px;
        line-height: 100px;
        font-size: 18px;
        font-weight: 600;
    }
  }
</style>