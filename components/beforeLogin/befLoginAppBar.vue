<template>
  <v-app-bar
    app
    :height="appBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <app-logo></app-logo>
    </nuxt-link>

    <app-title
      class="hidden-mobile-and-down"
    ></app-title>

    <v-spacer />

    <signup-link></signup-link>
    <login-link></login-link>
  </v-app-bar>
</template>

<script>
import appLogo from '~/components/ui/appLogo'
import appTitle from '~/components/ui/appTitle'
import signupLink from '~/components/beforeLogin/signupLink'
import loginLink from '~/components/beforeLogin/loginLink'

export default {
  components: {
    appLogo,
    appTitle,
    signupLink,
    loginLink
  },
  data ({ $store }) {
    return {
      appBarHeight: $store.state.styles.beforeLogin.appBarHeight
    }
  }
}
</script>