import axios from 'axios';

//创建axios对象
const service = axios.create({
    // baseURL:'http://localhost:5173'
    baseURL:'https://cjlbelegendary.github.io/vue-edufront'
});

//请求拦截器
service.interceptors.request.use(config=>{
    return config;
},error=>{
    Promise.reject(error);
});

//响应拦截器
service.interceptors.response.use(
    (response)=>{
        // console.log("axios",response.data.data)
        return response.data.data;
    },
    error=>{
        return Promise.reject(new Error(error.response.data))
    }
)

export default service