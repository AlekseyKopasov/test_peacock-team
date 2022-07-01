<template>
  <b-form class="search-form mb-4">
    <b-form-input
      class="me-2"
      type="text"
      placeholder="Имя или индификатор пользователя ВК...">
    </b-form-input>
    <b-button variant="outline-success">Добавить</b-button>
  </b-form>
</template>

<script>
export default {
  name: 'SearchForm',
};
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
  max-width: 600px;
  padding: 0;
}
</style>
