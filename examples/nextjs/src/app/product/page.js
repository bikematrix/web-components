import Image from "next/image";

export default function ProductPage() {
  // Demo product data
  const product = {
    id: "123",
    sku: "8022530035613",
    title: "Disc Resin Brake Pad 1-Pair",
    description:
      "High-performance brake pads designed for optimal stopping power in all weather conditions. Features advanced resin compound for reduced noise and improved durability. Compatible with various Shimano brake systems.",
    price: "$50.00",
    image: "https://via.placeholder.com/500",
    specs: [
      "Material: Resin compound",
      "Package includes: 1 pair (2 pads)",
      "Compatible with: Shimano hydraulic disc brake systems",
      "Recommended use: All-weather conditions"
    ]
  };

  return (
    <div className="container py-8 mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left column - Image */}
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Right column - Product details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-2xl font-bold text-gray-900">{product.price}</p>

          <div className="prose max-w-none">
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mt-6">
            {/* Bike Matrix Web Component - Product Result */}
            <bikematrix-productresult data-sku={product.sku} />

            {/* Bike Matrix Config - Product Result */}
            <script type="application/json" data-bikematrix-config>
              {JSON.stringify({
                productCollections: ["brake-pads"]
              })}
            </script>
          </div>
        </div>
      </div>
    </div>
  );
}
