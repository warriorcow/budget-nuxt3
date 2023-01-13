<template>
  <div class="cash-account">
    <div class="cash-account__header">
      <div class="cash-account__settings" @click="openSettings">
        <UiIconMore fill="#000" width="20px" height="20px"/>
      </div>
      <div class="cash-account__delete" @click="deleteCashAccount">
        <UiIconTrash fill="#000" width="20px" height="20px"/>
      </div>
    </div>
    <NuxtLink class="cash-account__content" :to="`account/${id}`">
      <div class="cash-account__balance">
        {{ filterNumber }} <span>{{ currency }}</span>
      </div>
      <div class="cash-account__name">
        {{ name }}
      </div>
      <div class="cash-account__id">
        ID: {{ id }}
      </div>
    </NuxtLink>
  </div>

  <UiDialog :is-show="isOpenSettings" @close="closeSettings">
    <h1 class="mb-20">Редактирование счета</h1>
    <UiInput v-model="editProps.name" label="Имя" />
    <UiInput v-model="editProps.cash" label="Сумма" />
    <UiInput v-model="editProps.currency" label="Валюта" />
    <UiButton class="ml-auto mt-30" text="Сохранить" @click="saveCashAccount" />
  </UiDialog>
</template>

<script>
export default {
  name: "CashAccount"
}
</script>

<script setup>
import {computed} from "vue";

const isOpenSettings = ref(false)

const props = defineProps({
  cash: String,
  name: String,
  currency: String,
  id: String
})

const editProps = ref({
  cash: props.cash,
  name: props.name,
  currency: props.currency,
  id: props.id
})

const filterNumber = computed(() => {
  return props.cash.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
})

const emit = defineEmits(['change-cash-account', 'delete'])

const openSettings = () => {
  isOpenSettings.value = true
}

const closeSettings = () => {
  isOpenSettings.value = false
}

const saveCashAccount = () => {
  emit('change-cash-account', {
    cash: editProps.value.cash, name: editProps.value.name, currency: editProps.value.currency, id: props.id
  })
  closeSettings()
}

const deleteCashAccount = () => {
  emit('delete', props.id)
}
</script>

<style scoped lang="scss">
.cash-account {
  $self: &;
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(50% - 7.5px);
  height: 200px;
  background-color: $color-secondary;
  border-radius: 10px;
  padding: 30px 10px 10px;
  color: $color-dark;

  &:hover {
    #{$self}__delete, #{$self}__settings {
      opacity: 1;
    }
  }

  &__content {
    height: 100%;
  }

  &__id {
    margin-top: 5px;
    font-size: 10px;
  }

  &__name {
    font-size: 26px;
    margin-right: 10px;
    align-self: center;
    font-weight: 500;
  }

  &__logo {
    width: 100px;
    height: 50px;
    margin-left: auto;
  }

  &__balance {
    font-size: 40px;
    font-weight: 700;
  }

  &__settings {
    position: absolute;
    font-size: 20px;
    left: 10px;
    top: 10px;
    cursor: pointer;
    user-select: none;
    width: 20px;
    opacity: 0;
    transition: 300ms;
    z-index: 100;
  }

  &__delete {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 20px;
    opacity: 0;
    transition: 300ms;
    cursor: pointer;
    z-index: 1;
  }
}
</style>
