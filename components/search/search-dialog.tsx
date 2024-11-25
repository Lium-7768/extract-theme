"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import { ProductHit } from "./product-hit";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "YOUR_APP_ID",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || "YOUR_SEARCH_API_KEY"
);

export function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search products</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <InstantSearch 
          searchClient={searchClient} 
          indexName="products"
        >
          <div className="space-y-4">
            <SearchBox
              classNames={{
                root: "relative",
                form: "relative",
                input: "w-full h-10 px-4 rounded-md border border-input bg-background",
                submit: "absolute right-2 top-2",
                reset: "hidden",
              }}
              placeholder="Search products..."
            />
            <Hits hitComponent={ProductHit} />
          </div>
        </InstantSearch>
      </DialogContent>
    </Dialog>
  );
}