<template>
  <div class="about">
    <h1>Form binding test</h1>
    <hr>
    <UserSelect />
    <UserDetailForm />
  </div>
</template>

<script>
import UserSelect from '@/components/UserSelect'
import UserDetailForm from '@/components/UserDetailForm'

export default {
  components: {
    UserSelect,
    UserDetailForm
  }
}
</script>

<style scoped>

</style>
