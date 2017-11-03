<template>
  <div>
    <v-card class="elevation-10 ma-4" color="blue-grey lighten-4">
        <v-toolbar dark color="blue-grey darken-4">
          <div class="text-xs-center">
            <v-toolbar-title class="white--text">Popular @'s</v-toolbar-title>
            </div>
            <v-spacer></v-spacer>
            <v-menu bottom left>
              <v-btn icon slot="activator" dark>
                <v-icon>more_vert</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile v-for="item in items" :key="item" @click="sort(item)">
                  <v-list-tile-title>{{ item }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
        </v-toolbar>
        <v-layout row wrap class="ma-4" >
          <v-flex xs4 class="pa-4" v-for="(at, index) in ats">
            <v-card class="elevation-10">
              <v-card-media :src="at.imageUrl" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{at.place.name}}</h3>
                  <div>{{at.describe}}</div>
                  <div>{{at.votes}}</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
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
                <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-card>
  </div>
</template>

<script>
import * as firebase from 'firebase'

export default {

  data () {
    return {
      ats: [],
      header: '',
      items: ['Votes'],
      key: '',
      sortAts: [],
      dialog: false,
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
      }
    }
  },
  created() {
    var ref = firebase.database().ref('/ats');
    var ats = [];
    ref.once('value').then((snap)=>{
      snap.forEach((at)=>{
        ats.push(at.val());
        this.ats = ats;
      });
    });
  },
  methods: {
    sort(item){
      if(item=='Votes'){
        var swapped;
        console.log(this.ats);
        var ats = this.ats;
        do {
          swapped = false;
          for (var i = 0; i < ats.length-1; i++) {
            if(ats[i].votes < ats[i+1].votes) {
              var temp = ats[i];
              ats[i] = ats[i+1];
              ats[i+1] = temp;
              swapped = true;
            }
          }

        } while(swapped);
        this.ats = [];
        ats.forEach((at) => {
          this.ats.push(at);
        });
      }
    },
    save() {
      this.dialog = false;
      var ats = [];
      var tags = [];
      for(var tag in this.tagSelect){
        if(this.tagSelect[tag]){
          tags.push(tag)
        }
      }
      this.ats.forEach((at) => {
        var tags2 = [];
        for(var tag in at.tags){
          if(at.tags[tag]){
            tags2.push(tag)
          }
        }
        var flag = true;
        tags2.forEach((tag)=>{
          if(!tags.includes(tag)){
            flag = false;
          }
        });
        if(flag) {
          ats.push(at);
        }
      });
      if(tags != null) {
      this.ats = [];
      ats.forEach((at)=>{
        this.ats.push(at);
      });
    }
    }
  }
}

</script>
