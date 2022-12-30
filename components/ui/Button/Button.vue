<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: String
})
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: teal;
  color: #fff;
  border-radius: 10px;
  font-weight: 500;
  min-width: 100px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: #008080d1;
  }
}
</style>
