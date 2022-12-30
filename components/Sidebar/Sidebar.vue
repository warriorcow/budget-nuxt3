<template>
  <div class="sidebar">
    <NuxtLink class="sidebar__logo" to="/">
      <img src="~/assets/img/logo.svg" alt="logo">
      FINANCE
    </NuxtLink>
    <div class="sidebar__navigation">
      <NuxtLink class="sidebar__link" to="/cash-accounts">
        <div class="sidebar__icon"></div>
        Счета
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.sidebar {
  min-width: 300px;
  padding: 20px;
  box-shadow: 3px 0 20px 5px #d1d1d1;

  &__navigation {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  &__logo {
    display: flex;
    align-items: flex-end;
    width: 50px;
    text-align: center;
    font-size: 20px;
    font-family: 'Chalkboard', sans-serif;


    img {
      fill: red;
    }

    span {
      font-size: 32px;
      font-family: 'RubikSprayPaint', sans-serif;
    }
  }

  &__link {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__icon {
    width: 20px;
    height: 20px;
    background-color: teal;
    border-radius: 100%;
    margin-right: 15px;
  }
}
</style>
