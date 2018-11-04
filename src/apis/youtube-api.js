const axios = require('axios');

export  function fetchVideos() {
   return axios.get('url')
        .then(resp =>resp)
       .catch(err=>Promise.reject(err))
}