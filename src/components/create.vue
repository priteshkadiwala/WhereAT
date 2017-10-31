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
                :src="require('@/assets/newyork.jpg')"
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
                  >
                  Upload
                  <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
              </div>
              <v-card-text>
                <v-container>
                  <v-layout row >
                    <v-flex xs6 order-md2 order-xs1>
                      <v-text-field
                        name="input-1"
                        label="Search for a place"
                        v-model="at.place"
                        required
                      ></v-text-field>
                      <v-text-field
                        name="input-7-1"
                        label="Describe the place"
                        v-model="at.describe"
                        multi-line
                        required
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
import * as firebase from 'firebase'

export default {

  data () {
    return {
      tagSelect: {
        Food: false,
        Casual: false,
        Upscale: false,
        Recreational: false,
        Quiet: false,
        Popular: false,
        FamilyFriendly: false,
        Expensive: false,
        Cheap: false,
        Theatre: false,
        Cultural: false,
        Sports: false,
        Nature: false,
        Exciting: false,
        Event: false,
        Unique: false,
        Historical: false,
        Trendy: false
      },
      dialog: false,
      at: {
        place: '',
        describe: ''
      }
    }
  },
  methods: {
    submit() {
      var ref = firebase.database().ref('/ats');
      var key = ref.push(this.at);
      key = key.path.pieces_[1];
      ref.child('/' + key).update({key: key, tags: this.tagSelect});
      
    }
  }
}

</script>
