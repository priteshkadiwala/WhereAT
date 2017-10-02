<template>
  <div>
   <show-blog></show-blog>
   <list-blog></list-blog>
  </div>
  
</template>

<script>
import addBlog from './components/blog.vue'
import showBlog from './components/showBlogs.vue'
import listBlog from './components/listBlogs.vue'
export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blog': listBlog
   
  },
  data () {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style>
body{
  margin: 0
}

</style>
