// This file is located at a path like app/category/[categoryId]/page.tsx
// It fetches a single product using the `categoryId` as its unique ID.

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck, Gem, Leaf } from "lucide-react";

// It's good practice to define a more detailed interface for your product
interface Product {
  title: string;
  content: string;
  featuredImage?: string;
  category?: string;
  price?: number; // Example: Add price for e-commerce features
  origin?: string; // Example: 'Nepal'
}

// Fetching function with improved error handling
async function getProduct(productId: string): Promise<Product | null> {
  try {
    const response = await axios.get(
      `https://blogging-site-c9f1.vercel.app/api/blogs/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch product with ID ${productId}:`, error);
    return null;
  }
}

// SEO: Generate dynamic page titles and descriptions
export async function generateMetadata({ params }: { params: { categoryId: string } }) {
  const product = await getProduct(params.categoryId);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.title} - Aum Rudraksha`,
    description: product.content ? product.content.substring(0, 160) : 'Discover authentic spiritual beads.',
  };
}


const ProductPage = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = params;
  const product = await getProduct(categoryId);

  // Use Next.js's notFound() for a proper 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="bg-muted/50  font-inter">
      <div className="container mx-auto px-4 py-12">
        {/* --- Breadcrumbs for Better Navigation --- */}
        {/* <div className="mb-6 text-sm text-foreground/60">
          <Link href="/" className="hover:text-primary">Home</Link>
          {' / '}
          <Link href="/products" className="hover:text-primary">Products</Link>
          {product.category && (
            <>
              {' / '}
              <span className="capitalize text-base  text-foreground">{product.category}</span>
            </>
          )}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-background p-8 rounded-lg shadow-sm">
          {/* --- Left Column: Product Image --- */}
          <div className="relative w-full h-80 md:h-full min-h-[450px] rounded-lg overflow-hidden">
            <Image
              src={product.featuredImage || "/placeholder.jpg"}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* --- Right Column: Product Details --- */}
          <div className="flex flex-col">
            {product.category && (
              <span className="text-base  text-primary bg-secondary/50 px-3 py-1 rounded-full self-start">
                {product.category}
              </span>
            )}

            <h1 className="font-serif text-3xl lg:text-4xl font-bold mt-4 mb-3">
              {product.title}
            </h1>

            <p className="text-2xl text-primary mb-6">
              {product.price ? `$${product.price.toFixed(2)}` : 'Price on request'}
            </p>

            {/* --- Call to Action --- */}
            <div className="mb-8">
              <button className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg shadow hover:bg-primary/90 transition-colors">
                Add to Cart
              </button>
            </div>
            
            {/* --- Trust Signals --- */}
            <div className="space-y-3 border-t border-b py-4 mb-6">
              <div className="flex items-center gap-3 text-foreground/80">
                <ShieldCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-base">100% Genuine Guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Gem className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <span className="text-base">Lab Certified for Authenticity</span>
              </div>
              {product.origin && (
                <div className="flex items-center gap-3 text-foreground/80">
                  <Leaf className="h-6 w-6 text-yellow-700 flex-shrink-0" />
                  <span className="text-base">Sourced from {product.origin}</span>
                </div>
              )}
            </div>

            {/* --- Description --- */}
            <div>
              <h3 className="font-serif font-semibold text-xl mb-2">Description</h3>
              <div className="prose prose-p:text-foreground/80 prose-p:leading-relaxed max-w-none">
                {/* For safety, if content could be HTML, use dangerouslySetInnerHTML after sanitizing it */}
                <p>{product.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;