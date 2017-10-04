<template>
  <div>
    <h1>Create New @</h1>
  <form>
     <label>Enter Name of New @ {{newObj.name}}</label><br><br>
    <input id="nameInput" v-model="newObj.name" type="text" name="name" placeholder="@ name"><br><br>
    <label>Enter the Description of @ {{newObj.description}}</label><br><br>
    <input id="descInput" v-model="newObj.description" type="text" name="description" placeholder="Descripion"><br><br>
    <label>Add some descriptive tags</label><br><br>
    <input id="tagInput" type="text" v-model="newObj.tags"name="tags" placeholder="Enter Tags"><br><br>
 </form>
</div>
</template>

<script>
//require(db.js);

export default {
  data () {
    return {
      newObj: {
        name: "",
        description: "",
        tags: ""
      },
      allTags: ["Ambient", "Restaurant", "Fun"]
    }
    
  },
  
  methods: {
      //createNewAt: function(newObj) {
      //  var name = newObj.name;
      //  var desc = newObj.description;
       // createAt(name, desc);
      //}    
  },
  
}
</script>
<style scoped>
h1 {
  text-align: center;
  font-family: sans-serif;
}
label {
  font-size: 20px;
  font-family: sans-serif;
}
#nameInput {
  width: 80%;
  box-sizing: border-box;
  height: 50px;
  border-radius: 6px;
  background-color: lightblue;
  font-family: sans-serif;
}
#nameInput:focus {
  background-color: white;
  font-family: sans-serif;
}
#descInput {
  width: 80%;
  box-sizing: border-box;
  height: 50px;
  border-radius: 6px;
  background-color: lightblue;
  font-family: sans-serif;
}
#descInput:focus {
  background-color: white;
  font-family: sans-serif;
}
#tagInput {
  width: 80%;
  box-sizing: border-box;
  height: 50px;
  border-radius: 6px;
  background-color: lightblue;
  font-family: sans-serif;
}
#tagInput:focus {
  background-color: white;
  font-family: sans-serif;
}

  
</style>