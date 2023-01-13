<template>
  <div class="input">
    <div class="input__label">{{ label }}</div>
    <input class="input__input"
           :type="type"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: "Input"
}
</script>

<script setup>
defineProps({
  value: {
    type: String | Number
  },
  label: {
    type: String
  },
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String | Number
})

defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &__label {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 700;
    color: $color-light;
    margin-left: 10px;
  }

  &__input {
    background: $color-secondary-dark;
    border: none;
    border-bottom: 2px solid $color-secondary;
    padding: 10px;
    outline: none;
    font-size: 16px;
    color: $color-light;
  }
}
</style>
