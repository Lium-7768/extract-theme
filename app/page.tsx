import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";
import ProductGrid from "@/components/product-grid";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedProducts />
      <ProductGrid />
    </div>
  );
}