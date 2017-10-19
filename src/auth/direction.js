import {router} from '../main'
import axios from 'axios';
import Routes from '../routes'

// URL and endpoint constants
const API_URL = 'http://localhost:3000/'
const CREATE_URL = API_URL + 'cory/create'
const UPDATE_URL = API_URL + 'cory/update'


export default {
  create(context, newobj, redirect) {
    axios.post(CREATE_URL, newobj)
      .then((response) => {
          if(response.data.success === false) {
              context.error = response.data.message;
          } else {
              if(redirect) {
                  console.log("here");
                  context.$router.push(redirect)
              }
          }
      })
      .catch((error) => {
          context.error = error
      })
  }

}
