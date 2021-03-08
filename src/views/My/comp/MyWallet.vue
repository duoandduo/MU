<template>
  <div>
    <noAuth v-if="!isLogin" />
    <template v-if="isLogin" >
      <div class="mu-mywallet-card">
        <span>我的余额 : 0.00 元</span>
        <v-btn color="#3692FC" small class="mu-mywallet-card-btn" dark @click="bindDialogVisible = true">我的支付宝</v-btn >
        <v-btn color="#FFF0E6" small class="mu-mywallet-card-btn" dark>提现</v-btn>
      </div>
      <div class="mu-mywallet-search">
        <v-row>
          <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-select
            v-model="type"
            :items="[1,2,3]"
            dense
            outlined
            hide-details
            class="ma-2"
            label="时间"
          ></v-select>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-select
            v-model="type"
            :items="[1,2,3]"
            dense
            outlined
            hide-details
            class="ma-2"
            label="变动类型"
          ></v-select>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-btn color="primary" style="margin-top: 8px">搜索</v-btn >
        </v-col>
        </v-row>
      </div>
      <div class="mu-mywallet-list">
        <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
      </div>
      <v-dialog v-model="bindDialogVisible" width="450"></v-dialog>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MyWallet',
  data() {
    return {
      type: 1,
      headers: [
          {
            text: '时间',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '变动类型', value: 'calories' },
          { text: '变动金额', value: 'fat' },
          { text: '变动后金额', value: 'carbs' },
          { text: '备注', value: 'protein' },
          { text: '操作', value: 'iron' },
      ],
      desserts: [
          {
            name: '20200202',
            calories: '试玩游戏',
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
      bindDialogVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'isLogin',
    ])
  },
}
</script>

<style lang='scss' scoped>
$r: mu-mywallet;

.#{$r} {
  &-card {
    padding: 30px 20px;
    border-bottom: 1px solid #aaa;
    font-size: 14px;
    &-btn {
      margin-left: 5px;
    }
  }
}

</style>