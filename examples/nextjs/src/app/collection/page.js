import Image from "next/image";
import Link from "next/link";
import BikeMatrixCompatibleList from "../../components/BikeMatrixCompatibleList";

export default function CollectionPage() {
  const results = [
    {
      id: "123", // Unique id for the product
      skus: ["8022530035613"], // Array of SKUs for the product
      title: "Disc Resin Brake Pad 1-Pair",
      description: "Description about the product",
      price: "$50.00",
      image: "https://via.placeholder.com/150",
      url: "/product",
    },
  ];

  return (
    <div>
      <main>
        <div className="container mx-auto">
          <h1 className="my-4 text-2xl font-bold">Collection: Break Pads</h1>

          {/* Bike Matrix Component - Compatible List */}
          <BikeMatrixCompatibleList />

          {/* Collection Grid */}
          <div className="grid w-full grid-cols-3 gap-4 mt-8">
            {/* Collection Grid Product Cards */}
            {results.map((product) => (
              <Link
                key={product.id}
                href={product.url}
                className="flex flex-col p-4 space-y-2 border border-gray-400 rounded-md"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={150}
                  className="w-full h-auto rounded-md"
                />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <div className="flex flex-col space-y-2">
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-lg font-bold ">{product.price}</p>

                  {/* Bike Matrix Web Component - Collection Result */}
                  <bikematrix-collectionresult
                    data-product-id={product.id}
                    data-product-skus={product.skus.join(",")}
                  ></bikematrix-collectionresult>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
