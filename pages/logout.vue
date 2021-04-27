<template>
  <div></div>
</template>

<script>
export default {
  layout: 'none',
  async beforeCreate() {
    this.$router.push({ name: "login" });
  }
}
</script>
