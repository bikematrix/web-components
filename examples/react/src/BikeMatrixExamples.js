import React from "react";

export function BikeSelector() {
  return (
    <>
      {/* Bike Selector Button */}
      <bikematrix-bikon data-color="#000"></bikematrix-bikon>
      {/* BikeMatrix Components */}
      <bikematrix-bikeselector></bikematrix-bikeselector>
    </>
  );
}

export function BikeSelectorBanner() {
  return (
    <bikematrix-bikeselectorbanner
      data-title="Bike Selector Banner"
      data-mobile-title="Bike Selector Banner"
      data-color="#000000"
      data-full-width="false"
      data-font-color="#ffffff"
      data-show="true"
    ></bikematrix-bikeselectorbanner>
  );
}

export function ProductResult() {
  const config = {
    productCollections: ["brake-pads"]
  };

  return (
    <>
      <bikematrix-productresult data-sku="8022530035613" />
      <script type="application/json" data-bikematrix-config>
        {JSON.stringify(config)}
      </script>
    </>
  );
}

export function CollectionResult() {
  return (
    <bikematrix-collectionresult
      data-product-id="8022530035613"
      data-product-skus="8022530035613"
    />
  );
}

export function CompatibleList() {
  return (
    <>
      <bikematrix-compatiblelist data-title="Compatible Products">
        <template
          slot="product-card"
          dangerouslySetInnerHTML={{
            __html: `
              <div class="bm-compatible-product-wrapper">
                  <div class="bm-compatible-product-image">
                      <a href="{{productUrl}}">
                      <img
                          src="{{featuredImage}}"
                          width="80px"
                          alt=""
                          loading="lazy"
                      ></img>
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
              </div>
            `
          }}
        ></template>
      </bikematrix-compatiblelist>

      {/* BikeMatrix Config */}
      <script type="application/json" data-bikematrix-config>
        {JSON.stringify({
          currentCollectionHandle: "brake-pads",
          collectionUrl: "/collection/brake-pads",
          products: {
            123: {
              productUrl: "/product",
              productTitle: "Disc Resin Brake Pad 1-Pair",
              featuredImage:
                "http://cycleways.co.nz/cdn/shop/products/nzfguo0fiv4gexir5uub.jpg?v=1687794103",
              price: "$50.00",
              skus: ["8022530035613"]
            }
            // ... All products in the collection
          }
        })}
      </script>
    </>
  );
}
