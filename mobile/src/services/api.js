import axios from 'axios'


const api = axios.create({
    baseURL:'http://192.168.0.2:4444/',

})

export default api 