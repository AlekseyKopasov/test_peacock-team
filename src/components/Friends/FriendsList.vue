<template>
  <b-list-group class="friends-list mb-4 shadow">
    <FriendItem />
    <FriendItem />
    <FriendItem />
  </b-list-group>
</template>

<script>
import FriendItem from '@/components/Friends/FriendItem.vue';

export default {
  name: 'FriendsList',
  components: { FriendItem },
};
</script>

<style lang="scss" scoped>
.friends-list {
  max-width: 600px;
  padding: 0;
}
</style>
