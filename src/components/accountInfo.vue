<template>
  <div>
    <div v-show="isForm == false && isChangePassword == false" id="displayPage">
      <h2>Username: {{tempUser.username}}</h2>
       <p></p>
      <h2>First Name: {{tempUser.firstName}}  Last Name: {{tempUser.lastName}}</h2>
      <h2>Birthday: {{tempUser.birthday}}</h2>
      <h2>Gender: {{tempUser.Gender}}</h2>
      <h2>Email: {{tempUser.email}}</h2>

      <ul>
        <li><button v-on:click="toggleForm">Edit</button></li>
        <li><button v-show="passSucc == false" v-on:click="togglePassword">Change Password</button></li>
      </ul>
      <label v-show="passSucc == true">Password Successfully changed</label>
    </div>
    <div v-show="isForm == true" id="formPage">

        <label>First Name:</label><br><br>
        <input v-model="tempUser.firstName" type="text" name="fName"><br><br>
        <label>Last Name:</label><br><br>
        <input v-model="tempUser.lastName" type="text" name="lName"><br><br>
        <label>Gender:</label><br><br>
        <input v-model="tempUser.Gender" type="text" name="Gen"><br><br>
        <label>Birthday:</label><br><br>
        <input v-model="tempUser.birthday" type="text" name="bDay">
        <ul>
          <li><button v-on:click="toggleForm">Finish Editing</button></li>
        </ul>
      
    </div>
    <div v-show="isChangePassword == true" id="passwordFields">
      <label>Enter Current Password</label>
      <input v-model="oldPassAttempt" type="text" name="oldPass">
      <label>Enter New Password</label>
      <input v-model="newPass" type="text" name="newPass">
      <button v-on:click="togglePassword">Change Password</button>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tempUser: {
        username: "temp",
        firstName: "temp",
        lastName: "temp",
        birthday: "1/1/99",
        Gender: "Social Construct",
        password: "never",
        email: "temp@temp.com",
      },
      isForm: false,
      isChangePassword: false,
      oldPassAttempt: "",
      newPass: "",
      passSucc: false,
      temp: ""
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
      },
      sendChanges: function() {
          //this will send information to database
          console.log(this.AtObject);
      },
      togglePassword: function() {
        if (this.isChangePassword == true) {
            //this will check password against database. The way here is too insecure
            this.checkPassword();
            this.isChangePassword = false;
        }
        else {
          this.isChangePassword = true;
        }
      },
      checkPassword: function() {
        console.log(this.oldPassAttempt);
        console.log(this.tempUser.password);
        //this will get changed to be more secure
        if(this.oldPassAttempt === this.tempUser.password) {
          this.passSucc = true;
          //update database
          this.tempUser.password = this.newPass;
        }
      }
  }
}
//This page needs to be styled
</script>

<style scoped>
h2 {
  font-family: sans-serif;
}
ul {
  display: inline-block;
}
li {
  display: inline-block;
  margin-left: 20px;
}

</style>
