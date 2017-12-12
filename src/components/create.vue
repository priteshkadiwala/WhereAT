<template>
  <div>
    <v-container grid-list-md class="mt-3 mb-3">
      <v-layout>
        <v-flex xs12 sm12>
          <form>
            <v-card class="elevation-10">
              <v-card-media
                class="black--text elevation-10"
                height="200px"
                :src="imageUrl"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Create an @</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <div class="text-xs-center">
                <v-btn
                  color="blue-grey"
                  dark
                  class="ma-4"
                  justify-center
                  raised
                  @click="onPickFile"
                  >
                  Upload
                  <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
                <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"
                />
              </div>
              <v-card-text>
                <v-container>
                  <v-layout row >
                    <v-flex xs6 order-md2 order-xs1>
                      <!--<v-text-field
                        name="input-1"
                        label="Search for a place"
                        v-model="at.place"
                        required
                      >


                    </v-text-field>-->
                    <vuetify-google-autocomplete
                          id="map"
<<<<<<< HEAD
                          placeholder="Enter a place"
                          types="establishment"
                          v-on:placechanged="getAddressData"
                    ></vuetify-google-autocomplete>
=======
                          placeholder="Search for the place"
                          v-on:placechanged="getAddressData"
                    ></vuetify-google-autocomplete>
                      <v-btn @click="geolocation">Geolocation</v-btn>
>>>>>>> claker
                      <v-text-field
                        name="input-7-1"
                        label="Describe the place"
                        v-model="at.describe"
                        multi-line
                        required
                        class="mt-3"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <div class="text-xs-center">
                <v-dialog class="mb-4" v-model="dialog" scrollable>
                  <v-btn color="primary" dark slot="activator">Tags</v-btn>
                  <v-card>
                    <v-card-title>Select Tags</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 300px;">
                        <v-checkbox label="Food" v-model="tagSelect.Food"></v-checkbox>
                        <v-checkbox label="Casual" v-model="tagSelect.Casual"></v-checkbox>
                        <v-checkbox label="Upscale" v-model="tagSelect.Upscale"></v-checkbox>
                        <v-checkbox label="Recreational" v-model="tagSelect.Recreational"></v-checkbox>
                        <v-checkbox label="Quiet" v-model="tagSelect.Quiet"></v-checkbox>
                        <v-checkbox label="Popular" v-model="tagSelect.Popular"></v-checkbox>
                        <v-checkbox label="Family Friendly" v-model="tagSelect.FamilyFriendly"></v-checkbox>
                        <v-checkbox label="Expensive" v-model="tagSelect.Expensive"></v-checkbox>
                        <v-checkbox label="Cheap" v-model="tagSelect.Cheap"></v-checkbox>
                        <v-checkbox label="Theatre" v-model="tagSelect.Theatre"></v-checkbox>
                        <v-checkbox label="Cultural" v-model="tagSelect.Cultural"></v-checkbox>
                        <v-checkbox label="Sports" v-model="tagSelect.Sports"></v-checkbox>
                        <v-checkbox label="Nature" v-model="tagSelect.Nature"></v-checkbox>
                        <v-checkbox label="Exciting" v-model="tagSelect.Exciting"></v-checkbox>
                        <v-checkbox label="Event" v-model="tagSelect.Event"></v-checkbox>
                        <v-checkbox label="Unique" v-model="tagSelect.Unique"></v-checkbox>
                        <v-checkbox label="Historical" v-model="tagSelect.Historical"></v-checkbox>
                        <v-checkbox label="Trendy" v-model="tagSelect.Trendy"></v-checkbox>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                      <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
              <div class="text-xs-center">
                <v-btn @click="submit" class="mb-4">submit</v-btn>
                <v-btn class="mb-4">clear</v-btn>
              </div>
            </v-card>
          </form>
        </v-flex>
      </v-layout>
  </v-container>
  </div>
</template>

<script>
import * as firebase from 'firebase';
<<<<<<< HEAD
=======

>>>>>>> claker
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';

export default {

  data () {
    return {
<<<<<<< HEAD

=======
>>>>>>> claker
      tagSelect: {
        Casual: false,
        Cheap: false,
        Cultural: false,
        Event: false,
        Exciting: false,
        Expensive: false,
        FamilyFriendly: false,
        Food: false,
        Historical: false,
        Nature: false,
        Popular: false,
        Quiet: false,
        Recreational: false,
        Sports: false,
        Theatre: false,
        Trendy: false,
        Unique: false,
        Upscale: false
      },
      dialog: false,
      at: {
        place: {
          lat: '',
          long: '',
          name: ''
        },
<<<<<<< HEAD
        notifications: 0,
        votes: 0,
        describe: '',
        reviews: [],
        events:[]
=======
        votes: 0,
        describe: '',
        reviews: []
>>>>>>> claker
      },
      image: null,
      imageUrl: '',
      currentLocation: {
        lat: "",
        lng: ""
      }
<<<<<<< HEAD

=======
>>>>>>> claker
    }
  },
  //mounted: function() {
  // this.geolocation();
<<<<<<< HEAD
  //},,
=======
  //},
>>>>>>> claker
  methods: {
    submit() {
      var ref = firebase.database().ref('/ats');
      var key = ref.push(this.at);
      key = key.path.pieces_[1];
      ref.child('/' + key).update({key: key, tags: this.tagSelect}).then(()=>{
      //upload picture
        var filename = this.image.name;
        var ext = filename.slice(filename.lastIndexOf('.'));
        var temp = firebase.storage().ref('/ats/' + key + '.' + ext);
        temp.put(this.image).then((snap)=>{
          console.log(snap);
          this.imageUrl = snap.downloadURL;
        }).then(()=>{
        console.log(this.imageUrl);

        ref = firebase.database().ref("/ats/" + key);
        ref.update({imageUrl: this.imageUrl});
      });
      });
<<<<<<< HEAD
      this.$router.push('/');
    },

=======
    },
>>>>>>> claker
    onPickFile(){
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0){
        return alert('Please add a valid file!');
      }
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      })
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    getAddressData (addressData, placeResultData) {
<<<<<<< HEAD
        this.at.place.lat = addressData.latitude;
        this.at.place.long = addressData.longitude;
        this.at.place.name = placeResultData.name;

    }
=======

        console.log(addressData);
        this.at.place.lat = addressData.latitude;
        this.at.place.long = addressData.longitude;
        this.at.place.name = addressData.locality;
        console.log(this.at.place);
    },
    geolocation : function() {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
          this.currentLocation.lat = position.coords.latitude;
          this.currentLocation.lng = position.coords.longitude;
      });
      console.log(this.currentLocation);
      //the below code could work if needing to use current location in create page
      /*var geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(this.currentLocation.lat, this.currentLocation.lng);
      geocoder.geocode({'latLng': latlng}, function(results, status) {
      console.log(results);
      if (status == google.maps.GeocoderStatus.OK) {
      console.log(results)
        if (results[1]) {
         //formatted address
         alert(results[0].formatted_address)
        //find country name
             for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    city= results[0].address_components[i];
                    break;
                }
            }
        }
        //city data
        alert(city.short_name + " " + city.long_name)


        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });*/
  }
>>>>>>> claker

  },
	components: {
		VuetifyGoogleAutocomplete
	}
<<<<<<< HEAD

=======
>>>>>>> claker
}

</script>
