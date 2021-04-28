import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _83dfe29a = () => interopDefault(import('../pages/account.vue' /* webpackChunkName: "pages/account" */))
const _035228b2 = () => interopDefault(import('../pages/account/password.vue' /* webpackChunkName: "pages/account/password" */))
const _07382da2 = () => interopDefault(import('../pages/account/settings.vue' /* webpackChunkName: "pages/account/settings" */))
const _10ba8d22 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _49c57cf4 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _490e6182 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _b67787aa = () => interopDefault(import('../pages/project/_id/components.vue' /* webpackChunkName: "pages/project/_id/components" */))
const _3c010e0f = () => interopDefault(import('../pages/project/_id/dashboard.vue' /* webpackChunkName: "pages/project/_id/dashboard" */))
const _e63ac6d4 = () => interopDefault(import('../pages/project/_id/help.vue' /* webpackChunkName: "pages/project/_id/help" */))
const _414ee844 = () => interopDefault(import('../pages/project/_id/layouts.vue' /* webpackChunkName: "pages/project/_id/layouts" */))
const _0b123682 = () => interopDefault(import('../pages/project/_id/pages.vue' /* webpackChunkName: "pages/project/_id/pages" */))
const _652161f8 = () => interopDefault(import('../pages/project/_id/settings.vue' /* webpackChunkName: "pages/project/_id/settings" */))
const _2dfb1658 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _83dfe29a,
    name: "account",
    children: [{
      path: "password",
      component: _035228b2,
      name: "account-password"
    }, {
      path: "settings",
      component: _07382da2,
      name: "account-settings"
    }]
  }, {
    path: "/login",
    component: _10ba8d22,
    name: "login"
  }, {
    path: "/logout",
    component: _49c57cf4,
    name: "logout"
  }, {
    path: "/signup",
    component: _490e6182,
    name: "signup"
  }, {
    path: "/project/:id?/components",
    component: _b67787aa,
    name: "project-id-components"
  }, {
    path: "/project/:id?/dashboard",
    component: _3c010e0f,
    name: "project-id-dashboard"
  }, {
    path: "/project/:id?/help",
    component: _e63ac6d4,
    name: "project-id-help"
  }, {
    path: "/project/:id?/layouts",
    component: _414ee844,
    name: "project-id-layouts"
  }, {
    path: "/project/:id?/pages",
    component: _0b123682,
    name: "project-id-pages"
  }, {
    path: "/project/:id?/settings",
    component: _652161f8,
    name: "project-id-settings"
  }, {
    path: "/",
    component: _2dfb1658,
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
