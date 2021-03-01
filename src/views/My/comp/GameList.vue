<template>
  <v-card class="mu-gamelist">
    <div class="mu-gamelist-title">{{ title }}</div>
    <div class="mu-gamelist-content">
      <v-card class="mu-gamelist-content-item" v-for="(i, _i) in gamesData" :key="_i">
        <v-img :src="IMG_Src" width="300" height="180"></v-img>
        <div class="mu-gamelist-content-item-footer">
          
        </div>
      </v-card>
    </div>
  </v-card >
</template>

<script>
const IMG_Src = "https://files.cdn.namejin.com/demon/35c017548f1a4acd8ec4139313a8966d.png?x-oss-process=image/resize,m_fill,h_504,w_896"

export default {
  name: 'GameList',
  props: {
    title: {
      type: String,
      default: 'Game Type'
    },
    gamesData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      IMG_Src: IMG_Src
    }
  }
}
</script>

<style lang="scss" scoped>
$r: mu-gamelist;

.#{$r} {
  padding: 20px 40px;
  &-title {
    font-size: 20px;
    color: #CD282B;
  }
  &-content {
    display: flex;
    margin-top: 20px;
    justify-content: center;
    &-item {
      min-width: 200px;
      min-height: 250px;
      margin-left: 15px;
    }
  }
}
</style>
