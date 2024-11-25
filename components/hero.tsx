import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Discover Your Style
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Shop the latest trends in fashion, electronics, and more. Free shipping on orders over $50.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg">
            Shop Now
          </Button>
          <Button variant="outline" size="lg">
            View Collections
          </Button>
        </div>
      </div>
    </div>
  );
}