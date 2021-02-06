<template>
  <div class="shop">
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
    <v-row justify="space-around">
      <v-icon large color="green darken-2">
        mdi-domain
      </v-icon>

      <v-icon large color="blue darken-2">
        mdi-message-text
      </v-icon>

      <v-icon large color="purple darken-2">
        mdi-dialpad
      </v-icon>

      <v-icon large color="teal darken-2">
        mdi-email
      </v-icon>

      <v-icon large color="blue-grey darken-2">
        mdi-call-split
      </v-icon>

      <v-icon large color="orange darken-2">
        mdi-arrow-up-bold-box-outline
      </v-icon>
    </v-row>
  </div>
</template>

<script>
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
  }
</script>

<style lang='scss' scoped>

</style>