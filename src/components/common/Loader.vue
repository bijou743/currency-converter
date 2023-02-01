<script setup></script>

<template>
  <Teleport to="#app">
    <div class="loader">
      <div class="lds-dual-ring">Загружаем данные...</div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.lds-dual-ring {
  display: inline-block;
  width: 190px;
  height: 80px;
  text-align: center;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid $blue;
  border-color: $blue transparent $blue transparent;
  animation: lds-dual-ring 1.2s linear infinite;
  position: absolute;
  left: 55px;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
