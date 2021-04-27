<template>
 <div class="main">
  <bef-login-form-card></bef-login-form-card>
    <p><slot name="form-card-content"></slot></p>
    <v-form
      ref="form"
      v-model="isValid"
    >
      <user-form-email :email.sync="params.auth.email" no-validation ></user-form-email>
      <user-form-password :password.sync="params.auth.password" no-validation></user-form-password>
      <v-card-actions>
        <nuxt-link
          to="#"
          class="body-2 text-decoration-none"
        >
          パスワードを忘れた?
        </nuxt-link>
      </v-card-actions>
      <v-card-text class="px-0">
        <v-btn
          :disabled="!isValid || loading"
          :loading="loading"
          block
          color="myblue"
          class="white--text"
          @click="login"
        >
          ログインする
        </v-btn>
      </v-card-text>
    </v-form>
  </div>
</template>

<script>
import befLoginFormCard from '~/components/beforeLogin/befLoginFormCard'
import userFormEmail from '~/components/user/userFormEmail'
import userFormPassword from '~/components/user/userFormPassword'

export default {
  components: {
    befLoginFormCard,
    userFormEmail,
    userFormPassword
  },
  layout: 'beforeLogin',
  data () {
    return {
      isValid: false,
      loading: false,
      params: { auth: { email: '', password: '' } }
    }
  },
  methods: {
    login () {
      this.loading = true
      setTimeout(() => {
        this.$store.dispatch('login')
        this.$router.replace('/')
        this.loading = false
      }, 1500)
    }
  }
}
</script>