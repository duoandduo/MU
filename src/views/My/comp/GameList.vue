<template>
  <v-card class="mu-gamelist">
    <div class="mu-gamelist-title">{{ title }}</div>
    <div class="mu-gamelist-content">
      <v-card class="mu-gamelist-content-item" v-for="(i, _i) in gamesData" :key="_i"></v-card>
    </div>
  </v-card >
</template>

<script>
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
    &-item {
      min-width: 200px;
      min-height: 250px;
      margin-left: 15px;
    }
  }
}
</style>
