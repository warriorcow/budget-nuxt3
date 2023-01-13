<template>
  <div class="account-action">
    {{ value }} {{ title }}

    <div class="account-action__more">
      <UiDropdown>
        <template #button-content>
          <UiIconMore fill="#fff" width="20px" height="20px" />
        </template>
        <UiDropdownItem>Редактировать</UiDropdownItem>
        <UiDropdownItem @click="$emit('remove')">Удалить</UiDropdownItem>
      </UiDropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Action"
}
</script>

<script setup>
const props = defineProps({
  value: String,
  title: String
})
</script>

<style scoped lang="scss">
.account-action {
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid $color-secondary;
  background: $color-default;
  color: $color-secondary;
  padding: 15px 10px;

  &__more {
    margin-left: auto;
  }

  &__collapse {

  }
}
</style>
