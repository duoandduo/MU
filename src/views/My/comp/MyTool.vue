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
      <div class="mu-mytool-toollist-content">
        <v-card
          class="mu-mytool-toollist-left"
        >
          <a href="#" v-for="i in 5" :key="i" class="mu-mytool-toollist-link">某个特殊的辅助工具 {{ i }} 2020-03-0{{ i }} 点击查看</a>
        </v-card>
        <v-card
          class="mu-mytool-toollist-right"
        >
          <div class="mu-mytool-toollist-card">
            <div class="mu-mytool-toollist-card-icon" style="background: #5DA9F6">
              <v-icon x-large color="#FFF">mdi-tools</v-icon >
            </div >
            <div class="mu-mytool-toollist-card-content">
              <div class="mu-mytool-toollist-card-title">游戏组件修复</div >
              <div class="mu-mytool-toollist-card-description">检测修复游戏环境</div >
            </div>
            <v-btn class="mu-mytool-toollist-card-btn" color="primary" small>一键修复</v-btn>
          </div >
        </v-card>
      </div>
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
  &-toollist {
    &-content {
      display: flex;
    }
    &-link {
      display: block;
      text-decoration: none;
      color: #000;
      padding: 10px;
      border-bottom: 1px solid #F3F3F3;
      &:hover {
        background-color: #E3E3E3;
        color: #FFF;
      }
    }
    &-left {
      flex: 1;
      min-width: 500px;
      min-height: 360px;
      margin-top: 10px;
      padding: 20px;
    }
    &-right {
      margin-left: 20px;
      width: 300px;
      height: 360px;
      padding: 20px 10px;
      margin-top: 10px;
    }
    &-card {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #E4E4E4;
      padding-bottom: 10px;
      &-icon {
        width: 70px;
        height: 70px;
        line-height: 4;
        text-align: center;
        border-radius: 35px;
      }
      &-title {
        font-size: 15px;
        font-weight: bold;
      }
      &-description {
        margin-top: 12px;
        font-size: 12px;
      }
      &-btn {
        margin-top: 18px;
      }
    }
  }
}

</style>