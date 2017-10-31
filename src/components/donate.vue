<template>
	<div>
		<div v-show="show===false">
			<h3>Thanks for the money!!!</h3>
		</div>
		<div v-show="show===true" >
			<PayPal
				amount="1.00"
				currency="USD"
				:dev="true"
				:client='credentials'
				v-on:paypal-paymentCompleted="changeBool($event)"
				></PayPal>
		</div>
	</div>
</template>

<script>

import PayPal from 'vue-paypal-checkout'
export default {

  data () {
    return {
    	credentials: {
    		sandbox: "AaabrPP3UWw--QGiWf582u1guSIUjx0ItPqm1ocI26OEZ4E5SiM1DwC_HsXzsF8vEkw2-qbMdchCbnNr",
    		production: "AdtCNixFoW4ZzTOf0g_D4986xLwR9ZvD17JU2Y9LHFA4YazJQvXlY9AFlYbgUxnakV36Eh4_J_Bwybev",
 		},
 		show: true,
    }
  },
  methods: {
  	changeBool($event) {
  		console.log($event);
  		if (this.show == true) {
              this.show = false;
            }
            else {
              this.show = true;
            }
  	}	
  },
  components: {
  	PayPal
  },
}

</script>
