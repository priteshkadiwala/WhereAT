<template>
	<v-container>
		<v-layout column>
			<v-flex xs12 class="text-xs-center">
				<h2>Report anything troublesome</h2>
			</v-flex>
			<v-flex>
				<v-form>
					<v-text-field
					label="Users"
					v-model="reportObj.users"
					placeholder="describe any problem users"
					textarea
					>
					</v-text-field>
					<v-text-field
					label="ats"
					v-model="reportObj.ats"
					placeholder="describe any problem @s"
					textarea>
					</v-text-field>
					<v-text-field
					label="reviews"
					v-model="reportObj.reviews"
					placeholder="describe any inappropriate reviews"
					textarea>
					</v-text-field>
					<v-btn>Submit</v-btn>
				</v-form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>

export default {

  data () {
    return {
    	reportObj: {
    		users: "",
    		ats: "",
    		reviews: "",
    	},
    }
  }
}

</script>