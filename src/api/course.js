import request from '@/utils/request'

//请求课程列表
export function getCourse(){
    return request({
        url:'/api/card/v1/list',
        method:'post'
    })
}