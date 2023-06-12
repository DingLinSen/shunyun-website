import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/homePage/homepage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/solution',
    name: 'solution',
    component: () => import('@/views/solution/solution'),
  },
  {
    path: '/businessCase',
    name: 'businessCase',
    component: () => import('@/views/businessCase/businessCase'),
  },
  {
    path: '/mediaCenter',
    name: 'mediaCenter',
    component: () => import('@/views/mediaCenter/mediaCenter'),
  },
  // {
  //     path: '/technicalService',
  //     name: 'technicalService',
  //     component: () => import('@/views/technicalService/technicalService'),
  // },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import('@/views/aboutUs/aboutUs'),
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('@/views/contactUs/contactUs'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/index'),
  },
  {
    path: '/park',
    name: 'park',
    component: () => import('@/views/solution/park'),
  },
  {
    path: '/medical',
    name: 'medical',
    component: () => import('@/views/solution/medical'),
  },
  {
    path: '/campus',
    name: 'campus',
    component: () => import('@/views/solution/campus'),
  },
  {
    path: '/architecture',
    name: 'architecture',
    component: () => import('@/views/solution/architecture'),
  },
  {
    path: '/bim',
    name: 'bim',
    component: () => import('@/views/solution/bim'),
  },
  {
    path: '/frontier',
    name: 'frontier',
    component: () => import('@/views/mediaCenter/frontier'),
  },
  {
    path: '/consultation',
    name: 'consultation',
    component: () => import('@/views/mediaCenter/consultation'),
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('@/views/mediaCenter/report'),
  },
  // {
  //     path: '/service',
  //     name: 'service',
  //     component: () => import('@/views/technicalService/service'),
  // },
  // {
  //     path: '/training',
  //     name: 'training',
  //     component: () => import('@/views/technicalService/training'),
  // },
  // {
  //     path: '/manual',
  //     name: 'manual',
  //     component: () => import('@/views/technicalService/manual'),
  // },
  {
    path: '/introduction',
    name: 'introduction',
    component: () => import('@/views/aboutUs/introduction'),
  },
  {
    path: '/culture',
    name: 'culture',
    component: () => import('@/views/aboutUs/culture'),
  },
  {
    path: '/gold',
    name: 'gold',
    component: () => import('@/views/aboutUs/gold'),
  },
  {
    path: '/qualification',
    name: 'qualification',
    component: () => import('@/views/aboutUs/qualification'),
  },
  {
    path: '/contactInformation',
    name: 'contactInformation',
    component: () => import('@/views/contactUs/contactInformation'),
  },
  {
    path: '/projectConsultation',
    name: 'projectConsultation',
    component: () => import('@/views/contactUs/projectConsultation'),
  },
  {
    path: '/joinUs',
    name: 'joinUs',
    component: () => import('@/views/contactUs/joinUs'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/index'),
  },
  {
    path: '/mediaContent',
    name: 'mediaContent',
    component: () => import('@/views/mediaCenter/mediaContent'),
  },
  {
    path: '/caseDetail',
    name: 'caseDetail',
    component: () => import('@/views/businessCase/caseDetail'),
  },
  {
    path: '/chemicalPlant',
    name: 'chemicalPlant',
    component: () => import('@/views/businessCase/chemicalPlant'),
  },
  {
    path: '/site',
    name: 'site',
    component: () => import('@/views/businessCase/site'),
  },
  {
    path: '/sjrg',
    name: 'sjrg',
    component: () => import('@/views/mediaCenter/sjrg'),
  },
  {
    path: '/sf',
    name: 'sf',
    component: () => import('@/views/mediaCenter/sf'),
  },
  {
    path: '/fzqs',
    name: 'fzqs',
    component: () => import('@/views/mediaCenter/fzqs'),
  },
  {
    path: '/jsyl',
    name: 'jsyl',
    component: () => import('@/views/mediaCenter/jsyl'),
  },
  {
    path: '/why',
    name: 'why',
    component: () => import('@/views/mediaCenter/why'),
  },
  {
    path: '/one',
    name: 'one',
    component: () => import('@/views/mediaCenter/one'),
  },
]

const router = new VueRouter({
  routes,
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err)
}
export default router
