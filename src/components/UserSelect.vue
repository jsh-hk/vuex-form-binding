<template>
    <select class="user-select">
      <option
        v-for="user in users"
        :key="user.id">
        {{user.name}}
      </option>
    </select>
</template>

<script>
export default {
  name: 'UserSelect',
  data () {
    return {
      users: [
        { id: 1, name: 'Testerson' },
        { id: 2, name: 'Besterson' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
