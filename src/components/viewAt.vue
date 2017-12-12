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
<<<<<<< HEAD
            <v-btn class="ma-3" v-for="i in AtObject.tagList" round dark color="indigo">{{i}}</v-btn><br />
=======
            <v-btn class="ma-3" v-for="i in AtObject.tagList" round color="indigo">{{i}}</v-btn><br />
>>>>>>> claker
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
                <v-spacer></v-spacer>
                <v-list-tile-action>
<<<<<<< HEAD
                    <v-btn icon @click="delrev(review)">
											<v-icon>delete</v-icon></v-btn>
=======
                    <v-btn icon><v-icon>delete</v-icon></v-btn>
>>>>>>> claker
                    </v-list-tile-action>
							</v-list-tile>
							<v-divider v-if="index+1 < AtObject.reviews.length"></v-divider>
						</template>
					</v-list>
          </v-card>
<<<<<<< HEAD

=======
         
>>>>>>> claker

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
<<<<<<< HEAD
										<v-btn color="blue darken-1" flat @click="clear">Cancel</v-btn>
=======
>>>>>>> claker
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
          </div>
<<<<<<< HEAD


          <v-divider></v-divider>
					<h4 class="ml-3 pt-3 pl-3">Events</h4>
          <v-card class="ma-4" v-if="evethere">
          <v-list>
            <template v-for="(eve, index) in AtObject.events">
              <v-list-tile class="ma-3">
                <v-list-tile-action class="mb-4 mr-4">
                  <v-list-tile-action-text>{{eve.vote}}</v-list-tile-action-text>
                  <div >
                    <v-btn v-on:click="upVoteEve(eve)" color="indigo darken-4"><v-icon color="white">arrow_upward</v-icon></v-btn>
                  </div>
                </v-list-tile-action>
                <v-list-content>
                  <v-list-tile-title>{{eve.title}}</v-list-tile-title>
                  <v-list-tile-sub-title class="display-subheading">{{eve.eve}}</v-list-tile-sub-title>
                </v-list-content>
                <v-spacer></v-spacer>
                <v-list-tile-action>
                    <v-btn icon @click="deleve(eve)">
											<v-icon>delete</v-icon>
										</v-btn>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index+1 < AtObject.events.length"></v-divider>
=======
           <v-divider></v-divider>
          <h4 class="ml-3 pt-3 pl-3">Events</h4>
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
                <v-spacer></v-spacer>
                <v-list-tile-action>
                    <v-btn icon><v-icon>delete</v-icon></v-btn>
                    </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index+1 < AtObject.reviews.length"></v-divider>
>>>>>>> claker
            </template>
          </v-list>
          </v-card>
           <div class="text-xs-center">
            <v-layout row justify-center>
<<<<<<< HEAD
              <v-dialog v-model="dialog1" persistent max-width="500px">
                <v-btn class="mb-4" color="indigo darken-4 white--text" slot="activator">Add an event</v-btn>
                <v-card>
                  <v-card-title>
                    <span class="headline">Add an event</span>
=======
              <v-dialog v-model="dialog" persistent max-width="500px">
                <v-btn class="mb-4" color="indigo darken-4 white--text" slot="activator">Add a event</v-btn>
                <v-card>
                  <v-card-title>
                    <span class="headline">Add a Review</span>
>>>>>>> claker
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
<<<<<<< HEAD
                          <v-text-field v-model="newEvents.title" label="Title"></v-text-field>
                          <v-text-field v-model="newEvents.eve" label="Event"></v-text-field>
=======
                          <v-text-field v-model="newReview.title" label="Title"></v-text-field>
                          <v-text-field v-model="newReview.review" label="Review"></v-text-field>
>>>>>>> claker
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
<<<<<<< HEAD
                    <v-btn color="blue darken-1" flat @click="submitEve">Submit</v-btn>
										<v-btn color="blue darken-1" flat @click="cleareve">Cancel</v-btn>
=======
                    <v-btn color="blue darken-1" flat @click="submit">Submit</v-btn>
>>>>>>> claker
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
<<<<<<< HEAD
				events: [],
				notifications:''
      },
      isForm: false,
      dialog: false,
			dialog1: false,
      revthere: false,
      evethere: false,
=======
      },
      isForm: false,
      dialog: false,
      revthere: false,
>>>>>>> claker
      key: this.$route.params.id,
      user: '',
      tags: {},
      newReview: {
        title: '',
        review: '',
        vote: 0
      },
<<<<<<< HEAD
			newEvents: {
        title: '',
        eve: '',
        vote: 0
      },
=======
>>>>>>> claker
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
<<<<<<< HEAD
			upVoteEve (eve) {
      		eve.vote = eve.vote + 1;
          var ref = firebase.database().ref('/ats/' + this.key);
          ref.update({events: this.AtObject.events});
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
=======
>>>>>>> claker
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
<<<<<<< HEAD
			clear(){
				this.dialog = false;
			},
			cleareve(){
				this.dialog1 = false;
			},
=======
>>>>>>> claker
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
<<<<<<< HEAD
						this.revthere = true;
=======







>>>>>>> claker
						var ref2 = firebase.database().ref('/profiles/' + this.user.key);
						var temp;
						ref2.once('value').then((snap)=>{
							temp = snap.val().comments;
							temp++;
						})
						.then(()=>{
							ref2.update({comments: temp});
<<<<<<< HEAD
						})



      },
			submitEve(){
        var ref = firebase.database().ref('ats/' + this.key);
	       var ret;
	        ref.once('value').then((snap) => {
		          ret = snap.val().events;
              if(ret == null) {
                ret = [];
              }
          		ret.push(this.newEvents);
          	})
          	.then(()=> {
          		ref.update({events: ret});
							this.AtObject.notifications++;
							ref.update({notifications: this.AtObject.notifications});
              this.dialog1 = false;
              this.AtObject.events = [];
							ret.forEach((rev)=>{
								this.AtObject.events.push(rev);
							});
          	});
						this.evethere = true;
=======
						});

>>>>>>> claker
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
<<<<<<< HEAD
		},
		delrev(rev){
			var index = this.AtObject.reviews.indexOf(rev);
			this.AtObject.reviews.splice(index, 1);
			var ref = firebase.database().ref('ats/' + this.key);
			ref.update({reviews: this.AtObject.reviews});
		},
		deleve(eve) {
			var index = this.AtObject.events.indexOf(eve);
			this.AtObject.events.splice(index, 1);
			var ref = firebase.database().ref('ats/' + this.key);
			this.AtObject.notifications--;
			ref.update({events: this.AtObject.events,
				notifications: this.AtObject.notifications
			});
		}
=======
			}
>>>>>>> claker


	},
  mounted() {

      var ref = firebase.database().ref('/ats/' + this.key);

      ref.once('value').then((snap)=>{
<<<<<<< HEAD
        console.log(snap.val());
=======
        //console.log(snap.val());
>>>>>>> claker
        this.place = snap.val().place;
        this.AtObject.pictureUrl = snap.val().imageUrl;
        this.AtObject.description = snap.val().describe;
        this.AtObject.votes = snap.val().votes;
        this.AtObject.reviews = snap.val().reviews;
<<<<<<< HEAD
				this.AtObject.events = snap.val().events;
				this.AtObject.notifications = snap.val().notifications;

=======
>>>>>>> claker

        if(this.AtObject.reviews != null){
          console.log(this.AtObject.reviews);
          this.revthere = true
        }
<<<<<<< HEAD
				if(this.AtObject.events != null){

          this.evethere = true
        }

=======
>>>>>>> claker
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

<<<<<<< HEAD
=======
  },
  created(){


>>>>>>> claker
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
