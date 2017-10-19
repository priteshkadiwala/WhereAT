<template>
  <div>

    <div v-show="isForm == true">
      <h1>Send an Invite</h1>
      <input id="email" type="text" name="description" placeholder="Enter an email">
      <button v-on:click="toggleForm">Submit</button>
    </div>
    <div v-show="isForm == false">
      <h1>Thanks! An Invite had been sent... Wohooo!!</h1>
    </div>
  </div>
</template>



<script>
export default {
  data () {
    return {
      isForm: true
    }
  },
  methods: {
    toggleForm: function() {
       if (this.isForm == true) {
           //this.sendChanges();
           this.isForm = false;
         }
         else {
           this.isForm = true;
         }
     }
  }
}

</script>



<style>


</style>
