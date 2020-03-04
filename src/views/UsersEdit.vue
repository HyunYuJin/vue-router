<template>
  <div>
      <h1>Users Edit</h1>
      <p>유저 아이디: {{ userId }}</p>
  </div>
</template>

<script>
export default {
    computed: {
        userId() {
            return this.$route.params.id
        }
    }
}
</script>

<style>

</style>