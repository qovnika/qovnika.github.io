import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _884f58ea = () => interopDefault(import('../pages/company-info/index.vue' /* webpackChunkName: "pages/company-info/index" */))
const _3dd00806 = () => interopDefault(import('../pages/dashboard/index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _9b1a4202 = () => interopDefault(import('../pages/forgot-email/index.vue' /* webpackChunkName: "pages/forgot-email/index" */))
const _59cb90a4 = () => interopDefault(import('../pages/forgot-password/index.vue' /* webpackChunkName: "pages/forgot-password/index" */))
const _eabc6b5e = () => interopDefault(import('../pages/invite-users/index.vue' /* webpackChunkName: "pages/invite-users/index" */))
const _c71f87b6 = () => interopDefault(import('../pages/loading/index.vue' /* webpackChunkName: "pages/loading/index" */))
const _7a609192 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _442e9368 = () => interopDefault(import('../pages/login-password/index.vue' /* webpackChunkName: "pages/login-password/index" */))
const _69ae02a6 = () => interopDefault(import('../pages/reset-password/index.vue' /* webpackChunkName: "pages/reset-password/index" */))
const _59035f5c = () => interopDefault(import('../pages/reset-password-success/index.vue' /* webpackChunkName: "pages/reset-password-success/index" */))
const _6dae1ea0 = () => interopDefault(import('../pages/select-license-type/index.vue' /* webpackChunkName: "pages/select-license-type/index" */))
const _0d77f9a5 = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _3b4bcf56 = () => interopDefault(import('../pages/verify-email/index.vue' /* webpackChunkName: "pages/verify-email/index" */))
const _a1829a02 = () => interopDefault(import('../pages/company-info/main.js' /* webpackChunkName: "pages/company-info/main" */))
const _b3a4e91a = () => interopDefault(import('../pages/forgot-email/main.js' /* webpackChunkName: "pages/forgot-email/main" */))
const _b63d783c = () => interopDefault(import('../pages/forgot-password/main.js' /* webpackChunkName: "pages/forgot-password/main" */))
const _75632345 = () => interopDefault(import('../pages/invite-users/main.js' /* webpackChunkName: "pages/invite-users/main" */))
const _f04a5c00 = () => interopDefault(import('../pages/login-password/main.js' /* webpackChunkName: "pages/login-password/main" */))
const _36067274 = () => interopDefault(import('../pages/login/main.js' /* webpackChunkName: "pages/login/main" */))
const _1ea701e0 = () => interopDefault(import('../pages/reset-password-success/main.js' /* webpackChunkName: "pages/reset-password-success/main" */))
const _715b6cda = () => interopDefault(import('../pages/reset-password/main.js' /* webpackChunkName: "pages/reset-password/main" */))
const _b6738158 = () => interopDefault(import('../pages/select-license-type/main.js' /* webpackChunkName: "pages/select-license-type/main" */))
const _5e35d0ce = () => interopDefault(import('../pages/signup/main.js' /* webpackChunkName: "pages/signup/main" */))
const _e7c1bb6e = () => interopDefault(import('../pages/verify-email/main.js' /* webpackChunkName: "pages/verify-email/main" */))
const _73599f38 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/company-info",
    component: _884f58ea,
    name: "company-info"
  }, {
    path: "/dashboard",
    component: _3dd00806,
    name: "dashboard"
  }, {
    path: "/forgot-email",
    component: _9b1a4202,
    name: "forgot-email"
  }, {
    path: "/forgot-password",
    component: _59cb90a4,
    name: "forgot-password"
  }, {
    path: "/invite-users",
    component: _eabc6b5e,
    name: "invite-users"
  }, {
    path: "/loading",
    component: _c71f87b6,
    name: "loading"
  }, {
    path: "/login",
    component: _7a609192,
    name: "login"
  }, {
    path: "/login-password",
    component: _442e9368,
    name: "login-password"
  }, {
    path: "/reset-password",
    component: _69ae02a6,
    name: "reset-password"
  }, {
    path: "/reset-password-success",
    component: _59035f5c,
    name: "reset-password-success"
  }, {
    path: "/select-license-type",
    component: _6dae1ea0,
    name: "select-license-type"
  }, {
    path: "/signup",
    component: _0d77f9a5,
    name: "signup"
  }, {
    path: "/verify-email",
    component: _3b4bcf56,
    name: "verify-email"
  }, {
    path: "/company-info/main",
    component: _a1829a02,
    name: "company-info-main"
  }, {
    path: "/forgot-email/main",
    component: _b3a4e91a,
    name: "forgot-email-main"
  }, {
    path: "/forgot-password/main",
    component: _b63d783c,
    name: "forgot-password-main"
  }, {
    path: "/invite-users/main",
    component: _75632345,
    name: "invite-users-main"
  }, {
    path: "/login-password/main",
    component: _f04a5c00,
    name: "login-password-main"
  }, {
    path: "/login/main",
    component: _36067274,
    name: "login-main"
  }, {
    path: "/reset-password-success/main",
    component: _1ea701e0,
    name: "reset-password-success-main"
  }, {
    path: "/reset-password/main",
    component: _715b6cda,
    name: "reset-password-main"
  }, {
    path: "/select-license-type/main",
    component: _b6738158,
    name: "select-license-type-main"
  }, {
    path: "/signup/main",
    component: _5e35d0ce,
    name: "signup-main"
  }, {
    path: "/verify-email/main",
    component: _e7c1bb6e,
    name: "verify-email-main"
  }, {
    path: "/",
    component: _73599f38,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
