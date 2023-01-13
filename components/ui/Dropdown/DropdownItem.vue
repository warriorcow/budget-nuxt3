<template>
  <div class="ui-dropdown-item">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.ui-dropdown-item {
  width: 100%;
  padding: 10px 15px;
  cursor: pointer;
  color: $color-light;

  &:hover {
    background-color: $color-secondary;
    color: $color-default;
  }
}
</style>
