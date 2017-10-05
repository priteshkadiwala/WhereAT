<template>
  <div>
    <div v-show="isForm === false" id="displayPage">
      <h1>{{ AtObject.name}}</h1>
        <div>
      <div
         v-for="i in AtObject.totalNum"
         transition="fade"
         id="picDisplay"
         >
      <img
           :src="AtObject.pictureList[i]"
           
           />
        </div>
      </div>
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
    <div v-show="isForm === true" id="formPage">
      <form>
        <label>Rename @</label><br><br>
        <input v-model="AtObject.name" type="text" name="name"><br><br>
        <label>Edit Description of @</label><br><br>
        <input v-model="AtObject.description" type="text" name="description"><br><br>
        <label>Enter new Tags</label><br><br>
        <input v-model="AtObject.tagList" type="text" name="tags"><br><br>
        
      </form>
    </div>
    <button v-on:click="toggle">Toggle Editing</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      AtObject: {
        name: "Example @",
        //this needs to be connecteed to flickr api
        pictureList: ['http://i.imgur.com/Dh3al8H.jpg', 'https://i.imgur.com/Ue2ZIjy.jpg', 'https://i.imgur.com/K7ramZs.jpg', 'https://i.imgur.com/JZ5Fx9c.jpg', 'https://i.imgur.com/3iHElnI.jpg'],
        tagList: ["Ambient","Live Music", "Cheap Food"],
        description: "This in an example @ for later data integreation. ",
        hours: "8:00 am - 9:00 pm",
        votes: 0,
        totalNum: 3,
        
      },
      isForm: false
      
    }
  },
  ready: function () {
        this.startRotation();
    },
  methods: {

        next: function() {
            this.AtObject.tempNum += 1
        },
        prev: function() {
            this.AtObject.tempNum -= 1
        },
        toggle: function() {
            if (this.isForm == true) {
              //for sending changes whejn this gets connected to the database
              this.sendChanges();
              this.isForm = false;
            }
            else {
              this.isForm = true;
            }
        },
        sendChanges: function() {
          console.log(this.AtObject);
        }
        
  },
  
}
</script>

<style scoped>
h1 {
  font-family: sans-serif;
  text-align: center;
}
h2 {
  font-family: sans-serif;
  font-size: 40px;
}
#displayPage {
  background-color: #f2f2f2;
  border: 4px blue solid;
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
  border-radius: 15px;
  background-color: #f2f2f2;
  color: black;
  width: auto;
  border: solid;
  padding-right: 5px;
  padding-left: 5px;
  font-family: sans-serif;
}

#logo {
  background-color: blue;
  color: white;

}
fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}
img{
  width: 200px;
  height: 200px;
}
#picDisplay {
  display: inline-block;
  border: black 3px solid;
  margin-right: auto;
  margin-left: 30px;
}
#aboutBox {
  font-family: sans-serif;
  background-color: #f2f2f2;
  font-size: 20px;
}
#hoursBox {
  font-family: sans-serif;
  background-color: #f2f2f2;
  font-size: 20px;
}
</style>
