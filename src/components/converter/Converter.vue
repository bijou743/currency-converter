<script setup>
import useStore from "@/stores/store.js";
import { ref, computed } from "vue";
import Modal from "@/components/common/Modal.vue";

const store = useStore();

const modalType = ref(null);

const leftCurrencyVal = ref("1");
const rightCurrencyVal = computed(() => {
  return (
    (store.leftCurrency.Value / store.rightCurrency.Value) *
    leftCurrencyVal.value
  );
});

function validate() {
  let value = leftCurrencyVal.value.replace(",", ".");
  if (isNaN(value) || parseFloat(value) < 0) {
    value = 1;
  }
  leftCurrencyVal.value = value;
}
</script>

<template>
  <div class="converter">
    <div class="converter__left-currency">
      <input type="text" v-model="leftCurrencyVal" @keyup="validate" />
      <button @click="modalType = 'left'">
        {{ store.leftCurrency.CharCode }}
      </button>
    </div>

    <div class="converter__switcher" @click="store.switchCurrencies">
      <font-awesome-icon icon="fa-solid fa-arrows-left-right" />
    </div>

    <div class="converter__right-currency">
      <input type="text" :value="rightCurrencyVal.toFixed(4)" disabled />
      <button @click="modalType = 'right'">
        {{ store.rightCurrency.CharCode }}
      </button>
    </div>

    <Teleport to="body">
      <Transition>
        <Modal
          v-if="modalType"
          :modalType="modalType"
          @closeModal="modalType = null"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
.converter {
  display: flex;
  justify-content: center;
  gap: 40px;

  input {
    padding: 5px 8px;
    border-radius: 8px 0 0 8px;
    border: 1px solid $gray;
    font-size: 16px;
    width: 80px;
  }

  button {
    background-color: $blue;
    color: #fff;
    border: none;
    padding: 6px 8px;
    border-radius: 0 8px 8px 0;
    font-size: 16px;
    cursor: pointer;
  }

  &__switcher {
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
}
</style>
