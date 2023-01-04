<template>
  <div class="account">
<!--    <pre style="white-space: pre-wrap">{{ account }}</pre>-->
    <h1>СЧЕТ: {{ accountData._id }}</h1>
    <h2>ИМЯ: {{ accountData.name }}</h2>
    <h2>БАЛАНС: {{ accountData.cash }} {{ accountData.currency }}</h2>
    <h2>РАССЧИТАНЫЙ БАЛАНС: {{ currentBalance }} {{ accountData.currency }}</h2>

    <h2 class="mt-30 mb-10">Расходы</h2>
    <hr />
    <UiButton class="mt-10" text="Добавить расход / доход" @click="addAction" />

    <div
      v-for="action in accountActions"
      :key="action._id"
      :class="`account__action account__${isIncomeOrSpend(action.type)}`"
    >
      <span>{{ actionValue(action) }}</span> <span>{{ action.name }}</span>
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

const { data: account, refresh } = await useFetch(`/api/account/${route.params.id}`)

const accountData = computed(() => {
  return account.value.account;
})

const accountActions = computed(() => {
  return account.value.actions;
})

const currentBalance = computed(() => {
  let balance = Number(account.value.account.cash);
  console.log(balance)
  account.value.actions.forEach(item => item.type === "income" ? balance += Number(item.cash) : balance -= Number(item.cash))
  return balance
})

const isIncomeOrSpend = (type) => {
  if (type === 'income') {
    return 'income'
  }

  if (type === 'spend') {
    return 'spend'
  }
}

const actionValue = (action) => {
  return `${isIncomeOrSpend(action.type) === 'income' ? '+' : '-'} ${action.cash}`
}

const addAction = async () => {
  await useFetch('/api/account/', {
    method: "post",
    body: {
      id_account: route.params.id,
      type: 'income',
      cash: '999',
      name: Math.random().toString(36).substr(2, 5)
    }
  })
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
