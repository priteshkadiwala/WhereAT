<template>
  <v-app light>
      <app-header></app-header>
      <main>
        <router-view></router-view>
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
