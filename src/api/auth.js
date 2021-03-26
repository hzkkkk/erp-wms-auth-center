import request from '@/utils/request'


// 数据格式
// x-www-urlencoded 浏览器默认的编码格式
// multipart/form-data 常用于文件等二进制
const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

// 表单里面的数据：请求头添加 Authorization: Basic client_id:client_secret
const auth = {
    username: 'wms-admin', // client_id
    password: '123456' // client_secret
}

// 登录，获取 token 接口
export function login(data) {
    // 在提交表单的时候带上 auth
    return request({
        headers,
        auth,
        url: '/auth/login',
        method: 'post',
        params: data
    })
}