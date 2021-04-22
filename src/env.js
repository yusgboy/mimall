let baseURL;
switch(process.env.NODE_ENV){
    case 'development':
        baseURL='http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL='http://test-mall-pre.springboot.cn/api';
    case 'prev':
        baseURL='http://prev-mall-pre.springboot.cn/api';
        break;
    case 'production':
        baseURL='http://pro-mall-pre.springboot.cn/api';
        break;
}
export default{
    baseURL
}