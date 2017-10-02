<template>
  <div>
    <h1>{{ AtObject.name}}</h1>
    <ul id="pictures">
      <div v-for="x in AtObject.pictureList">
        <img src=loadImage(x)>
      </div>
    </ul>
    <ul id="tags">
      <li v-for="y in AtObject.tagList" id="tag_li">{{y}}</li>
    </ul>
    <h2>About</h2>
    <div id="aboutBox">
      <p>{{AtObject.description}}</p>
    </div>
    <h2>Hours</h2>
    <div id="hoursBox">
      <p>{{AtObject.hours}}</p>
    </div>
  </div>
</template>

<script>



export default {
  data () {
    return {
      AtObject: {
        name: "Example @",
        pictureList: ['~/assets/logo.png', '~/assets/global_landscapes_initiative_directory_pages.jpg', '~/assets/photo-129299193.jpg'],
        tagList: ["Ambient","Live Music", "Cheap Food"],
        description: "This in an example @ for later data integreation. ",
        hours: "8:00 am - 9:00 pm",
        votes: 0
      }
    }
  },
  methods: {
    loadImage: function(path) {
      require(path);
      return path;
    }
  }
}
</script>

<style>
h1 {
  text-align: center;
}
#pictures {
  align-content: center;
}
#picture_li {
  display: inline-block;
  font-size: 30px;
  width: 50px;
}
#tags {
  display: inline-block;
  list-style-type: none;

}
#tag_li {
  display: inline-block;
  margin-left: 20px;
  border-radius: 5px;
  background-color: black;
  color: white;
  width: auto;
}
img {
  width: 50%;
}
#logo {
  background-color: blue;
  color: white;

}


</style>
