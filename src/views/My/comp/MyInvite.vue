<template>
  <div>
    <div></div>
    <div>
      <v-img :src="IMG_SRC" height="100"></v-img>
    </div>
    <div class="mu-myinvite-card">
      <div class="mu-myinvite-card-header">邀请攻略</div>
      <div class="mu-myinvite-card-content">
        <div>攻略一：复制专属链接发给好友注册</div>
        <div>攻略二：好友首次登陆后填写您的邀请码<span style="margin-left: 50px">你的专属邀请码: 11444444</span></div>
      </div>
    </div >
    <div class="mu-myinvite-card">
      <div class="mu-myinvite-card-header">我的邀请记录</div>
      <div class="mu-myinvite-card-content">已成功邀请 0 位好友，获得 0 天会员</div>
    </div >
    <div>
      <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
      
      >
        <template v-slot:header.name="{ header }">
          {{ header.text.toUpperCase() }}
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
const IMG_SRC = "https://files.zuhaohao.com/demon/50537d197eda4e8598a440a8435a7944.png?x-oss-process=image/resize,m_lfit,h_240,w_1960";

export default {
  name: 'MyInvite',
  data: () => ({
    IMG_SRC: IMG_SRC,
    headers: [
        {
          text: '用户手机号码',
          align: 'start',
          value: 'name',
        },
        { text: '注册时间', value: 'calories' },
        { text: '赠送会员时长', value: 'fat' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
  })
}
</script>

<style lang="scss" scoped>
$r: mu-myinvite;

.#{$r} {
  &-card {
    margin: 20px 0;
    border-top: 1px solid #D4D4D4;
    border-bottom: 1px solid #D4D4D4;
    &-header {
      font-size: 14px;
      font-weight: bold;
      padding: 20px;
      border-bottom: 1px solid #E4E4E4;
    }
    &-content {
      padding: 20px;
      font-size: 12px;
    }
  }
}
</style>