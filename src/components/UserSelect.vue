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
import { mapState } from 'vuex'

export default {
  name: 'UserSelect',

  computed: mapState(['users']),

  created () {
    this.$store.dispatch('GET_USERS')
      .then(() => {
        //
      })
  }

}
</script>

<style scoped>

</style>
