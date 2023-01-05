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
  margin-bottom: 10px;

  &__label {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 700;
    color: teal;
    margin-left: 8px;
  }

  &__input {
    background: #f0f0f0;
    border: none;
    border-bottom: 2px solid teal;
    padding: 10px;
    outline: none;
    font-size: 14px;
    color: teal;
  }
}
</style>
