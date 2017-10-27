<template>
	<v-container grid-list-xs align-center>
		<v-layout column>
			<v-flex xs6 offset-xs3 class="text-xs-center">
				<h2>Invite a friend to use Where@</h2>
			</v-flex>
			<v-flex xs6 offset-xs3>
				<v-from>
					<v-text-field
					label="Email"
					v-model="friendEmail"
					hint="example@example.com"
					required>
					</v-text-field>
					<v-btn>Submit</v-btn>
				</v-from>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>

export default {

  data () {
    return {
    	friendEmail: ""
    }
  }
}

</script>