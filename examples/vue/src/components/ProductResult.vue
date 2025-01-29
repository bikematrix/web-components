<script setup>
  import { onMounted } from "vue";
  import BikeMatrix from "@bikematrix/web-components";

  onMounted(() => {
    BikeMatrix.updateConfig({
      productCollections: ["brake-pads"],
    });
  });
</script>
<template>
  <div>
    <bikematrix-productresult data-sku="8022530035613" />
  </div>
</template>
