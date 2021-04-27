<template>
  <div class="signupLink">
    <v-btn
      outlined
      dark
      color="myblue"
      class="ml-2 font-weight-bold"
      to="/signup"
     >
       <div class="signuptext">
        {{ $t('pages.signup') }}
      </div>
    </v-btn>
  </div>
</template>

<script>
export default {
}
</script>