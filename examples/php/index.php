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
      'featuredImage' => 'http://cycleways.co.nz/cdn/shop/products/nzfguo0fiv4gexir5uub.jpg?v=1687794103',
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
        <bikematrix-bikon data-color="#000"></bikematrix-bikon>
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
  <script src="https://cdn.jsdelivr.net/npm/@bikematrix/web-components@1.1/dist/bm_core.js" type="text/javascript"></script>
</body>

</html>