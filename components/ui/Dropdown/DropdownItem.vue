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

  &:hover {
    background-color: $color-default;
    color: $color-white;
  }
}
</style>
