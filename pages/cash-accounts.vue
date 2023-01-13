<template>
  <div class="cash-accounts" :class="{'cash-accounts_empty': emptyCashAccounts}">
    <template v-if="!emptyCashAccounts">
      <CashAccount
        v-for="cashAccount in cashAccounts"
        :key="cashAccount._id"
        :cash="cashAccount.cash"
        :name="cashAccount.name"
        :currency="cashAccount.currency"
        :id="cashAccount._id"
        @change-cash-account="changeCashAccount"
        @delete="deleteCashAccount"
      />
    </template>
    <div class="cash-accounts__empty-message" v-else>
      <UiIconSad class="cash-accounts__icon" />
      Нет созданных счетов
      <UiButton class="cash-accounts__empty-message-create" text="Создать" @click="openModal" />
    </div>
  </div>

  <UiDialog :is-show="isOpenModal" @close="closeModal">
    <h1 class="mb-20">Создать</h1>
    <UiInput v-model="newCashAccount.name" label="Имя" />
    <UiInput v-model="newCashAccount.cash" label="Сумма" />
    <UiInput v-model="newCashAccount.currency" label="Валюта" />

    <UiButton class="ml-auto mt-30" text="Добавить" @click="addCashAccount" />
  </UiDialog>
  <UiButtonRounded class="cash-accounts__add" @click="openModal">
    <UiIconPlus fill="#000" />
  </UiButtonRounded>
</template>

<script>
export default {
  name: "Home",
  components: {}

}
</script>

<script setup>
import { useFetch } from "nuxt/app";
const isOpenModal = ref(false)
const { data: cashAccounts, refresh } = await useFetch('/api/cash-accounts')
const newCashAccount = {
  cash: '0',
  currency: '',
  name: ''
}

const emptyCashAccounts = computed(() => {
  return cashAccounts.value.length === 0
})

const addCashAccount = () => {
  useFetch('/api/cash-accounts', {
    method: "post",
    body: newCashAccount
  });
  closeModal()
  refresh()
}

const deleteCashAccount = (id) => {
  useFetch(`/api/cash-accounts/${ id }`, {
    method: "delete"
  });
  refresh()
}

const openModal = () => {
  isOpenModal.value = true
}

const closeModal = () => {
  isOpenModal.value = false
  newCashAccount.value = {}
}

const changeCashAccount = async (val) => {
  await useFetch(`/api/cash-accounts/${ val.id }`, {
    method: "put",
    body: val
  });
  await refresh()
}
</script>

<style scoped lang="scss">
.cash-accounts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 15px;

  &_empty {
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    width: 150px;
    height: 150px;
    fill: $color-secondary;
  }

  &__empty-message {
    font-size: 40px;
    margin-bottom: 80px;
    color: $color-secondary;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-weight: 700;

    &-create {
      margin-top: 20px;
    }

    &-img {
      margin-bottom: 20px;
      width: 150px;
    }
  }

  &__add {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
}
</style>
