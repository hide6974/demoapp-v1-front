import { wrapFunctional } from './utils'

export { default as UiAppLogo } from '../../components/ui/appLogo.vue'
export { default as UiAppTitle } from '../../components/ui/appTitle.vue'
export { default as BeforeLoginBefLoginAppBar } from '../../components/beforeLogin/befLoginAppBar.vue'
export { default as BeforeLoginBefLoginFooter } from '../../components/beforeLogin/befLoginFooter.vue'
export { default as BeforeLoginBefLoginFormCard } from '../../components/beforeLogin/befLoginFormCard.vue'
export { default as BeforeLoginLink } from '../../components/beforeLogin/loginLink.vue'
export { default as BeforeLoginSignupLink } from '../../components/beforeLogin/signupLink.vue'
export { default as UserFormEmail } from '../../components/user/userFormEmail.vue'
export { default as UserFormName } from '../../components/user/userFormName.vue'
export { default as UserFormPassword } from '../../components/user/userFormPassword.vue'
export { default as WelcomeWelAbout } from '../../components/welcome/welAbout.vue'
export { default as WelcomeWelAppBar } from '../../components/welcome/welAppBar.vue'
export { default as WelcomeWelCompany } from '../../components/welcome/welCompany.vue'
export { default as WelcomeWelContact } from '../../components/welcome/welContact.vue'
export { default as WelcomeWelPrice } from '../../components/welcome/welPrice.vue'
export { default as WelcomeWelProducts } from '../../components/welcome/welProducts.vue'
export { default as LoggedInAppBar } from '../../components/loggedIn/header/loggedInAppBar.vue'

export const LazyUiAppLogo = import('../../components/ui/appLogo.vue' /* webpackChunkName: "components/ui-app-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyUiAppTitle = import('../../components/ui/appTitle.vue' /* webpackChunkName: "components/ui-app-title" */).then(c => wrapFunctional(c.default || c))
export const LazyBeforeLoginBefLoginAppBar = import('../../components/beforeLogin/befLoginAppBar.vue' /* webpackChunkName: "components/before-login-bef-login-app-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyBeforeLoginBefLoginFooter = import('../../components/beforeLogin/befLoginFooter.vue' /* webpackChunkName: "components/before-login-bef-login-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyBeforeLoginBefLoginFormCard = import('../../components/beforeLogin/befLoginFormCard.vue' /* webpackChunkName: "components/before-login-bef-login-form-card" */).then(c => wrapFunctional(c.default || c))
export const LazyBeforeLoginLink = import('../../components/beforeLogin/loginLink.vue' /* webpackChunkName: "components/before-login-link" */).then(c => wrapFunctional(c.default || c))
export const LazyBeforeLoginSignupLink = import('../../components/beforeLogin/signupLink.vue' /* webpackChunkName: "components/before-login-signup-link" */).then(c => wrapFunctional(c.default || c))
export const LazyUserFormEmail = import('../../components/user/userFormEmail.vue' /* webpackChunkName: "components/user-form-email" */).then(c => wrapFunctional(c.default || c))
export const LazyUserFormName = import('../../components/user/userFormName.vue' /* webpackChunkName: "components/user-form-name" */).then(c => wrapFunctional(c.default || c))
export const LazyUserFormPassword = import('../../components/user/userFormPassword.vue' /* webpackChunkName: "components/user-form-password" */).then(c => wrapFunctional(c.default || c))
export const LazyWelcomeWelAbout = import('../../components/welcome/welAbout.vue' /* webpackChunkName: "components/welcome-wel-about" */).then(c => wrapFunctional(c.default || c))
export const LazyWelcomeWelAppBar = import('../../components/welcome/welAppBar.vue' /* webpackChunkName: "components/welcome-wel-app-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyWelcomeWelCompany = import('../../components/welcome/welCompany.vue' /* webpackChunkName: "components/welcome-wel-company" */).then(c => wrapFunctional(c.default || c))
export const LazyWelcomeWelContact = import('../../components/welcome/welContact.vue' /* webpackChunkName: "components/welcome-wel-contact" */).then(c => wrapFunctional(c.default || c))
export const LazyWelcomeWelPrice = import('../../components/welcome/welPrice.vue' /* webpackChunkName: "components/welcome-wel-price" */).then(c => wrapFunctional(c.default || c))
export const LazyWelcomeWelProducts = import('../../components/welcome/welProducts.vue' /* webpackChunkName: "components/welcome-wel-products" */).then(c => wrapFunctional(c.default || c))
export const LazyLoggedInAppBar = import('../../components/loggedIn/header/loggedInAppBar.vue' /* webpackChunkName: "components/logged-in-app-bar" */).then(c => wrapFunctional(c.default || c))
