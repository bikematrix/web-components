<script setup>
  import { onMounted, ref } from "vue";
  import BikeMatrix from "@bikematrix/web-components";

  onMounted(() => {
    BikeMatrix.updateConfig({
      currentCollectionHandle: "brake-pads",
      collectionUrl: "/collection/brake-pads",
      products: {
        123: {
          productUrl: "/product",
          productTitle: "Disc Resin Brake Pad 1-Pair",
          featuredImage:
            "http://cycleways.co.nz/cdn/shop/products/nzfguo0fiv4gexir5uub.jpg?v=1687794103",
          price: "$50.00",
          skus: ["8022530035613"],
        },
        // ... All products in the collection
      },
    });
  });

  const productCardTemplate = ref(`<div class="bm-compatible-product-wrapper">
          <div class="bm-compatible-product-image">
            <a href="{{productUrl}}">
              <img src="{{featuredImage}}" width="80px" alt="" loading="lazy" />
            </a>
          </div>
          <div class="bm-compatible-product-title">
            <a href="{{productUrl}}">{{ productTitle }}</a>
          </div>
          <div class="bm-compatible-product-price">
            <a href="{{productUrl}}" style="text-decoration: none">
              <p>
                <strong>{{ price }}</strong>
              </p>
            </a>
          </div>
          {{ compatibility }}
        </div>`);
</script>

<template>
  <div>
    <bikematrix-compatiblelist data-title="Compatible Products">
      <template slot="product-card" v-html="productCardTemplate"></template>
    </bikematrix-compatiblelist>
  </div>
</template>
