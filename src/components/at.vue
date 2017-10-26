<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<h2> {{ AtObject.name}} </h2>
			</v-flex>
			<v-flex xs12>
				<v-carousel>
					<v-carousel-item 
						v-for="(i,key) in AtObject.pictureList"
						:src="i"
						:key="key"
						></v-carousel-item>
					</v-carousel>
			</v-flex>
			<v-flex xs6>
				<h3>Description:</h3>
				<h5>{{AtObject.description}}</h5>
			</v-flex>
			<v-flex xs6>
				<h3>Hours:</h3>
				<h5>{{AtObject.hours}}</h5>
			</v-flex>
			<v-flex xs12>
				<h4>Reviews:</h4>
				<v-list>
					<template v-for="(review, index) in AtObject.reviews">
						<v-list-tile class="mr-6">
							<v-list-tile-action class="mr-3">
								<v-list-tile-action-text>{{review.votes}}</v-list-tile-action-text>
								<v-icon>arrow_upward</v-icon>
							</v-list-tile-action>
							<v-list-content>
								<v-list-tile-title>{{review.title}}</v-list-tile-title>
								<v-list-tile-sub-title class="display-subheading">{{review. text}}</v-list-tile-sub-title>
							</v-list-content>
							
						</v-list-tile>
						<v-divider v-if="index+1 < AtObject.reviews.length"></v-divider>
					</template>
				</v-list>
			</v-flex>
		</v-layout>
	</v-container>
	
</template>

<script>

export default {

  data () {
    return {
    	AtObject: {
        name: "Example @",
        //this needs to be connecteed to flickr api
        pictureList: [ 'http://i.imgur.com/Dh3al8H.jpg', 'https://i.imgur.com/Ue2ZIjy.jpg', 'https://i.imgur.com/K7ramZs.jpg', 'https://i.imgur.com/JZ5Fx9c.jpg', 'https://i.imgur.com/3iHElnI.jpg'],
        tagList: ["Ambient","Live Music", "Cheap Food"],
        description: "This in an example @ for later data integreation. ",
        hours: "8:00 am - 9:00 pm",
        votes: 0,
        totalNum: 3,
        reviews: [
            {
              votes: 30,
              text: "this place was good",
              title: "Eh Place"
            },
            {
              votes: 15,
              text: "eh.",
              title: "EH"

            },
            {
              votes: 2,
              text: "this place was shit",
              title: "meh"
            }
        ],

      },
    }
  }
}

</script>
