<template>
	<div >
    <v-layout class="mt-3">
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-toolbar dark color="teal darken-4">
            <div class="text-xs-center">
              <v-toolbar-title class="white--text">{{this.place.name}}</v-toolbar-title>
            </div>
            <v-spacer></v-spacer>
            <h6 class="ma-3">{{AtObject.votes}}</h6>
						<v-btn @click="favIt" flat icon color="red lighten-2" v-show="fav">
				      <v-icon>favorite_border</v-icon>
				    </v-btn>
						<v-btn flat icon color="red lighten-2" v-show="!fav">
				      <v-icon>favorite</v-icon>
				    </v-btn>
          </v-toolbar>
          <v-carousel>
      			<v-carousel-item

      				:src="AtObject.pictureUrl"
      				></v-carousel-item>
      		</v-carousel>

          <div class="text-xs-center">
            <v-btn class="ma-3" v-for="i in AtObject.tagList" round color="indigo">{{i}}</v-btn><br />
            <v-btn class="ma-3" v-on:click="upVoteAt">Upvote</v-btn>
          </div>
          <v-divider></v-divider>
          <h4 class="ml-3 pa-3">Description</h4>
          <p class="ml-3 pl-3 pb-3">{{this.AtObject.description}}</p>
          <v-divider></v-divider>
          <v-flex xs12>
					<h4 class="ml-3 pt-3 pl-3">Reviews</h4>
          <v-card class="ma-4" v-if="revthere">
					<v-list>
						<template v-for="(review, index) in AtObject.reviews">
							<v-list-tile class="ma-3">
								<v-list-tile-action class="mb-4 mr-4">
									<v-list-tile-action-text>{{review.vote}}</v-list-tile-action-text>
                  <div >
                    <v-btn v-on:click="upVote(review)" color="indigo darken-4"><v-icon color="white">arrow_upward</v-icon></v-btn>
                  </div>
								</v-list-tile-action>
								<v-list-content>
									<v-list-tile-title>{{review.title}}</v-list-tile-title>
									<v-list-tile-sub-title class="display-subheading">{{review.review}}</v-list-tile-sub-title>
								</v-list-content>
							</v-list-tile>
							<v-divider v-if="index+1 < AtObject.reviews.length"></v-divider>
						</template>
					</v-list>
          </v-card>
          <div class="text-xs-center">
            <v-layout row justify-center>
              <v-dialog v-model="dialog" persistent max-width="500px">
                <v-btn class="mb-4" color="indigo darken-4 white--text" slot="activator">Add a review</v-btn>
                <v-card>
                  <v-card-title>
                    <span class="headline">Add a Review</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field v-model="newReview.title" label="Title"></v-text-field>
                          <v-text-field v-model="newReview.review" label="Review"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="submit">Submit</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
          </div>
				</v-flex>
      </v-card>
      </v-flex>
    </v-layout>
	</div>
</template>

<script>
import {bus} from '../main'
import * as firebase from 'firebase'
export default {
  data () {
    return {
      place:{},
    	AtObject: {
        //this needs to be connecteed to flickr api
        pictureUrl: '',
        tagList: [],
        description: '',
        votes: '',
        reviews: [],
      },
      isForm: false,
      dialog: false,
      revthere: false,
      key: this.$route.params.id,
      user: '',
      tags: {},
      newReview: {
        title: '',
        review: '',
        vote: 0
      },
			fav: true

    }
  },
  methods: {
      upVote (review) {
      		review.vote = review.vote + 1;
          var ref = firebase.database().ref('/ats/' + this.key);
          ref.update({reviews: this.AtObject.reviews});
					var ref2 = firebase.database().ref('/profiles/' + this.user.key);
					var temp;
					ref2.once('value').then((snap)=>{
						temp = snap.val().votes;
						temp++;
					})
					.then(()=>{
						ref2.update({votes: temp});
					});
      },
      upVoteAt() {
      	this.AtObject.votes = this.AtObject.votes + 1;
        var ref = firebase.database().ref('/ats/' + this.key);
        ref.update({votes: this.AtObject.votes});
				var ref2 = firebase.database().ref('/profiles/' + this.user.key);
				var temp;
				ref2.once('value').then((snap)=>{
					temp = snap.val().votes;
					temp++;
				})
				.then(()=>{
					ref2.update({votes: temp});
				});
      },
      submit(){
        var ref = firebase.database().ref('ats/' + this.key);
	       var ret;
	        ref.once('value').then((snap) => {
		          ret = snap.val().reviews;
              if(ret == null) {
                ret = [];
              }
          		ret.push(this.newReview);
          	})
          	.then(()=> {
          		ref.update({reviews: ret});
              this.dialog = false;
              this.AtObject.reviews = [];
							ret.forEach((rev)=>{
								this.AtObject.reviews.push(rev);
							});
          	});







						var ref2 = firebase.database().ref('/profiles/' + this.user.key);
						var temp;
						ref2.once('value').then((snap)=>{
							temp = snap.val().comments;
							temp++;
						})
						.then(()=>{
							ref2.update({comments: temp});
						});

      },
			favIt(){
				this.fav = false;
				console.log(this.user);
				var ref = firebase.database().ref('/profiles/' + this.user.key);
				var ret;
				ref.once('value').then(snap=>{
				ret = snap.val().favorites;
				if(ret == null){
					ret = [];
				}
				ret.push(this.key);
			})
			.then(()=>{
				ref.update({favorites:ret});
			});
			}


	},
  mounted() {

      var ref = firebase.database().ref('/ats/' + this.key);

      ref.once('value').then((snap)=>{
        //console.log(snap.val());
        this.place = snap.val().place;
        this.AtObject.pictureUrl = snap.val().imageUrl;
        this.AtObject.description = snap.val().describe;
        this.AtObject.votes = snap.val().votes;
        this.AtObject.reviews = snap.val().reviews;

        if(this.AtObject.reviews != null){
          console.log(this.AtObject.reviews);
          this.revthere = true
        }
        this.tags = snap.val().tags;
        console.log(snap.val().describe);
        for(var tag in this.tags){
          if(this.tags[tag]){
            this.AtObject.tagList.push(tag)
          }
        }
        //console.log(this.AtObject.tagList);
      }).then(()=>{
        var ref = firebase.database().ref('/profiles');
        ref.once('value').then((snap)=>{
          snap.forEach(profile=>{
            if(firebase.auth().currentUser.email == profile.val().email) {
              this.user = profile.val();
            }
          });
        });
      });

      console.log(this.AtObject.reviews);

  },
  created(){


  }

}
</script>

<style scoped>
h4 {
  color: #002868;
  font-family: 'Raleway',sans-serif;
  font-size: 62px;
  font-weight: 800;
  line-height: 72px;

  text-transform: uppercase; }
p {
  color: #4c4a37;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  line-height: 32px;
  }
</style>
