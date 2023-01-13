<template>
  <div class="account">
    <div class="account__header">
      <h2 class="account__name"> {{ accountData.name }}</h2>
<!--      <h2>БАЛАНС: {{ accountData.cash }} {{ accountData.currency }}</h2>-->
<!--      <h2>РАССЧИТАНЫЙ БАЛАНС: {{ account.currentBalance }} {{ accountData.currency }}</h2>-->
    </div>

    <div class="account__actions">
      <div class="account__actions-header">
        <h2>Действия</h2>
        <UiButton width="30px" @click="isOpenAddActions = !isOpenAddActions">
          <UiIconPlus fill="#000" />
        </UiButton>
      </div>

      <AccountAction
        v-for="action in accountActions"
        :title="action.name"
        :value="actionValue(action)"
        class="mt-20"
        @remove="deleteAction(action._id)"
      />
    </div>

    <UiDialog :is-show="isOpenAddActions" @close="isOpenAddActions = false">
      <h1 class="mb-20">Добавление активности счета</h1>
      <UiInput v-model="newActions.name" label="Имя" />
      <UiInput v-model="newActions.cash" label="Сумма" />
      <label><input type="radio" v-model="newActions.type" name="typeAction" value="spend" /> Расход</label>
      <label><input type="radio" v-model="newActions.type" name="typeAction" value="income" /> Доход</label>
      <UiButton class="ml-auto mt-30" text="Сохранить" @click="addAction" />
    </UiDialog>
  </div>
</template>

<script>
export default {
  name: "[id]"
}
</script>

<script setup>
import { useFetch, useRoute } from "nuxt/app";
import { computed } from 'vue'

const route = useRoute();
const isOpenAddActions = ref(false);
const newActions = {
  cash: 0,
  type: null,
  name: '',
  id_account: route.params.id
}

const { data: account, refresh } = await useFetch(`/api/account/${ route.params.id }`)

const accountData = computed(() => {
  return account.value.account;
})

const accountActions = computed(() => {
  return account.value.actions;
})

const actionValue = (action) => {
  return `${ action.type === 'income' ? '+' : '' } ${ action.cash }`
}


const addAction = async () => {
  await useFetch('/api/account', {
    method: "post",
    body: newActions,
  })
  refresh()
  newActions.value = {
    cash: 0,
    type: null,
    name: '',
    id_account: route.params.id
  }
  isOpenAddActions.value = false
}

const deleteAction = (id) => {
  useFetch(`/api/account/${ id }`, {
    method: "delete"
  });
  refresh()
}

const changeAction = (val) => {
  useFetch(`/api/account/${ val._id }`, {
    method: "put",
    body: {
      ...val
    }
  });
  refresh()
}
</script>

<style scoped lang="scss">
.account {
  &__action {
    border: 1px solid $color-secondary;
    border-radius: 10px;
    padding: 10px;
    margin: 5px 0;
  }

  &__header {
    margin: -20px -20px 0;
    padding: 20px;
    background-color: $color-secondary;
    color: $color-default;
  }

  &__name {
    font-size: 2rem;
  }

  &__actions {
    margin-top: 20px;

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $color-secondary;
      padding-bottom: 10px;
    }

  }
}
</style>
