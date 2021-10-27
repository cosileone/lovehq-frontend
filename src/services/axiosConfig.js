import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  // timeout: 5000,
})

// https://blog-english.vedovelli.com.br/frontend-service-layer-axios-ajax-interceptors-vuejs-vuex/
httpClient.interceptors.request.use(
  (config) => {
    /*
     * Here you can add a header with a JWT token, ensuring it will be
     * sent with ALL your requests.
     */
    return config
  },
  (error) => Promise.reject(error)
)

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    /*
     * Here you can add a central error handling mechanism
     */
    // store.dispatch('setErrorMessage', { error: error.response.data });

    return Promise.reject(error)
  }
)

/*
 * Some Additional Reading
 * https://dev.to/blindkai/managing-api-layers-in-vue-js-with-typescript-hno
 * https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16
 * https://haxzie.com/architecting-http-clients-vue-js-network-layer
 * */

export default httpClient
