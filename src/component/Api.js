import axios from 'axios';
export const baseUrl = 'http://localhost:3300/api';

export default {
    /** AUTH */
    auth(email, password) {
        // const formData = new FormData();
        // formData.append('email', email);
        // formData.append('password', password);
        var payload = {
            email : email,
            password : password
        }
        return axios.post(baseUrl + '/auth', payload);
    },

    /** Get Product */
    getProducts() {
        return axios.get(baseUrl + '/product');
    },
    updateProduct(Id,productName,productDescription,imageUrl) {
        var payload = {
            productName : productName,
            productDescription : productDescription,
            imageUrl:imageUrl
        } 
        return axios.patch(baseUrl + '/product/'+Id,payload);
    },
    addProduct(productName,productDescription,imageUrl) {
        var payload = {
            productName : productName,
            productDescription : productDescription,
            imageUrl:imageUrl
        } 
        return axios.post(baseUrl + '/product',payload);
    },
}