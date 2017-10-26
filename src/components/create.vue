<template>
	<div>
		<v-container v-show="notSubmit === true">
			<v-layout row wrap>
				<v-flex xs12>
					<v-form>
						<vue-google-autocomplete id="map" classname="form-control" placeholder="Enter address" v-on:placechanged="getAddressData"></vue-google-autocomplete><br>
						<v-text-field
							label="Name"
							v-model="newObj.name"
							required
						></v-text-field>
						<v-text-field
							label="Description"
							v-model="newObj.description"
							required
						></v-text-field>
						<v-text-field
							label="Hours"
							v-model="newObj.hours"
							required
						></v-text-field>
						<v-text-field
							label="Tags"
							v-model="newObj.temptags"
							required
						></v-text-field>
						<v-btn v-on:click="postNewAt">Submit</v-btn>
					</v-form>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container v-show="notSubmit === false">
			<v-layout row wrap>
				<v-flex xs12>
					<h2>Thanks for Submitting</h2>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete';
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
      notSubmit: true,
      error: ''
    }
  },
  methods: {
  	getAddressData (addressData, placeResultData) {
        this.newObj.lat = addressData.latitude;
        this.newObj.long = addressData.longitude;
      },
    postNewAt: function() {
    	var temp = this.newObj.temptags.split(',');
       	this.newObj.tags = temp;
       	this.notSubmit = false;
        
  	},
}
}	

</script>
