<script setup>
  import BikeSelector from "../components/BikeSelector.vue";
  import BikeSelectorBanner from "../components/BikeSelectorBanner.vue";
  import ProductResult from "../components/ProductResult.vue";
  import CompatibleList from "../components/CompatibleList.vue";
  import CollectionResult from "../components/CollectionResult.vue";
</script>

<template>
  <div class="App">
    <div
      class="container flex flex-col w-full h-full px-4 py-8 mx-auto space-y-12"
    >
      <!-- Test Components -->
      <div class="mt-8 space-y-4">
        <h2 class="text-xl font-bold">Test Components</h2>

        <!-- Bike Selector -->
        <div class="p-4 border rounded">
          <h3 class="mb-2 font-semibold">Bike Selector</h3>
          <BikeSelector />
        </div>

        <!-- Bike Selector Banner -->
        <div class="p-4 border rounded">
          <h3 class="mb-2 font-semibold">Banner</h3>
          <BikeSelectorBanner />
        </div>

        <!-- Product Result -->
        <div class="p-4 border rounded">
          <h3 class="mb-2 font-semibold">Product Result</h3>
          <ProductResult />
        </div>

        <!-- Compatible List -->
        <div class="p-4 border rounded">
          <h3 class="mb-2 font-semibold">Compatible List</h3>
          <CompatibleList />
        </div>

        <!-- Collection Result -->
        <div class="p-4 border rounded">
          <h3 class="mb-2 font-semibold">Collection Result</h3>
          <CollectionResult />
        </div>
      </div>
    </div>
  </div>
</template>
