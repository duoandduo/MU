<template>
  <div class="mu-myexchange">
    <v-row>
      <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label=""
            placeholder="请输入激活码"
            solo
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-btn color="#f2952e" height="47" class="white--text">兑换</v-btn >
        </v-col>
    </v-row>
    <div class="mu-myexchange-header">兑换记录</div>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
    >
      <template v-slot:header.name="{ header }">
        {{ header.text.toUpperCase() }}
      </template>
    </v-data-table>
  </div >
</template>

<script>
export default {
  name: 'MyExchange',
  data: () => ({
      headers: [
        {
          text: '游戏名称',
          align: 'start',
          value: 'name',
        },
        { text: '时间', value: 'calories' },
        { text: '兑换状态', value: 'fat' },
        { text: '激活码', value: 'carbs' },
        { text: '操作', value: 'protein' },
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
    }),
}
</script>

<style lang="scss" scoped>
$r: mu-myexchange;
.#{$r} {
  padding: 20px;
  &-header {

  }
}
</style>