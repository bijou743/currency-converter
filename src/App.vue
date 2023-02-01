<script setup>
import { RouterView } from "vue-router";
import Navigation from "@/components/common/Navigation.vue";
import Loader from "@/components/common/Loader.vue";
import useStore from "@/stores/store.js";

const store = useStore();
store.fetchDailyJson();
</script>

<template>
  <Navigation />

  <main v-if="!store.loadingData">
    <RouterView />
  </main>

  <div v-if="store.loadingData">
    <Loader />
  </div>
</template>

<style scoped lang="scss">
main {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 20px;
  height: calc(100vh - 100px);
  overflow-y: scroll;

  @media (max-width: 800px) {
    height: calc(100vh - 75px);
    border-radius: 15px 15px 0 0;
  }
}
</style>
