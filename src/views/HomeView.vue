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
      <b-list-group class="result-list mb-4 shadow">
        <ResultItem />
        <b-list-group-item href="#" class="result-item"
                           active>Link with active state</b-list-group-item>
      </b-list-group>
      <b-button class="w-auto">Построить</b-button>
    </b-row>

  </b-container>
</template>

<script>

import ResultItem from '@/components/ResultItem.vue';

export default {
  name: 'HomeView',
  components: { ResultItem },
};
</script>

<style lang="scss" scoped>
  .search-form,
  .result-list {
    max-width: 600px;
    padding: 0;
  }

  .list-group-item.active {
    width: calc(100% + 20px);
    margin-left: -10px;
  }
</style>
