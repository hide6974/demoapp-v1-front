<template>
  <div />
</template>

<script>
export default {
  // noneに変更
  layout: 'none',
  // 削除
  // layout: 'logout',
  async beforeCreate () {
    await this.$auth.logout()
    //this.$router.replace('/')
    this.$router.push({ name: "login" });
  }
}
</script>
