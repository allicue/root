import axios from 'axios'

let apiUrl

const apiUrls = {
  production: '',  // we will have to put the heroku url there later. for example https://root-api.herokuapp.com/api
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development 
} else {
  apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl
})

export default api