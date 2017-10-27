<template>
	<v-container grid-list-xs align-center>
		<v-layout column>
			<v-flex xs12 class="text-xs-center">
					<h1>My @'s</h1>
			</v-flex>
			<v-flex xs12 v-for="i in AtList">
				<v-card class="text-xs-center">
					<v-card-title primary-title>{{i.name}}</v-card-title>
					<v-card-text>{{i.description}}</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>

export default {

  data () {
    return {
    	AtList: [
    		{name: "Place 1", description: "sdasdasd"},
    		{name: "PLace 2", description: "sdasdasda"},
    		{name: "PLace 3", description: "asdasdadd"},
    		{name: "Place 4", description: "asdadad"},
		]
    }
  }
}

</script>