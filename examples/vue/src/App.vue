<script setup>
  import { RouterView } from "vue-router";
  import BikeMatrixCore from "./components/BikeMatrixCore.vue";
</script>

<template>
  <main>
    <RouterView />

    <!-- Bike Matrix Core -->
    <BikeMatrixCore />
  </main>
</template>
