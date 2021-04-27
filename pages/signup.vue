<template>
 <div class="main">
   <bef-login-form-card></bef-login-form-card>
    <p><slot name="form-card-content"></slot></p>
    <v-form
      v-model="isValid"
    >    
      <user-form-name :name.sync="params.user.name"></user-form-name>
      <user-form-email :email.sync="params.user.email"></user-form-email>
      <user-form-password :password.sync="params.user.password"></user-form-password>
      <v-btn
        :disabled="!isValid"
        block
        color="myblue"
        class="white--text"
      >
        登録する
      </v-btn>
    </v-form>
    <v-card-text>
      {{ params }}
    </v-card-text>
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
      params: { user: { name: '', email: '', password: '' } }
    }
  }
}
</script>