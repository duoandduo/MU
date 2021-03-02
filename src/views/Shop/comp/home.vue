<template>
  <div class="home main_content">
    <div class="carousel_box">
      <v-carousel v-model="carouselIndex" cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in gamebCarousel" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height pa-0 ma-0" align="center" justify="center">
              <div class="display-3">
                <img :src="slide.url" alt="" srcset="">
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <div class="carouselInfo">
        <ul>
          <li v-for="(item, i) in gamebCarousel" :class="{activeIndex:carouselIndex==i}" :key="i"></li>
        </ul>
        <div class="title mt-5">{{gamebCarousel[carouselIndex].title}}</div>
        <div v-if="gamebCarousel[carouselIndex].sign">
          <v-chip color="#888" v-for="(item,i) in gamebCarousel[carouselIndex].sign" :key="i" class="mr-2 my-5" small> {{item}} </v-chip>
        </div>
        <div class="content">{{gamebCarousel[carouselIndex].describe}}</div>
      </div>
    </div>
    <div class="vip_buy d-flex">
      <div class="tag"></div>
      <div>MU 会员</div>
      <div>全场游戏免费玩，购买商品折上减现 <span>等超豪特权等你来！</span><br><span>更多会员特权</span></div>
      <div><span>￥98/年</span><br><span>低至0.27元/天</span></div>
    </div>
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
        carouselIndex: 0,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        gamebCarousel: [
        {
          title: '赛博朋克2077',
          sign: ['游戏', '射击', '剧情'],
          describe: '《赛博朋克 2077》是一款开放世界游戏，故事发生在夜之城，权力更迭和身体改造是这里不变的主题。扮演一名野心勃勃的雇佣兵：V，追寻一种独一无二的植入体——获得永生的关键。自定义角色义体、技能和玩法，探索包罗万象的城市。',
          price: '99.99',
          url: 'https://files.cdn.namejin.com/demon/35c017548f1a4acd8ec4139313a8966d.png?x-oss-process=image/resize,m_fill,h_504,w_896'
        },
        {
          title: '《杀手3》',
          sign: ['游戏', '射击', '剧情'],
          describe: '《黑色行動冷戰》將帶領玩家來到1980年代，並深入探索冷戰時期危機四伏的政治局勢。扣人心弦的單人劇情戰役將帶來史無前例的體驗，玩家會親眼見證歷史中的重要人物與殘酷的真相，並在東柏林、越南、土耳其和蘇聯國家安全委員會總部等世界各地的重要地點展開',
          price: '99.99',
          url: 'https://files.cdn.namejin.com/demon/eeb3b6833ba94969ad66f3c586c4facc.jpg?x-oss-process=image/resize,m_fill,h_504,w_896'
        },
        {
          title: '赛博朋克2077',
          sign: ['游戏', '射击', '剧情'],
          describe: '《赛博朋克 2077》是一款开放世界游戏，故事发生在夜之城，权力更迭和身体改造是这里不变的主题。扮演一名野心勃勃的雇佣兵：V，追寻一种独一无二的植入体——获得永生的关键。自定义角色义体、技能和玩法，探索包罗万象的城市。',
          price: '99.99',
          url: 'https://files.cdn.namejin.com/demon/35c017548f1a4acd8ec4139313a8966d.png?x-oss-process=image/resize,m_fill,h_504,w_896'
        },
        {
          title: '赛博朋克2077',
          sign: ['游戏', '射击', '剧情'],
          describe: '《赛博朋克 2077》是一款开放世界游戏，故事发生在夜之城，权力更迭和身体改造是这里不变的主题。扮演一名野心勃勃的雇佣兵：V，追寻一种独一无二的植入体——获得永生的关键。自定义角色义体、技能和玩法，探索包罗万象的城市。',
          price: '99.99',
          url: 'https://files.cdn.namejin.com/demon/35c017548f1a4acd8ec4139313a8966d.png?x-oss-process=image/resize,m_fill,h_504,w_896'
        },
        {
          title: '赛博朋克2077',
          sign: ['游戏', '射击', '剧情'],
          describe: '《赛博朋克 2077》是一款开放世界游戏，故事发生在夜之城，权力更迭和身体改造是这里不变的主题。扮演一名野心勃勃的雇佣兵：V，追寻一种独一无二的植入体——获得永生的关键。自定义角色义体、技能和玩法，探索包罗万象的城市。',
          price: '99.99',
          url: 'https://files.cdn.namejin.com/demon/35c017548f1a4acd8ec4139313a8966d.png?x-oss-process=image/resize,m_fill,h_504,w_896'
        }, ],
      }
    },
    components: {
      goodsCard
    }
  }
</script>

<style lang='scss' scoped>
  .home {
    background:url('../../../assets/img/bg-94b7f6b3.png') repeat;
    background-size: 100%;
    .good_card_title {
      height: 100px;
      line-height: 100px;
      font-size: 18px;
      font-weight: 600;
    }

    .carousel_box {
      display: flex;
      background: #2a2a2a;

      img {
        width: 100%;
        height: 100%;
      }

      .carouselInfo {
        width: 500px;
        height: 400px;
        padding: 20px;
        color: #fff;
        .title{
          font-size: 26px !important;
        }
        .content {
          color: #888;
        }

        ul {
          display: flex;
          justify-content: flex-end;

          li {
            list-style: none;
            margin-right: 20px;
            height: 5px;
            width: 5px;
            background: #fff;
            border-radius: 50%;
            background: #585858;
            transition: all .3s;
          }

          .activeIndex {
            background: #fff;
          }
        }
      }
    }
    .vip_buy{
      position: relative;
      background: url('../../../assets/img/banner-vip.png'); 
      background-size: 100%;
      height: 120px;
      margin-top: 40px;
      cursor: pointer;
      .tag{
        position: absolute;
        top: 0;
        right: 0;
        background:url('../../../assets/img/timeTag.png');
        background-size: 100%;
        height: 64px;
        width: 64px;
      }
    }
  }
</style>