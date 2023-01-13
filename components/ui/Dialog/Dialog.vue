<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isShow" class="dialog">
        <div class="dialog__container">
          <slot />
        </div>
        <div class="dialog__overlay" @click="closeDialog"></div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  isShow: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const closeDialog = () => {
  emit('close')
}

</script>

<style scoped lang="scss">
.dialog {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;

  &__overlay {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: $color-dark;
    opacity: 0.5;
  }

  &__container {
    padding: 15px;
    min-width: 600px;
    background-color: $color-default;
    border-radius: 10px;
    z-index: 1;
  }
}
</style>
