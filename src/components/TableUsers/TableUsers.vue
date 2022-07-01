<template>
  <table class="table-users table table-striped table-hover">
  <tbody>
    <TableUsersItem />
    <TableUsersItem />
    <TableUsersItem />
    <TableUsersItem />
    <TableUsersItem />
  </tbody>
</table>
</template>

<script>
import TableUsersItem from '@/components/TableUsers/TableUsersItem.vue';

export default {
  name: 'TableUsers',
  components: { TableUsersItem },
};
</script>

<style scoped>

</style>
