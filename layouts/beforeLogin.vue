<template>
  <v-app>
    <!-- 追加 -->
    <bef-login-app-bar></bef-login-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <bef-login-footer></bef-login-footer>
  </v-app>
</template>
<script>
import befLoginAppBar  from '~/components/beforeLogin/befLoginAppBar'
import befLoginFooter  from '~/components/beforeLogin/befLoginAppBar'

export default {
  components: {
    befLoginAppBar,
    befLoginFooter
  },
}
</script>
