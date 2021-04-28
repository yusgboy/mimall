import axios from 'axios'
const service = axios.create({
    baseURL:'/api',
    timeout:8000,

})
service.interceptors.response.use((response)=>{
    let res=response.data;
    if(res.status===0){
        return res.data
    }else if(res.status===10){
        window.location.href='/#/login';
    }else{
        alert(res.msg)
    }
})
export default service