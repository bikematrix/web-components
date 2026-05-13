import React from "react";
import "./styles.css";
import {
  BikeSelector,
  BikeSelectorBanner,
  CollectionResult,
  CompatibleList,
  ProductResult
} from "./BikeMatrixExamples";
import BikeMatrixCore from "./BikeMatrixCore";

function App() {
  return (
    <div className="App">
      <div className="container flex flex-col w-full h-full px-4 py-8 mx-auto space-y-12">
        {/* Test Components */}
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-bold">Test Components</h2>

          {/* Bike Selector  */}
          <div className="p-4 border rounded">
            <h3 className="mb-2 font-semibold">Bike Selector</h3>
            <BikeSelector />
          </div>

          {/* Bike Selector Banner */}
          <div className="p-4 border rounded">
            <h3 className="mb-2 font-semibold">Banner</h3>
            <BikeSelectorBanner />
          </div>

          {/* Product Result */}
          <div className="p-4 border rounded">
            <h3 className="mb-2 font-semibold">Product Result</h3>
            <ProductResult />
          </div>

          {/* Compatible List */}
          <div className="p-4 border rounded">
            <h3 className="mb-2 font-semibold">Compatible List</h3>
            <CompatibleList />
          </div>

          {/* Collection Result */}
          <div className="p-4 border rounded">
            <h3 className="mb-2 font-semibold">Collection Result</h3>
            <CollectionResult />
          </div>
        </div>
      </div>

      {/* Bike Matrix Core */}
      <BikeMatrixCore />

      {/* Bike Matrix Config */}
      <script type="application/json" data-bikematrix-config>
        {JSON.stringify({
          logLevel: "verbose",
          apiUrl: "https://api-staging.bikematrix.io/bike/v3/",
          apiKey: "YOUR_API_KEY",
          pageType: "collection",
          collections: [
            {
              title: "Brake pads",
              handle: "brake-pads",
              url: "/collections/brake-pads"
            },
            {
              title: "Tyres & Tubes",
              handle: "tyres-tubes",
              url: "/collections/tyres-tubes"
            },
            {
              title: "Rotors",
              handle: "rotors-1",
              url: "/collections/rotors-1"
            },
            {
              title: "Wheels & Rims",
              handle: "wheels-rims",
              url: "/collections/wheels-rims"
            }
          ],
          categories: [
            {
              title: "Brake Pads",
              text_id: "category_brakepads",
              collection: "Brake pads"
            }
          ]
        })}
      </script>
    </div>
  );
}

export default App;
