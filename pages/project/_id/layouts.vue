<template>
  <logged-in-container>
    <template v-slot:my-content>
    {{ $route.fullPath }}
    </template>    
  </logged-in-container>
</template>

<script>
export default { 
}
</script>