<template>
  <b-container>
    <h1 class="text-center mb-5 mt-5">Autocomplete Search Box</h1>

    <b-row class="d-flex flex-column align-items-center justify-content-center">
      <AddUserForm />
      <b-button
        class="show-all-friends mb-3"
        variant="success"
      >
        Показать всех друзей пользователей
      </b-button>
      <TableUsers />
    </b-row>

  </b-container>
</template>

<script>
import AddUserForm from '@/components/AddUserForm.vue';
import TableUsers from '@/components/TableUsers/TableUsers.vue';

export default {
  name: 'HomeView',
  components: { AddUserForm, TableUsers },
};
</script>

<style lang="scss" scoped>
  .search-form {
    max-width: 600px;
    padding: 0;
  }

  .show-all-friends {
    width: auto;
  }
</style>
