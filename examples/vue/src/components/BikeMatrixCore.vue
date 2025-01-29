<script setup>
  import { onMounted, onUnmounted, onBeforeUnmount, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import BikeMatrix from "@bikematrix/web-components";

  const route = useRoute();
  const initialized = ref(false);

  // Initialize BikeMatrix on mount with config
  onMounted(() => {
    BikeMatrix.init({
      logLevel: "verbose",
      apiUrl:
        "https://bikematrix-20230522-1515-dev-apim.azure-api.net/proxy/v3/",
      pageType: "collection",
      collections: [
        {
          title: "Brake pads",
          handle: "brake-pads",
          url: "/collections/brake-pads",
        },
        {
          title: "Tyres & Tubes",
          handle: "tyres-tubes",
          url: "/collections/tyres-tubes",
        },
        {
          title: "Rotors",
          handle: "rotors-1",
          url: "/collections/rotors-1",
        },
        {
          title: "Wheels & Rims",
          handle: "wheels-rims",
          url: "/collections/wheels-rims",
        },
      ],
      categories: [
        {
          title: "Brake Pads",
          text_id: "category_brakepads",
          collection: "Brake pads",
        },
      ],
    });
  });

  // Destroy BikeMatrix before unmount
  onBeforeUnmount(() => {
    BikeMatrix.destroy();
  });

  // Reload BikeMatrix Web Components on pathname change
  watch(
    () => route.path,
    () => {
      // Dont reload on first render
      if (!initialized.value) {
        initialized.value = true;
        return;
      }

      // Simple check for BikeMatrix availability and initialization
      if (!BikeMatrix?.isInitialized()) return;

      // Reload BikeMatrix Web Components
      BikeMatrix.reload();
    }
  );
</script>
