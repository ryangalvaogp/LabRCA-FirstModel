import axios from 'axios';

 const Api= axios.create({
    baseURL: 'http://localhost:4444/'  
})
console.log(Api);
export default Api;