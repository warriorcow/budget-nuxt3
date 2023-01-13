<template>
  <div class="sidebar">
    <NuxtLink class="sidebar__logo" to="/">
      <div class="sidebar__logo-icon">
        <UiIconLogo />
      </div>
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
  box-shadow: 3px 0 20px 5px #121212;

  &__navigation {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  &__logo {
    display: flex;
    align-items: center;
    fill: $color-secondary;

    &-icon {
      width: 50px;
      height: 50px;
      margin-right: 10px;
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
    background-color: $color-secondary;
    border-radius: 100%;
    margin-right: 15px;
  }
}
</style>
