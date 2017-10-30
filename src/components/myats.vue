<template>
  <div>
    <v-card class="elevation-10 ma-4" color="blue-grey lighten-4">
        <v-toolbar dark color="blue-grey darken-4">
          <div class="text-xs-center">
            <v-toolbar-title class="white--text">My Favorite @'s</v-toolbar-title>
            </div>
        </v-toolbar>
        <v-layout row wrap class="ma-4">
          <v-flex xs4 class="pa-4">
            <v-card class="elevation-10">
              <v-card-media :src="require('@/assets/newyork.jpg')" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-4">
            <v-card class="elevation-10">
              <v-card-media :src="require('@/assets/newyork.jpg')" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-4">
            <v-card class="elevation-10">
              <v-card-media :src="require('@/assets/newyork.jpg')" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs4 class="pa-4">
            <v-card class="elevation-10">
              <v-card-media :src="require('@/assets/newyork.jpg')" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
  </div>
</template>

<script>

export default {

  data () {
    return {

    }
  }
}

</script>
