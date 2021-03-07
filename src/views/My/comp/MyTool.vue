<template>
  <div class="mu-mytool">
    <div class="mu-mytool-platform">
      <div class="mu-mytool-title">游戏平台</div>
      <div class="mu-mytool-platform-content">
        <v-card
          class="mu-mytool-card"
          width="220"
          height="70"
      >
      <div class="mu-mytool-card-icon" style="background: #EA7249">
        <v-icon x-large color="#FFF">mdi-steam</v-icon >
      </div >
      <div class="mu-mytool-card-content">
        <div class="mu-mytool-card-content-title">Steam平台下载</div >
        <a class="mu-mytool-card-content-link" style="color: #EA7249" href="#">立即下载</a >
      </div >
      </v-card>
      <v-card
          class="mu-mytool-card"
          width="220"
          height="70"
      >
      <div class="mu-mytool-card-icon" style="background: #52EFEF">
        <v-icon x-large color="#FFF">mdi-origin</v-icon >
      </div >
      <div class="mu-mytool-card-content">
        <div class="mu-mytool-card-content-title">Origin</div >
        <a class="mu-mytool-card-content-link" style="color: #52EFEF" href="#">立即下载</a >
      </div >
      </v-card>
      <v-card
          class="mu-mytool-card"
          width="220"
          height="70"
      >
      <div class="mu-mytool-card-icon" style="background: #FD9D4F">
        <v-icon x-large color="#FFF">mdi-ubisoft</v-icon >
      </div >
      <div class="mu-mytool-card-content">
        <div class="mu-mytool-card-content-title">Uplay平台下载</div >
        <a class="mu-mytool-card-content-link" style="color: #FD9D4F" href="#">立即下载</a >
      </div >
      </v-card>
      <v-card
          class="mu-mytool-card"
          width="220"
          height="70"
      >
      <div class="mu-mytool-card-icon" style="background: #954DD2">
        <v-icon x-large color="#FFF">epicgames</v-icon >
      </div >
      <div class="mu-mytool-card-content">
        <div class="mu-mytool-card-content-title">Epic平台下载</div >
        <a class="mu-mytool-card-content-link" style="color: #954DD2" href="#">立即下载</a >
      </div >
      </v-card>
      <v-card
          class="mu-mytool-card"
          width="220"
          height="70"
      >
      <div class="mu-mytool-card-icon" style="background: #24A9F9">
        <v-icon x-large color="#FFF">mdi-blizzard</v-icon >
      </div >
      <div class="mu-mytool-card-content">
        <div class="mu-mytool-card-content-title">Blizzard平台下载</div >
        <a class="mu-mytool-card-content-link" style="color: #24A9F9" href="#">立即下载</a >
      </div >
      </v-card>
      </div>
    </div >
    <div class="mu-mytool-toollist">
      <div class="mu-mytool-title">辅助工具合集</div>
      <div class="mu-mytool-toollist-content"></div>
    </div >
  </div >
</template>

<script>
const IMG_SRC = "https://files.zuhaohao.com/demon/50537d197eda4e8598a440a8435a7944.png?x-oss-process=image/resize,m_lfit,h_220,w_1960";

export default {
  name: 'MyTool',
  data: () => ({
    IMG_SRC: IMG_SRC
  })
}
</script>

<style lang='scss' scoped>
$r: mu-mytool;

.#{$r} {
  padding: 20px;
  &-platform {
    &-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-around;
      margin-top: 20px;
    }
  }
  &-card {
    display: flex;
    margin-right: 10px;
    margin-bottom: 20px;
    &-icon {
      width: 70px;
      text-align: center;
      line-height: 70px;
    }
    &-content {
      padding: 12px 15px;
      &-title {
        font-size: 14px;
        margin-bottom: 8px;
      }
      &-link {
        font-size: 14px;
        text-decoration: none;
      }
    }
  }
}

</style>