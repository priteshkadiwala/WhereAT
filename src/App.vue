<template>
  <v-app light>
      <app-header></app-header>
      <main>
        <v-content>
          <router-view></router-view>
        </v-content>
      </main>
      <app-footer></app-footer>
  </v-app>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
  export default {
    components: {
      'app-header': header,
      'app-footer': footer
    },
    data () {
      return {

      }
    }
  }

</script>
