<script setup>
import useStore from "@/stores/store.js";
import { ref } from "vue";

const store = useStore();
const query = ref("");
</script>

<template>
  <div class="search">
    <input type="text" placeholder="Название валюты или код" v-model="query" />
  </div>

  <div class="date">
    Актуально на дату:
    {{ new Intl.DateTimeFormat("ru").format(new Date(store.data.Date)) }}
  </div>

  <div class="currency-list">
    <div
      v-for="cur in store.searchCurrencies(query)"
      class="currency-list__item"
    >
      <div class="currency-list__item__name">{{ cur.CharCode }} - RUB</div>

      <div class="currency-list__item__value">
        <span>1 {{ cur.CharCode }} - {{ cur.Value }} RUB</span>

        <span
          v-if="cur.Previous < cur.Value"
          class="currency-list__item__arrow currency-list__item__arrow_up"
          :title="`Предыдущее значение: ${cur.Previous}`"
        >
          <font-awesome-icon icon="fa-solid fa-arrow-up" />
          {{ (cur.Value - cur.Previous).toFixed(4) }}
        </span>

        <span
          v-else
          class="currency-list__item__arrow currency-list__item__arrow_down"
          :title="`Предыдущее значение: ${cur.Previous}`"
        >
          <font-awesome-icon icon="fa-solid fa-arrow-down" />
          {{ (cur.Previous - cur.Value).toFixed(4) }}
        </span>
      </div>
      <div>1 RUB - {{ (1 / cur.Value).toFixed(4) }} RUB</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  input {
    padding: 5px 8px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid $gray;
    font-size: 16px;

    &::placeholder {
      color: $gray;
    }

    &:focus {
      outline: 1px solid $blue;
    }
  }
}

.date {
  margin-bottom: 20px;
  font-size: 14px;
  color: $gray;
}

.currency-list {
  &__item {
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid $gray;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    &__name {
      color: $blue;
      font-weight: bold;
      margin-bottom: 5px;
    }

    &__value {
      display: flex;
      align-items: flex-end;
      gap: 8px;
    }

    &__arrow {
      font-size: 12px;

      &_up {
        color: rgb(10, 187, 10);
      }

      &_down {
        color: red;
      }
    }
  }
}
</style>
