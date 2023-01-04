<template>
  <div class="cash-account">
    <div class="cash-account__settings" @click="openSettings">
      <img src="~/assets/img/more.svg" alt="logo-card">
    </div>
    <div class="cash-account__delete" @click="deleteCashAccount">
      <img src="~/assets/img/trash.svg" alt="logo-card">
    </div>
    <div class="cash-account__balance">
      {{ cash }} <span>{{ currency }}</span>
    </div>

    <div class="cash-account__footer">
      <div>
        <div class="cash-account__name">
          {{ name }}
        </div>
        <div class="cash-account__id">
          ID: {{ id }}
        </div>
      </div>
      <NuxtLink :to="`account/${id}`" class="cash-account__logo">
        <img src="~/assets/img/visa.png" alt="logo-card">
      </NuxtLink>
    </div>
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
  background-color: teal;
  border-radius: 10px;
  padding: 30px 10px 10px;

  &:hover {
    #{$self}__delete, #{$self}__settings {
      opacity: 1;
    }
  }

  &__footer {
    margin-top: auto;
    display: flex;
  }

  &__id {
    margin-top: 5px;
    font-size: 10px;
    color: #fff;
  }

  &__name {
    font-size: 26px;
    margin-right: 10px;
    align-self: center;
    color: #fff;
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
    color: #fff;
  }

  &__settings {
    position: absolute;
    font-size: 20px;
    color: #fff;
    left: 10px;
    top: 10px;
    cursor: pointer;
    user-select: none;
    width: 20px;
    opacity: 0;
    transition: 300ms;
  }

  &__delete {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 20px;
    opacity: 0;
    transition: 300ms;
    cursor: pointer;
  }
}
</style>
