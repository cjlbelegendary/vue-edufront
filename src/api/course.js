import request from '@/utils/request'

export function getCourse(){
    return request({
        url:'/api/card/v1/list'
    })
}