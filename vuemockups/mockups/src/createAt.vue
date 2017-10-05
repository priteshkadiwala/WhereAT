<template>
  <div>
    <div v-show="notSumbit === true">
      <h1>Create New @</h1>
      <form>
        <label>Enter address of @</label><br><br>
        <vue-google-autocomplete id="map" classname="form-control" placeholder="Enter address" v-on:placechanged="getAddressData"></vue-google-autocomplete><br><br>
        <label>Enter Name of New @ {{newObj.name}}</label><br><br>
        <input id="nameInput" v-model="newObj.name" type="text" name="name" placeholder="@ name"><br><br>
        <label>Enter the Description of @ {{newObj.description}}</label><br><br>
        <input id="descInput" v-model="newObj.description" type="text" name="description" placeholder="Descripion"><br><br>
        <!--Make this a list or checkboxes, as to not have to parse strings -->
        <label>Add some descriptive tags</label><br><br>
        <input id="tagInput" type="text" v-model="newObj.temptags" name="tags" placeholder="Enter Tags"><br><br>
        <label>Enter @'s operating hours</label><br><br>
        <input id="hoursInput" type="text" v-model="newObj.hours" name="hours" placeholder="Enter Hours"><br><br>
        <button v-on:click="postNewAt">Submit</button>
     </form>
  </div>
  <div v-show="notSumbit === false">
    <h2>Thanks for submitting</h2>
  </div>
</div>
</template>

<script>
//require(db.js);
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import axios from 'axios';

export default {
  data () {
    return {
      newObj: {
        name: "",
        description: "",
        tags : [],
        temptags: "",
        hours: "",
        lat: "",
        long: "",
        votes: 0
      },
      allTags: [],
      notSumbit: true
    }
    
  },
  
  methods: {
      postNewAt: function() {
        var temp = this.newObj.temptags.split(',');
        this.newObj.tags = temp;
        notSumbit = false;
        axios.post('https://localhost:3000/At', newObj).then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      },
      getAddressData: function(addressData, placeResultData) {
        this.newObj.lat = addressData.latitude;
        this.newObj.long = addressData.longitude;
      } 
  },
  components: {
    VueGoogleAutocomplete
  }
  
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
  font-family: sans-serif;
}
#descInput {
  width: 80%;
  box-sizing: border-box;
  height: 50px;
  border-radius: 6px;
  font-family: sans-serif;
}
#tagInput {
  width: 80%;
  box-sizing: border-box;
  height: 50px;
  border-radius: 6px;
  font-family: sans-serif;
}
#hoursInput {
  width: 80%;
  box-sizing: border-box;
  height: 50px;
  border-radius: 6px;
  font-family: sans-serif;
} 
#map {
  width: 80%;
  box-sizing: border-box;
  height: 50px;
  border-radius: 6px;
  font-family: sans-serif;
}
</style>