<template>
  <div class="mu-myhelp">
    <div class="mu-myhelp-left">
      <v-treeview :items="items" :open="initiallyOpen"></v-treeview>
    </div>
    <div class="mu-myhelp-right">
      <div class='mu-myhelp-right-item'>
        <div class="mu-myhelp-icon">
          <v-icon class="mu-myhelp-icon-item">
            mdi-account
          </v-icon >
        </div>
        <div class="mu-myhelp-right-content">
          <div class="mu-myhelp-right-content-title">人工在线</div >
          <div class="mu-myhelp-right-content-message">上午10.00~晚上24.00</div >
          <v-btn class="mu-myhelp-right-content-btn" color="#F2952E">联系客服</v-btn >
        </div>
      </div>
      <div class='mu-myhelp-right-item'>
        <div class="mu-myhelp-icon">
          <v-icon class="mu-myhelp-icon-item">
            mdi-email
          </v-icon >
        </div>
        <div class="mu-myhelp-right-content">
          <div class="mu-myhelp-right-content-title">商务合作</div >
          <div class="mu-myhelp-right-content-message">mu@mu.com</div >
          <div class="mu-myhelp-right-content-title">投诉邮箱</div >
          <div class="mu-myhelp-right-content-message">mu@mu.com</div >
        </div>
      </div>
      <v-img :src="IMG_Src" width="300"></v-img>
    </div>
  </div>
</template>

<script>
const IMG_Src = "https://files.cdn.namejin.com/demon/35c017548f1a4acd8ec4139313a8966d.png?x-oss-process=image/resize,m_fill,h_504,w_896"

export default {
  name: 'MyHelp',
  data: () => ({
    IMG_Src: IMG_Src,
    initiallyOpen: [1],
    items: [
        {
          id: 1,
          name: '新手指引 :',
          children: [
            { id: 2, name: '会员如何添加免费游戏' },
            { id: 3, name: '如何试玩游戏' },
            { id: 4, name: '如何修改密码' },
          ],
        },
        {
          id: 5,
          name: '平台常见问题 :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: '游戏常见问题 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: '独享游戏 :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
      ],
  })
}
</script>

<style lang="scss" scoped>
$r: mu-myhelp;

.#{$r} {
  display: flex;
  justify-content: space-between;
  min-height: 100%;
  &-left {
    padding: 10px 20px;
  }
  &-right {
    min-width: 300px;
    margin-left: 20px;
    border-left: 1px solid #E4E4E4;
    padding: 10px 20px;
    &-item {
      display: flex;
      padding: 20px 10px; 
      min-height: 120px;
      border-bottom: 1px solid #E4E4E4;
    }
    &-content {
      margin-left: 20px;
      &-title {
        font-weight: bold;
      }
      &-message {
        margin-top: 10px;
        margin-bottom: 15px;
        font-size: 12px;
        opacity: .8;
      }
    }
  }
  &-icon {
    width: 50px;
    height: 50px;
    text-align: center;
    margin-top: 30px;
    border: 1px solid  #E4E4E4;
    border-radius: 50%;
    line-height: 45px;
    &-icon {
    }
  }
}
</style>