<template>
  <logged-in-container>
    <template v-slot:my-content>
    {{ $store.state.current.project }}
    </template>    
  </logged-in-container>
</template>

<script>
export default { 
}
</script>