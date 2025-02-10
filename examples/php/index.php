<?php

// Example Product
$productId = 'product-8022530035613';
$productSkus = ['8022530035613'];

// Main Bike Matrix Config
$bikeMatrixConfig = [
  "apiUrl" => "https://api-staging.bikematrix.io/bike/v2/",
  "apiKey" => "YOUR_API_KEY",
  "pageType" => "collection",
  "currentCollectionHandle" => "brake-pads",
  "collections" => [
    [
      "title" => "Brake pads",
      "handle" => "brake-pads",
      "url" => "/collections/brake-pads"
    ],
    // Add more collections here
  ],
  "categories" => [
    [
      "title" => "Brake Pads",
      "text_id" => "category_brakepads",
      "collection" => "Brake pads"
    ],
    // Add more categories here
  ],
];

// Compatible List Component Config
$compatibleListConfig = [
  'currentCollectionHandle' => 'brake-pads',
  'collectionUrl' => '/collection/brake-pads',
  'products' => [
    $productId => [
      'productUrl' => '/product',
      'productTitle' => 'Disc Resin Brake Pad 1-Pair',
      'featuredImage' => '//cycleways.co.nz/cdn/shop/products/nzfguo0fiv4gexir5uub.jpg?v=1687794103',
      'price' => '$50.00',
      'skus' => $productSkus
    ],
    // All other products in the collection
  ]
];

// Product Result Component Config
$productResultConfig = [
  'productCollections' => ['brake-pads']
];

?>

<!DOCTYPE html>
<html lang="en" style="font-size: 16px">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bike Matrix App</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
  <div
    class="container flex flex-col w-full h-full px-4 py-8 mx-auto space-y-12">
    <!-- Test Components -->
    <div class="mt-8 space-y-4">
      <h2 class="text-xl font-bold">Test Components</h2>
      <!-- Bike Matrix Config -->
      <script type="application/json" data-bikematrix-config>
        <?php echo json_encode($bikeMatrixConfig); ?>
      </script>

      <!-- Bike Selector -->
      <div class="p-4 border rounded">
        <h3 class="mb-2 font-semibold">Bike Selector</h3>
        <button
          id="bm_selectBikeButton"
          class="p-2 ml-auto border rounded-md w-14 h-14 bm-header-btn bm-icon bm-bike-select-icon"
          style="background-color: #ffffff; color: #000000">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            class="w-full h-full">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m35.745 12.17l-4.925 1.48l3.28 8.578a8 8 0 1 1-1.868.715l-1.648-4.31l-5.682 11.802A1 1 0 0 1 24 31h-4.062A8.001 8.001 0 0 1 4 30a8 8 0 0 1 15.938-1h2.5l-4.88-13.664A.998.998 0 0 1 17.5 15H16a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2h-.938l1.842 5.157l8.127-4.277l-.965-2.523a1 1 0 0 1 .647-1.315l5.957-1.787l.575 1.915Zm-13.662 9.89l1.972 5.52l4.23-8.784l-6.202 3.264Zm12.983 8.297l-2.113-5.527a6 6 0 1 0 1.868-.715l2.113 5.528a1 1 0 0 1-1.868.714ZM17.917 29H12a1 1 0 1 0 0 2h5.917A6.002 6.002 0 0 1 6 30a6 6 0 0 1 11.917-1Z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <bikematrix-bikeselector></bikematrix-bikeselector>
      </div>

      <!-- Bike Selector Banner -->
      <div class="p-4 border rounded">
        <h3 class="mb-2 font-semibold">Banner</h3>
        <bikematrix-bikeselectorbanner
          data-title="Bike Selector Banner"
          data-color="#000000"
          data-full-width="false"
          data-font-color="#ffffff"
          data-show="true"></bikematrix-bikeselectorbanner>
      </div>

      <!-- Product Result -->
      <div class="p-4 border rounded">
        <h3 class="mb-2 font-semibold">Product Result</h3>
        <bikematrix-productresult data-sku="<?php echo $productSkus[0]; ?>" />
        <script type="application/json" data-bikematrix-config>
          <?php echo json_encode($productResultConfig); ?>
        </script>
      </div>

      <!-- Compatible List -->
      <div class="p-4 border rounded">
        <h3 class="mb-2 font-semibold">Compatible List</h3>
        <bikematrix-compatiblelist data-title="Compatible products">
          <template slot="product-card">
            <div class="bm-compatible-product-wrapper">
              <div class="bm-compatible-product-image">
                <a href="{{productUrl}}">
                  <img
                    src="{{featuredImage}}"
                    width="80px"
                    alt=""
                    loading="lazy" />
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
          </template>
        </bikematrix-compatiblelist>
        <script type="application/json" data-bikematrix-config>
          <?php echo json_encode($compatibleListConfig); ?>
        </script>
      </div>

      <!-- Collection Result -->
      <div class="p-4 border rounded">
        <h3 class="mb-2 font-semibold">Collection Result</h3>
        <bikematrix-collectionresult
          data-product-id="<?php echo $productId; ?>"
          data-product-skus="<?php echo implode(',', $productSkus); ?>" />
      </div>
    </div>
  </div>

  <!-- Bike Matrix Core Script -->
  <script src="https://cdn.jsdelivr.net/npm/@bikematrix/web-components/dist/bm_core.js" type="text/javascript"></script>
</body>

</html>