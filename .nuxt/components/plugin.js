import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  WelcomeWelAbout: () => import('../../components/welcome/welAbout.vue' /* webpackChunkName: "components/welcome-wel-about" */).then(c => wrapFunctional(c.default || c)),
  WelcomeWelAppBar: () => import('../../components/welcome/welAppBar.vue' /* webpackChunkName: "components/welcome-wel-app-bar" */).then(c => wrapFunctional(c.default || c)),
  WelcomeWelCompany: () => import('../../components/welcome/welCompany.vue' /* webpackChunkName: "components/welcome-wel-company" */).then(c => wrapFunctional(c.default || c)),
  WelcomeWelContact: () => import('../../components/welcome/welContact.vue' /* webpackChunkName: "components/welcome-wel-contact" */).then(c => wrapFunctional(c.default || c)),
  WelcomeWelPrice: () => import('../../components/welcome/welPrice.vue' /* webpackChunkName: "components/welcome-wel-price" */).then(c => wrapFunctional(c.default || c)),
  WelcomeWelProducts: () => import('../../components/welcome/welProducts.vue' /* webpackChunkName: "components/welcome-wel-products" */).then(c => wrapFunctional(c.default || c)),
  UiAppLogo: () => import('../../components/ui/appLogo.vue' /* webpackChunkName: "components/ui-app-logo" */).then(c => wrapFunctional(c.default || c)),
  UiAppTitle: () => import('../../components/ui/appTitle.vue' /* webpackChunkName: "components/ui-app-title" */).then(c => wrapFunctional(c.default || c)),
  BeforeLoginBefLoginAppBar: () => import('../../components/beforeLogin/befLoginAppBar.vue' /* webpackChunkName: "components/before-login-bef-login-app-bar" */).then(c => wrapFunctional(c.default || c)),
  BeforeLoginBefLoginFooter: () => import('../../components/beforeLogin/befLoginFooter.vue' /* webpackChunkName: "components/before-login-bef-login-footer" */).then(c => wrapFunctional(c.default || c)),
  BeforeLoginBefLoginFormCard: () => import('../../components/beforeLogin/befLoginFormCard.vue' /* webpackChunkName: "components/before-login-bef-login-form-card" */).then(c => wrapFunctional(c.default || c)),
  BeforeLoginLink: () => import('../../components/beforeLogin/loginLink.vue' /* webpackChunkName: "components/before-login-link" */).then(c => wrapFunctional(c.default || c)),
  BeforeLoginSignupLink: () => import('../../components/beforeLogin/signupLink.vue' /* webpackChunkName: "components/before-login-signup-link" */).then(c => wrapFunctional(c.default || c)),
  UserFormEmail: () => import('../../components/user/userFormEmail.vue' /* webpackChunkName: "components/user-form-email" */).then(c => wrapFunctional(c.default || c)),
  UserFormName: () => import('../../components/user/userFormName.vue' /* webpackChunkName: "components/user-form-name" */).then(c => wrapFunctional(c.default || c)),
  UserFormPassword: () => import('../../components/user/userFormPassword.vue' /* webpackChunkName: "components/user-form-password" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
