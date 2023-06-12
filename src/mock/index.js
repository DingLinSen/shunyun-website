// 引入Mock
import { mock } from 'mockjs'

mock('/getNavList', 'get', {
  code: 200,
  data: {
    'data|7': [
      {
        'id|+1': 0,
        name: '网站首页',
      },
    ],
  },
})

mock('/getBanner', 'get', {
  code: 200,
  data: {
    'data|2': [
      {
        'id|+1': 0,
        img_url: '@image',
      },
    ],
  },
})
mock('/getServiceContent', 'get', {
  code: 200,
  data: {
    'data|5': [
      {
        'id|+1': 0,
        title: '智慧园区',
        content: '把数字世界带入园区,助力智慧转型',
        icon: 'el-icon-phone',
      },
    ],
  },
})
