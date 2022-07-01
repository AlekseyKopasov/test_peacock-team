<template>
  <table class="table-users table table-striped table-hover">
  <tbody>

    <TableUsersItem v-for="user in userList" key="user.id" user="user"/>
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
    userList() {
      ...mapGetters(['getUsers'])
    },
  },
};
</script>
