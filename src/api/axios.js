import axios from 'axios'
import {Message} from 'element-ui'
const service = axios.create({
    baseURL:'/api',
    timeout:8000,

})
service.interceptors.response.use((response)=>{
    let res=response.data;
    let path=location.hash;
    if(res.status===0){
        return res.data
    }else if(res.status===10){
        if(path!='#/index'){
            window.location.href='/#/login';
        }
        return Promise.reject(res);
    }else{
        alert(res.msg);
        return Promise.reject(res);
    }
},(error)=>{
    let res=error.response;
    Message.error(res.data.message)
    return Promise.reject(error)
})
export default service