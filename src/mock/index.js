import Mock from 'mockjs';
// const Mock=require('mockjs')
export const userData = Mock.mock("/data/list","get",{
  code: 200,
  message: 'ok',
  data:{
    id: '@id',
    name: '@name',
    age: '@integer(20, 50)',
  }
})