<template>
  <div>
    <logged-in-nav-drawer 
     :drawer.sync="drawer"
    />
    <logged-in-app-bar>
      <template v-slot:nav-icon>
        <v-app-bar-nav-icon 
         @click="drawer = !drawer" 
        />
      </template>
    </logged-in-app-bar>
  </div>
</template>

<script>
import loggedInAppBar from '~/components/loggedIn/header/loggedInAppBar'

export default {
  components: {
    loggedInAppBar
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>