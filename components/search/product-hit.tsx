"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

interface HitProps {
  hit: {
    name: string;
    price: number;
    image: string;
    description: string;
  };
}

export function ProductHit({ hit }: HitProps) {
  return (
    <Card className="flex gap-4 p-4">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={hit.image}
          alt={hit.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-0">
        <CardTitle className="text-lg">{hit.name}</CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">{hit.description}</p>
        <p className="mt-2 font-semibold">{formatPrice(hit.price)}</p>
      </CardContent>
    </Card>
  );
}