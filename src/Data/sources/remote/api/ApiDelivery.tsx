import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.1.77/api',
    headers: {
        'Content-Type': 'application/json'
    }
})


const ApiDeliveryForImage = axios.create({
    baseURL: 'http://192.168.1.77/api',
    headers: {
        'Content-Type': 'multipart/form-data',
        'accept': 'application/json'
    }
})

export {ApiDelivery, ApiDeliveryForImage}