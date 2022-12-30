<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.button {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  padding: 12px;
  cursor: pointer;
  background: teal;
  transition: 300ms;

  &:hover {
    background-color: #008080d1;
  }
}
</style>
