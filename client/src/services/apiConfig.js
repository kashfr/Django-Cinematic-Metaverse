import axios from axios

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://sei-products-api.herokuapp.com/api'
        : 'http://localhost:3000/api'
})