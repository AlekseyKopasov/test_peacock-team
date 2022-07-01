<template>
  <b-list-group-item
    class="friend-item d-flex align-items-center justify-content-start"
    href="#some-link">
    <p class="friend-item__avatar-wrap">
      <b-img
        class="friend-item__avatar"
        src="https://picsum.photos/1024/400/?image=41"
        fluid
        alt="Responsive image">
      </b-img>
    </p>
    <p class="friend-item__wrap friend-item__wrap--name">Имя
      <span class="friend-item__name">Jon Dow</span>
    </p>
    <p class="friend-item__wrap">Пол
      <span class="friend-item__sex">mail</span>
    </p>
    <p class="friend-item__wrap">Возраст
      <span class="friend-item__age">26</span>
    </p>
    <p class="friend-item__wrap">Друзей
      <span class="friend-item__count">50</span>
    </p>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'friendItem',
};
</script>

<style lang="scss" scoped>
  .friend-item {
    align-items: center;
    min-height: 62px;
    transition:
      width ease-in 0.3s,
      margin 0.3s ease-in,
      background-color 0.3s ease-in,
      color 0.6s ease-in;
  }

  .friend-item__avatar-wrap {
    position: relative;
    margin: 0 15px 0 0;
    max-width: 50px;
    height: auto;

    &::after {
      position: absolute;
      content: "";
      top: -3px;
      left: -3px;
      width: 53px;
      height: 53px;

      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  .friend-item__avatar {
    max-width: 47px;
    height: 47px;
    object-fit: cover;
    background-color: #000000;
  }

  .friend-item__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15px 0 0;
    color: rgba(0, 0, 0, 0.5);
    transition: color 0.3s ease-in;

    &:last-child {
      margin-right: 0;
    }

    &--name {
      margin-right: auto;
    }
    span {
      color: #000000;
      transition: color 0.3s ease-in;
    }
  }

  .friend-item:hover {
    width: calc(100% + 20px);
    margin-left: -10px;
    background-color:  #0d6efd;

    .friend-item__wrap,
    span {
      color: #ffffff;
    }
  }
</style>
