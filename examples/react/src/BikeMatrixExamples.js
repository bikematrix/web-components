import React from "react";

export function BikeSelector() {
  return (
    <>
      {/* Bike Selector Button */}
      <button
        id="bm_selectBikeButton"
        className="p-2 ml-auto border rounded-md w-14 h-14 bm-header-btn bm-icon bm-bike-select-icon"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
          className="w-full h-full"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m35.745 12.17l-4.925 1.48l3.28 8.578a8 8 0 1 1-1.868.715l-1.648-4.31l-5.682 11.802A1 1 0 0 1 24 31h-4.062A8.001 8.001 0 0 1 4 30a8 8 0 0 1 15.938-1h2.5l-4.88-13.664A.998.998 0 0 1 17.5 15H16a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2h-.938l1.842 5.157l8.127-4.277l-.965-2.523a1 1 0 0 1 .647-1.315l5.957-1.787l.575 1.915Zm-13.662 9.89l1.972 5.52l4.23-8.784l-6.202 3.264Zm12.983 8.297l-2.113-5.527a6 6 0 1 0 1.868-.715l2.113 5.528a1 1 0 0 1-1.868.714ZM17.917 29H12a1 1 0 1 0 0 2h5.917A6.002 6.002 0 0 1 6 30a6 6 0 0 1 11.917-1Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      {/* BikeMatrix Components */}
      <bikematrix-bikeselector></bikematrix-bikeselector>
    </>
  );
}

export function BikeSelectorBanner() {
  return (
    <bikematrix-bikeselectorbanner
      data-title="Bike Selector Banner"
      data-color="#000000"
      data-full-width="false"
      data-font-color="#ffffff"
      data-show="true"
    ></bikematrix-bikeselectorbanner>
  );
}

export function ProductResult() {
  const config = {
    productCollections: ["brake-pads"],
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
            `,
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
              skus: ["8022530035613"],
            },
            // ... All products in the collection
          },
        })}
      </script>
    </>
  );
}
