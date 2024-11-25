import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: "$299",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: "$399",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: 3,
    name: "Professional Camera Kit",
    price: "$1299",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
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
              <CardTitle className="text-xl">{product.name}</CardTitle>
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