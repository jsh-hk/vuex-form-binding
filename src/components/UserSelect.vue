<template>
  <div class="user-select">
    <h3>Select a user</h3>
    <select
      v-model="users">
      <option
        v-for="user in users"
        :key="user.id">
        {{user.name}}
      </option>
    </select>
  </div>
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
select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
</style>
