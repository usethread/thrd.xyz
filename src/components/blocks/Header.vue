<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="header">
      <div class="left">
        <RouterLink to="/">
          <h1 class="title">STRAFE</h1>
        </RouterLink>
      </div>
      <div class="right">
        <a
          href="https://web.strafe.chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 class="open-app">
            <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
            &nbsp;Open App
          </h1>
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  width: 100%;

  div.left {
    align-items: start;
  }

  div.right {
    align-items: end;
  }

  .open-app {
    font-size: medium;
    background-color: var(--color-primary);
    border-radius: 10px;
    padding: 8px 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: white;
  }

  .open-app:hover {
    background-color: var(--color-primary-hover);
  }

  h1.title {
    transition: color 0.3s ease;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
  }
  h1.title:hover {
    color: var(--color-primary);
  }
}
</style>
