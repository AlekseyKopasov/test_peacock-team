<template>
  <b-form class="search-form mb-4" @submit.prevent="search">
    <b-form-input
      v-model="name"
      class="me-2"
      type="text"
      placeholder="Имя или индификатор пользователя ВК..."
    >
    </b-form-input>
    <b-button
      type="submit"
      variant="outline-success"
    >
      Добавить
    </b-button>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddUserForm',
  data: () => ({
    name: '',
  }),
  methods: {
    ...mapActions({ fetchUser: 'searchUser' }),
    search() {
      if (this.name) {
        this.fetchUser(this.name);
      }
      this.name = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
  max-width: 600px;
  padding: 0;
}
</style>
