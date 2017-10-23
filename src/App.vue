<template>
  <v-app light>
    <div>
      <app-header></app-header>
      
    </div>
  </v-app>
</template>

<script>
import header from './components/header.vue'
  export default {
    components: {
      'app-header': header
    },
    data () {
      return {

      }
    }
  }

</script>
