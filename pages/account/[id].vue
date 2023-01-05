<template>
  <div class="account">
    <pre style="white-space: pre-wrap">{{ account }}</pre>
    <h1>СЧЕТ: {{ accountData._id }}</h1>
    <h2>ИМЯ: {{ accountData.name }}</h2>
    <h2>БАЛАНС: {{ accountData.cash }} {{ accountData.currency }}</h2>
    <h2>РАССЧИТАНЫЙ БАЛАНС: {{ account.currentBalance }} {{ accountData.currency }}</h2>

    <h2 class="mt-30 mb-10">Расходы</h2>
    <hr />
    <UiButton class="mt-10" text="Добавить расход / доход" @click="isOpenAddActions = !isOpenAddActions" />

    <UiDialog :is-show="isOpenAddActions" @close="isOpenAddActions = false">
      <h1 class="mb-20">Добавление активности счета</h1>
      <UiInput v-model="newActions.name" label="Имя" />
      <UiInput v-model="newActions.cash" label="Сумма" />
      <label><input type="radio" v-model="newActions.type" name="typeAction" value="spend" /> Расход</label>
      <label><input type="radio" v-model="newActions.type" name="typeAction" value="income" /> Доход</label>
      <pre style="white-space: pre-wrap">{{ newActions }}</pre>
      <UiButton class="ml-auto mt-30" text="Сохранить" @click="addAction" />
    </UiDialog>

    <div
      v-for="action in accountActions"
      :key="action._id"
      :class="`account__action account__${action.type}`"
    >
      <span>{{ actionValue(action) }}</span> <span>{{ action.name }}</span>
      <UiButton text="Удалить" @click="deleteAction(action._id)" />
      <UiInput type="number" v-model="action.cash" />
      <UiButton text="Изменить" @click="changeAction(action)" />

    </div>
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
    border: 1px solid teal;
    border-radius: 10px;
    padding: 10px;
    margin: 5px 0;
  }

  &__income {
    color: green;
  }

  &__spend {
    color: red;
  }
}
</style>
