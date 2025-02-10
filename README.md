# Bike Matrix Web Components

A web component library for integrating bike matrix compatibility checking into your e-commerce platform.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Web Components](#web-components)
  - [Bike Selector](#bike-selector)
  - [Bike Selector Banner](#bike-selector-banner)
  - [Product Result](#product-result)
  - [Collection Result](#collection-result)
  - [Compatible List](#compatible-list)
- [API Reference](#api-reference)
- [Framework Integration](#framework-integration)
- [Common Scenarios](#common-scenarios)

## Installation

You can install Bike Matrix Web Components using either npm or by including it directly via CDN.

### NPM

```bash
npm install @bikematrix/web-components
```

Then import it in your application:

```javascript
import BikeMatrix from "@bikematrix/web-components";
```

### CDN

Alternatively, include the script directly in your HTML:

```html
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@bikematrix/web-components/dist/bm_core.js"
></script>
```

## Getting Started

Follow these steps to quickly integrate BikeMatrix into your website:

### 1. Add the Script

Choose one of these options to add BikeMatrix to your project:

#### Option A: NPM Installation

```bash
npm install @bikematrix/web-components
```

Then import it in your JavaScript/TypeScript file:

```javascript
import BikeMatrix from "@bikematrix/web-components";
```

#### Option B: CDN Installation

Include the script directly in your HTML:

```html
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@bikematrix/web-components/dist/bm_core.js"
></script>
```

### 2. Configure BikeMatrix

Add the core configuration block to your HTML:

```html
<script type="application/json" data-bikematrix-config>
  {
    "apiUrl": "https://api-staging.bikematrix.io/bike/v2/",
    "apiKey": "YOUR_API_KEY",
    "pageType": "collection",
    "currentCollectionHandle": "brake-pads",
    "collections": [
      {
        "title": "Brake pads",
        "handle": "brake-pads",
        "url": "/collections/brake-pads"
      }
    ],
    "categories": [
      {
        "title": "Brake Pads",
        "text_id": "category_brakepads",
        "collection": "Brake pads"
      }
    ]
  }
</script>
```

### 3. Add Basic Components

Add these components to your HTML:

```html
<!-- Header or navigation -->
<button id="bm_selectBikeButton">Select Bike</button>
<bikematrix-bikeselector></bikematrix-bikeselector>

<!-- Detailed product page -->
<bikematrix-productresult data-sku="PRODUCT_SKU"></bikematrix-productresult>

<!-- Product cards on collection pages -->
<bikematrix-collectionresult
  data-product-id="PRODUCT_ID"
  data-product-skus="PRODUCT_SKU1,PRODUCT_SKU2"
></bikematrix-collectionresult>
```

### 4. Initialize BikeMatrix

The initialization step depends on your installation method:

#### When using NPM

Add the initialization code where appropriate in your application's lifecycle:

```javascript
BikeMatrix.init();
```

#### When using CDN

The initialization happens automatically when you import the package, so no additional initialization code is needed.

### 5. Test the Integration

1. Open your webpage
2. Click the "Select Bike" button
3. Choose a bike from the selector
4. Check that both the product result and collection result components display the correct compatibility information

For more advanced configurations and component options, see the sections below.

## Configuration

BikeMatrix is configured using a JSON configuration block in your HTML:

```html
<script type="application/json" data-bikematrix-config>
  {
    "apiUrl": "https://api-staging.bikematrix.io/bike/v2/",
    "apiKey": "YOUR_API_KEY",
    "pageType": "collection",
    "currentCollectionHandle": "brake-pads",
    "collections": [
      {
        "title": "Brake pads",
        "handle": "brake-pads",
        "url": "/collections/brake-pads"
      }
    ],
    "categories": [
      {
        "title": "Brake Pads",
        "text_id": "category_brakepads",
        "collection": "Brake pads"
      }
    ]
  }
</script>
```

These can be used multiple times throughout your HTML, with the configuration options being merged together sequentially.

### Configuration Options

Configuration options for BikeMatrix components, organized by feature area.

#### Core Configuration

| Option                    | Type                                                        | Default      | Description                                      |
| ------------------------- | ----------------------------------------------------------- | ------------ | ------------------------------------------------ |
| `apiUrl`                  | string                                                      | _(Required)_ | Your BikeMatrix API endpoint URL                 |
| `apiKey`                  | string                                                      | _(Required)_ | Your BikeMatrix API key                          |
| `pageType`                | "collection" \| "product" \| "index" \| "search"            | "index"      | Current page type                                |
| `currentCollectionHandle` | string                                                      | ""           | Handle of the current collection                 |
| `collections`             | Array<{title: string, handle: string, url: string}>         | []           | List of available collections with their details |
| `categories`              | Array<{title: string, text_id: string, collection: string}> | []           | List of product categories and their mappings    |
| `isHomePage`              | boolean                                                     | false        | Whether current page is home page                |
| `isSearchPage`            | boolean                                                     | false        | Whether current page is search page              |
| `logLevel`                | "none" \| "verbose"                                         | "none"       | Logging verbosity level                          |

#### Bike Selector Configuration

| Option               | Type   | Default | Description                                                   |
| -------------------- | ------ | ------- | ------------------------------------------------------------- |
| `bikeSelectorBrands` | string | ""      | Comma separated string of specific brands to show in selector |

#### Compatible List Configuration

| Option                        | Type                         | Default | Description                        |
| ----------------------------- | ---------------------------- | ------- | ---------------------------------- |
| `products`                    | {[key: string]: ProductInfo} | {}      | Detailed product information       |
| `collectionUrl`               | string                       | ""      | URL for the current collection     |
| `compatiblityListCurrentPage` | number                       | 0       | Current page in compatibility list |
| `showCompatibleList`          | boolean                      | true    | Whether to show compatibility list |

#### Collection Result Configuration

| Option                     | Type                      | Default | Description                                |
| -------------------------- | ------------------------- | ------- | ------------------------------------------ |
| `productsCollections`      | {[key: string]: string[]} | {}      | Mapping of products to collections         |
| `showHomePageCollection`   | boolean                   | false   | Whether to show collections on home page   |
| `showSearchPageCollection` | boolean                   | false   | Whether to show collections on search page |

#### Product Result Configuration

| Option               | Type     | Default | Description                        |
| -------------------- | -------- | ------- | ---------------------------------- |
| `productCollections` | string[] | []      | Collections the product belongs to |

## Web Components

### Bike Selector

The core component for selecting a bike.

#### Basic Button

```html
<button id="bm_selectBikeButton">Select Bike</button>
<bikematrix-bikeselector></bikematrix-bikeselector>
```

#### Button with Bike Icon

```html
<button id="bm_selectBikeButton">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"
    />
  </svg>
</button>
<bikematrix-bikeselector></bikematrix-bikeselector>
```

[Configuration options](#bike-selector-configuration)

### Bike Selector Banner

Displays the currently selected bike.

```html
<bikematrix-bikeselectorbanner
  data-title="Bike Selector Banner"
  data-color="#000000"
  data-full-width="false"
  data-font-color="#ffffff"
  data-show="true"
></bikematrix-bikeselectorbanner>
```

Attributes:

- `data-title`: Banner title
- `data-color`: Background color
- `data-full-width`: Whether banner spans full width
- `data-font-color`: Text color
- `data-show`: Whether banner is visible

### Product Result

Shows compatibility for a single product.

```html
<bikematrix-productresult data-sku="PRODUCT_SKU" />
```

Attributes:

- `data-sku`: Product SKU to check compatibility

[Configuration options](#product-result-configuration)

### Collection Result

Shows compatibility for products in a collection.

```html
<bikematrix-collectionresult
  data-product-id="PRODUCT_ID"
  data-product-skus="SKU1,SKU2"
/>
```

Attributes:

- `data-product-id`: Product ID
- `data-product-skus`: Comma-separated list of SKUs

[Configuration options](#collection-result-configuration)

### Compatible List

Displays a list of compatible products.

```html
<bikematrix-compatiblelist data-title="Compatible Products">
  <!-- Product Card Template (optional) -->
  <template slot="product-card">
    <div class="bm-compatible-product-wrapper">
      <div class="bm-compatible-product-image">
        <a href="{{productUrl}}">
          <img src="{{featuredImage}}" width="80px" alt="" loading="lazy" />
        </a>
      </div>
      <div class="bm-compatible-product-title">
        <a href="{{productUrl}}">{{ productTitle }}</a>
      </div>
      <div class="bm-compatible-product-price">
        <a href="{{productUrl}}">
          <p><strong>{{ price }}</strong></p>
        </a>
      </div>
      {{ compatibility }}
    </div>
  </template>
  <!-- End of Product Card Template -->
</bikematrix-compatiblelist>
```

Attributes:

- `data-title`: List title

Default template variables:

- `{{productUrl}}`: Product page URL
- `{{featuredImage}}`: Product image URL
- `{{productTitle}}`: Product name
- `{{price}}`: Product price
- `{{compatibility}}`: Compatibility status

[Configuration options](#compatible-list-configuration)

## API Reference

The BikeMatrix global object provides several methods:

```javascript
// Initialize BikeMatrix (config is optional)
BikeMatrix.init(config);

// Check initialization status
BikeMatrix.isInitialized();

// Refresh compatibility data
BikeMatrix.refresh();

// Reset to initial state
BikeMatrix.reset();

// Reload components
BikeMatrix.reload();

// Clean up BikeMatrix
BikeMatrix.destroy();

// Update configuration
BikeMatrix.updateConfig(config);

// Get current configuration
BikeMatrix.getConfig();

// Get current bike
BikeMatrix.getCurrentBike();

// Get subscription status
BikeMatrix.getActiveSubscription();

// Update product result SKU
BikeMatrix.updateSku(sku);
```

## Framework Integration

### React Snippet

```jsx
import { useEffect } from "react";
import BikeMatrix from "@bikematrix/web-components";

function BikeMatrixCore() {
  useEffect(() => {
    BikeMatrix.init();
    return () => BikeMatrix.destroy();
  }, []);

  return null;
}
```

### Vue Snippet

```html
<script setup>
  import { onMounted, onBeforeUnmount } from "vue";
  import BikeMatrix from "@bikematrix/web-components";

  onMounted(() => {
    BikeMatrix.init();
  });

  onBeforeUnmount(() => {
    BikeMatrix.destroy();
  });
</script>
```

### Complete Examples

- [HTML](./basic)
- [NextJS](./nextjs)
- [PHP](./php)
- [React](./react)
- [Vue](./vue)

## Common Scenarios

### Reloading components after route change or dynamic content updates

```javascript
// After route change or dynamic content updates
BikeMatrix.reload();
```

### Updating collection data when switching between collections

```javascript
// After switching between collections
BikeMatrix.updateConfig({
  currentCollectionHandle: "new-collection",
  products: {
    // Updated collection products
  },
});
```

### Updating product SKU when switching between product variants on a product page

```javascript
function onSelectVariant(sku) {
  // Variant selection logic here...

  BikeMatrix.updateSku(sku);
}
```
