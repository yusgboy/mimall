import axios from 'axios'
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
    }else{
        alert(res.msg);
        return Promise.reject(res);
    }
})
export default service