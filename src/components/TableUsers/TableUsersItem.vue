<template>
  <tr class="table-users-row">
    <td>{{index + 1}}</td>
    <td>{{user.name}}</td>
  </tr>
</template>

<script>
export default {
  name: 'TableUsersItem',
  props: ['user', 'index'],
};
</script>

<style lang="scss" scoped>
  .table-users-row {
    cursor: pointer;
  }
  .table-users-row__link {
    width: 100%;
    display: block;
    text-decoration: none;
    color: inherit;
  }
</style>
