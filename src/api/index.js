import request from '@/utils/request'

// 获取导航栏
export function getNavList(params) {
  return request({
    url: '/api/getNavList',
    method: 'get',
    params,
  })
}
// 获取轮播图
export function getBanner(params) {
  return request({
    url: '/api/getBanner',
    method: 'get',
    params,
  })
}
// 获取图标导航栏
export function getServiceContent(params) {
  return request({
    url: '/api/getServiceContent',
    method: 'get',
    params,
  })
}
//获取成功案例的数据
export function getSuccessData(){
  return request({
    url:"/api/successData",
    method:"get"
  })
}
//获取公司简介内容
export function getIntroduction(){
  return request({
    url:"/api/introduction",
    method:"get"
  })
}
