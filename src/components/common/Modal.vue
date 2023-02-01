<script setup>
import useStore from "@/stores/store.js";

const emit = defineEmits(["closeModal"]);

const store = useStore();

const { modalType } = defineProps({
  modalType: String,
});

function changeCurrency(newCurrencty) {
  if (modalType === "left") {
    store.leftCurrency = newCurrencty;
  } else {
    store.rightCurrency = newCurrencty;
  }
  emit("closeModal");
}
</script>

<template>
  <div class="modal" @click.self="$emit('closeModal')">
    <div class="modal__popup">
      <h2>Выберите валюту</h2>

      <div class="modal__popup__list">
        <div
          v-for="cur in store.searchCurrencies()"
          class="modal__popup__list__item"
          @click="changeCurrency(cur)"
        >
          {{ cur.CharCode }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &__popup {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    transform: translate(-50%, -50%);

    &__list {
      height: 250px;
      width: 250px;
      overflow-y: scroll;
      margin-top: 10px;

      &__item {
        margin-bottom: 5px;
        cursor: pointer;

        &:hover {
          color: $blue;
        }
      }
    }
  }
}
</style>
