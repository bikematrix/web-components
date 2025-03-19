# Bike Matrix Web Components

Our Mission is to transform the bicycle industry by offering a comprehensive compatibility solution to all retailers, service providers, manufacturers, and riders, by seamlessly connecting replacement parts to a specific bike.

Using the Bike Matrix Web Components allows any web application to provide its users the accurate selection of a bike from our database of over 50,000 Bikes by Brand, Model, Spec, Year and Size. The web application can then run a series of complex compatibility algorithms over the nominated EAN, UPC or Manufacturer Part Number, returning a Compatibility Result with messages for display to your users for the selected bike and component.

![Bike Matrix Compatibility](https://raw.githubusercontent.com/bikematrix/assets/main/files/compatibility_indicator.jpg)

## Table of Contents

- [Introduction](#introduction)
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

## Introduction

Bike Matrix is a compatibility solution that answers the question, which parts fit this bike?
We provide the ability for a user to select a bike and see which parts, from your available products, are suitable replacement or upgrades by processing mechanic-led, component-level compatibility assessment on the products being viewed, searched or filtered.

The Web Components are pre-built Javascript components that can quickly be placed on your website and can provide you with the list of bikes that we have in our database and, along with images, can allow a user to easily select their bike. We have over 50,000 Bikes by Brand, Make, Model, Spec, Year and Size and are currently working to enrich the data of the remaining 100,000+ bikes in our dataset.

We have built up a comprehensive database of components such as Brake Pads, Tyres, Tubes, Brake Rotors, Wheels, Chains, Cassettes, Headsets and many more.

As part of the Onboarding process, it is important to talk to us to check that the products on your website that you would like to show compatibility for, are in our database. If the product does not exist in our database just provide us with the information we might need to get the product set up.

We use internationally recognised EAN or UPC barcodes, or the Original Manufacturer’s Part Number to identify products being assessed for compatibility. It is imperative that one of these three product identifiers is used. We use this product SKU to determine the Product Category, and therefore the compatibility logic to apply.

![Product Result](https://raw.githubusercontent.com/bikematrix/assets/main/files/product_result.jpg)

To check if a product is compatible with a specific Bike we first need to guide the user towards finding the exact bike, via our Bike Selector using the following taxonomy: Brand, Model Family, Model Spec, Bike Spec, Year and Size.

* Brand is the Bike Brand that makes the Bike.
* Model Family refers to the high-level name of the Model within the Brand’s portfolio, such as Domane (Trek), Trance (Giant) or Scultura (Merida).
* Model Spec (sometimes referred to as Frame Spec) is the name for the different frame specifications within a Model Family. It could be that there is only AL(alloy), or perhaps there is Alloy and Carbon or it could be AL, CF, CF SL and CF SLX (eg Canyon).
* Bike Spec is the ‘spec level’ of each specific Models and can take many forms and include groupset names. It usually contains a number such as 3, 2, 1, and 0 or 200, 400, 500 or it can have Comp, Expert, Pro labels depending on the Brand and Model Family.
* Year is an obvious one, but the selection of year can change the list of Bike Spec or Model Spec that were available for a given Model Family.
* Size will depend on the bike brand model and year and can take several forms, S, M, L in some cases, 15”, 16”, 17” in others. Sometimes it’s Short and Long, or S1, S2, S3, S4 (eg Specialized) and for kids bikes we tend to refer to the wheelsize.

![Bike Selector](https://raw.githubusercontent.com/bikematrix/assets/main/files/bike_selector.jpg)

We’ve put considerable effort into designing a Bike Selector that we think guides the user to the correct bike in an easy to understand manner. Unfortunately, some bikes are just confusing, and some customers don’t immediately know which bike they have. 

![Bike Selector](https://raw.githubusercontent.com/bikematrix/assets/main/files/bike_selector2.jpg)

The other consideration that is very important to us is our Brand Representation. A condition of signing a licence to use Bike Matrix APIs, is the requirement to incorporate our Compatibility Indicators and the “Powered by Bike Matrix” link.

The Compatibility Indicators are the graphic representations of Green (Compatible), Amber (Compatible with Conditions) and Red (Not Compatible) on both the Collection or Product Landing Page (PLP), and also on the Product Details Page (PDP). Again, these are all built into the Bike Matrix Web Components.

By standardising the look and feel of the compatibility results across all websites, trust is built and confidence is increased, which results in increased conversions. This is also why we recommend locating the Compatibility Indicators close to the Buy Now or Add to Cart buttons, as it will form an important part of the buying journey.

![Compatibility Indicators](https://raw.githubusercontent.com/bikematrix/assets/main/files/compatibility_indicators.jpg)

## Obtaining API Credentials

The Web Components require access to the Bike Matrix API. To request access to the Bike Matrix API send us an email at adamb@bikematrix.io and we will create your subscription and provide you with access to our staging APIs allowing you to explore and test functionality. When you’re ready, we can activate your licence and provide access to the entire bike database through the Production API. Depending on your deployment scenario we will provide an API Key or we will add your environments information to our whitelist.

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
  src="https://cdn.jsdelivr.net/npm/@bikematrix/web-components@1.1/dist/bm_core.js"
></script>
```

Note: Replace version `1.1` in the above URL with the latest version number, or the specific version you want to use.

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
  src="https://cdn.jsdelivr.net/npm/@bikematrix/web-components@1.1/dist/bm_core.js"
></script>
```

Note: Replace version `1.1` in the above URL with the latest version number, or the specific version you want to use.

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
| `categories`              | Array<{title: string, text_id: string, collection: string}> | []           | List of product categories and their mappings. See below for a list of all available Categories. Note the 'collection' of the Category must match the Title of one of the items in the collection array (above) for it to show on the Bike Selector as an available Category    |
| `isHomePage`              | boolean                                                     | false        | Whether current page is home page                |
| `isSearchPage`            | boolean                                                     | false        | Whether current page is search page              |
| `logLevel`                | "none" \| "verbose"                                         | "none"       | Logging verbosity level                          |

The list of available Categories is:
```html
<script type="application/json" data-bikematrix-config>
  {
    "categories": [
      {
        "title":"Brake Pads",
        "text_id":"category_brakepads",
        "collection": "{{brake_padsCollectionTitle}}"
      },
      {
        "title":"Brake Rotor",
        "text_id":"category_brakerotor",
        "collection": "{{brake_rotorCollectionTitle}}"
      },
      {
        "title":"Front Wheel",
        "text_id":"category_frontwheel",
        "collection": "{{front_wheelCollectionTitle}}"
      },
      {
        "title":"Rear Wheel",
        "text_id":"category_rearwheel",
        "collection": "{{rear_wheelCollectionTitle}}"
      },
      {
        "title":"Wheelset",
        "text_id":"category_wheelset",
        "collection": "{{wheelsetCollectionTitle}}"
      },
      {
        "title":"Tyre",
        "text_id":"category_tyre",
        "collection": "{{tyreCollectionTitle}}"
      },
      {
        "title":"Tube",
        "text_id":"category_tube",
        "collection": "{{tubeCollectionTitle}}"
      },
      {
        "title":"Chain",
        "text_id":"category_chain",
        "collection": "{{chainCollectionTitle}}"
      },
      {
        "title":"Cassette",
        "text_id":"category_cassette",
        "collection": "{{cassetteCollectionTitle}}"
      },
      {
        "title":"Headset",
        "text_id":"category_headset",
        "collection": "{{headsetCollectionTitle}}"
      },
      {
        "title":"Bottom Bracket",
        "text_id":"category_bottombracket",
        "collection": "{{bottomBracketCollectionTitle}}"
      },
      {
        "title":"Crankset",
        "text_id":"category_crankset",
        "collection": "{{cranksetCollectionTitle}}"
      },
      {
        "title":"Chainring",
        "text_id":"category_chainring",
        "collection": "{{chainringCollectionTitle}}"
      },
      {
        "title":"Front Axle",
        "text_id":"category_frontaxle",
        "collection": "{{frontAxleCollectionTitle}}"
      },
      {
        "title":"Rear Axle",
        "text_id":"category_rearaxle",
        "collection": "{{rearAxleCollectionTitle}}"
      }
    ],
  }
</script>
```

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

- [HTML](./examples/basic)
- [NextJS](./examples/nextjs)
- [PHP](./examples/php)
- [React](./examples/react)
- [Vue](./examples/vue)

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
