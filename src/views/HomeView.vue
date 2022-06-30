<template>
  <b-container>
    <h1 class="text-center mb-5 mt-5">Autocomplete Search Box</h1>

    <b-row class="d-flex flex-column align-items-center justify-content-center">
      <b-form class="search-form mb-4">
        <b-form-input
          type="search"
          placeholder="Имя или индификатор пользователя ВК...">
        </b-form-input>
      </b-form>
      <FriendsList />
      <b-button class="w-auto">Построить</b-button>
    </b-row>

  </b-container>
</template>

<script>

import FriendsList from '@/components/Friends/FriendsList.vue';

export default {
  name: 'HomeView',
  components: { FriendsList },
};
</script>

<style lang="scss" scoped>
  .search-form {
    max-width: 600px;
    padding: 0;
  }
</style>
