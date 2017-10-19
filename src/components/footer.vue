<template>
  <div id="footer">
    <ul>
      <li><router-link to="/invite">Invite a friend</router-link></li>
      <li><router-link to="/contact">Contact us</router-link></li>
    </ul>
  </div>
</template>



<script>

</script>



<style>

#footer {
  width: 88%;
  position: absolute;
  bottom: 0px;
  height: 71px;
  border-top: 8px solid rgb(0,0,139);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #343434
}

#footer ul {
  margin: 15px 0 10px 0;
  text-align: center
}

#footer li {
  display: inline;
  list-style-type: none;
}

#footer li a {
  color: #343434;
  text-decoration: none;
  margin: 0 5px
}

#footer li a:visited {
  text-decoration: none
}

#footer li a:hover {
  text-decoration: underline
}

#footer p {
  text-align: center
}

</style>
