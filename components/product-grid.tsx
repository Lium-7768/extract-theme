import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Minimalist Backpack",
    price: "$89",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&q=80",
  },
  {
    id: 2,
    name: "Classic Leather Watch",
    price: "$199",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: "$159",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80",
  },
  {
    id: 4,
    name: "Premium Sunglasses",
    price: "$129",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
  },
  {
    id: 5,
    name: "Designer Wallet",
    price: "$79",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
  },
  {
    id: 6,
    name: "Fitness Tracker",
    price: "$99",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
  },
];

export default function ProductGrid() {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">New Arrivals</h2>
        <Button variant="outline">View All</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group">
            <CardHeader>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <p className="text-lg font-semibold mt-2">{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}