<template>
  <button :style="cssStyle" class="button">
    {{ text }}
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  text: String,
  width: {
    type: String,
    default: "100%"
  }
})

const cssStyle = computed(() => {
  return {
    width: props.width
  }
})
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: $color-secondary;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: 300ms;
  color: $color-dark;

  &:hover {
    background-color: $color-secondary-hover;
  }
}
</style>
