<template>
  <b-list-group-item
    class="result-item d-flex align-items-center justify-content-start"
    href="#some-link">
    <b-img
      class="result-item__avatar"
      src="https://picsum.photos/1024/400/?image=41"
      fluid
      alt="Responsive image">
    </b-img>
    <p>Имя
      <span class="result-item__name">Jon Dow</span>
    </p>
    <p>Пол
      <span class="result-item__sex">mail</span>
    </p>
    <p>Возраст
      <span class="result-item__age">26</span>
    </p>
    <p>Друзей
      <span class="result-item__friends">50</span>
    </p>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'ResultItem',
};
</script>

<style lang="scss">
  .result-item {
    align-items: center;
    min-height: 62px;
    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 15px 0 0;
      color: rgba(0, 0, 0, 0.5);

      &:first-of-type {
        margin-right: auto;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    span {
      color: #000000;
    }
  }

  .result-item__avatar {
    max-width: 50px;
    height: 50px;
    width: 100%;
    padding: 3px;
    margin-right: 15px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    object-fit: cover;
  }
</style>
