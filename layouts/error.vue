<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <v-card-title class="justify-center">
          {{ status }}
        </v-card-title>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'none',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    status () {
      return this.error.statusCode
    }
  }
}
</script>
