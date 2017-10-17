<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required="">
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Things</label>
        <input type="checkbox" value="things" v-model="blog.catagories">
        <label>Stuff</label>
        <input type="checkbox" value="stuff" v-model="blog.catagories">
        <label>other</label>
        <input type="checkbox" value="other" v-model="blog.catagories">
        <label>eh</label>
        <input type="checkbox" value="eh" v-model="blog.catagories">
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="x in authors">{{x}}</option>
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title}}</p>
      <p>Blog content:</p>
      <p> {{ blog.content}}</p>
      <p>Blog Catagories:</p>
      <ul>
        <li v-for="x in blog.catagories">{{x}}</li>
      </ul>
    </div>
  </div>
  
</template>

<script>

export default {
  components: {
    
   
  },
  data () {
    return {
      blog: {
        title: "",
        content: "",
        catagories: [],
        author: ""
      },
      authors: ["you", 'he', 'vue'],
      submitted: false
    }
  },
  methods: {
      post: function() {
        this.$http.post('http://jsonplaceholder.typicode.com/posts',{
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        }).then(function(data) {
            console.log(data);
            this.submitted=true;
        });
      }
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
