<template>
  <div class="ui-dropdown">
    <button
      @click="onToggleDropdown"
      class="ui-dropdown__button"
      ref="button"
    >
      <slot name="button-content" />
    </button>
    <div
      v-if="isVisible"
      class="ui-dropdown__content"
      :style="{ 'transform': `translateY(${buttonHeight})` }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { onClickOutside } from '@vueuse/core'

const isVisible = ref(false);
const button = ref(null);

onClickOutside(button, (event) => isVisible.value = false)

const buttonHeight = computed(() => {
  return `${button.value.offsetHeight}px`
})


const onToggleDropdown = () => {
  isVisible.value = !isVisible.value
}
</script>

<style scoped lang="scss">
.ui-dropdown {
  position: relative;

  &__button {
    display: flex;
    background: transparent;
    cursor: pointer;
  }

  &__content {
    position: absolute;
    border-radius: 10px;
    right: 0;
    top: 0;
    margin-top: 10px;
    background-color: $color-default;
    border: 1px solid $color-secondary;
    z-index: 10;
    min-width: 300px;
    overflow: hidden;
    padding: 5px 0;
  }
}
</style>
