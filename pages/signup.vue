<template>
 <div class="main">
   <bef-login-form-card></bef-login-form-card>
    <p><slot name="form-card-content"></slot></p>
    <v-form
      ref="form"
      v-model="isValid"
    >    
      <user-form-name :name.sync="params.user.name"></user-form-name>
      <user-form-email :email.sync="params.user.email"></user-form-email>
      <user-form-password :password.sync="params.user.password"></user-form-password>
      <v-btn
        :disabled="!isValid || loading"
        :loading="loading"
        block
        color="myblue"
        class="white--text"
        @click="signup"
      >
        登録する
      </v-btn>
    </v-form>
 </div>
</template>

<script>
import befLoginFormCard from '~/components/beforeLogin/befLoginFormCard'
import userFormEmail from '~/components/user/userFormEmail'
import userFormName from '~/components/user/userFormName'
import userFormPassword from '~/components/user/userFormPassword'

export default {
  components: {
    befLoginFormCard,
    userFormEmail,
    userFormName,
    userFormPassword
  },
  layout: 'beforeLogin',
  data () {
    return {
      isValid: false,
      loading: false,
      params: { user: { name: '', email: '', password: '' } }
    }
  },
  methods: {
    signup () {
      this.loading = true
      setTimeout(() => {
        this.formReset()
        this.loading = false
      }, 1500)
    },
    formReset () {
      this.$refs.form.reset()
      this.params = { user: { name: '', email: '', password: '' } }
    }
  }
}
</script>