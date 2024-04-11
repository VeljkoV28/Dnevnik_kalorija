import axios from "axios";


export const HttpService = axios.create({

    baseURL: 'http://veljko28-001-site1.ktempurl.com/api/v1',
    headers: {
        'Content-Type' : 'application/json'
    }


});