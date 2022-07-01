<template>
  <b-container>
    <h1 class="text-center mb-5 mt-5">Список всех друзей пользователей</h1>

    <b-row class="d-flex flex-column align-items-center justify-content-center">
      <router-link
        class="btn btn-outline-primary mb-3 link-backwards" to="/">Назад</router-link>
      <FriendList />
    </b-row>

  </b-container>
</template>

<script>
import FriendList from '@/components/FriendList/FriendList.vue';

export default {
  name: 'HomeView',
  components: { FriendList },
};
</script>

<style lang="scss" scoped>
  .link-backwards {
    position: fixed;
    z-index: 1;
    left: 25px;
    top: 35%;
    width: auto;
  }
</style>
