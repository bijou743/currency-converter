<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Список валют</RouterLink>
    <RouterLink to="/converter">Конвертер</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    display: inline-block;
    padding: 7px 15px;
    border-radius: 8px;
    color: #000;

    &.router-link-active {
      background-color: $blue;
      color: #fff;
    }
  }
}
</style>
