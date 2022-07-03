<template>
  <table class="table-users table table-striped table-hover">
  <tbody>
    <TableUsersItem v-for="(user, index) in users" :key="user.id" :user="user" :index="index"/>
  </tbody>
</table>
</template>

<script>
import TableUsersItem from '@/components/TableUsers/TableUsersItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'TableUsers',
  components: { TableUsersItem },

  computed: {
    ...mapGetters({
      users: 'getUsers',
    }),
  },
};
</script>
