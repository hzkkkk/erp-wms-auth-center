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

// 获取协议内容
export function getXieyi() {
    return request({
        url: `${window.location.href}/xieyi.html`, // 访问到的是 public/xieyi.html
        method: 'get'
    })
}


// 查询用户名是否已被注册
export function getUserByUsername(username) {
    return request({
        url: `/system/api/user/username/${username}`,
        method: 'get'
    })
}


// 提交注册数据
export function register(data) {
    return request({
        headers,
        auth,
        url: `/system/api/user/register`,
        method: 'post',
        params: data
    })
}