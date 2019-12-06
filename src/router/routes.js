
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home/Index.vue') }
    ]
  },
  {
    path: '/more',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/More/Index.vue') }
    ]
  },
  {
    path: '/authsuccess/:x/:y',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
