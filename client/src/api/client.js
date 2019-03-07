import request from '@/utils/request'
import axios from 'axios'
var clientParams = {
   Person: '',
   Mobile_Number: '',
   Currency: '',
   Company: '',
   work_Phone: '',
   Email: '',
   Billing_Address: '',
   Shipping_Address: ''
}

export function addPost(clientParams) {
    return axios({
        url: 'https://localhost:5001/api/client',
        method: 'post',
        data:{
            clientParams
        }
    })
}

export function get(Id, Person, Company, Email) {
    return request({
        url: '/api/client',
        method: 'get',
        data: {
            Id,
            Person, 
            Company, 
            Email
        }
    })
}

export function deletePost(params) {
    return request({
        url: 'https://localhost:5001/api/client',
        method: 'delete',
        data: {
         clientParams
        }
    })
}