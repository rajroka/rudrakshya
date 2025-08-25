// app/wishlist/page.tsx

"use client"; // This is CRITICAL for using localStorage and hooks

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeartOff, ShoppingCart, X } from "lucide-react";

// Use the same Product interface for consistency
interface Product {
  id: string;
  title: string;
  image?: string;
  description?: string;
  price?: number;
}

const WishlistPage = () => {
  // State to hold the items from localStorage
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // useEffect runs when the component mounts on the client
  useEffect(() => {
    // Load items from localStorage
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist));
    }
    setIsMounted(true); // Indicate that the component has mounted
  }, []); // The empty array ensures this runs only once on mount

  // Function to remove an item from the wishlist
  const handleRemoveFromWishlist = (productId: string) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== productId);
    setWishlistItems(updatedWishlist);
    // Update localStorage with the new array
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Placeholder function to handle adding to cart
  const handleMoveToCart = (product: Product) => {
    // In a real app, you would add this to your cart state management
    alert(`${product.title} moved to cart!`);
    // After moving, remove it from the wishlist
    handleRemoveFromWishlist(product.id);
  };
  
  // Avoid hydration mismatch by waiting for the component to mount
  if (!isMounted) {
    return null; // Or a loading spinner
  }

  // --- Render the Empty Wishlist View ---
  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center">
        <HeartOff className="h-16 w-16 text-foreground/30 mb-4" />
        <h1 className="font-serif text-3xl font-bold">Your Wishlist is Empty</h1>
        <p className="mt-2 max-w-md text-foreground/60">
          You havenot  added any items to your wishlist yet. Start exploring our collections to find something you love.
        </p>
        <Link 
          href="/category" 
          className="mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  // --- Render the Wishlist with Items ---
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-left mb-10 border-b pb-4">
        <h1 className="font-serif text-4xl font-bold">My Wishlist</h1>
        <p className="mt-2 text-foreground/70">
          Your curated collection of spiritual items.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="group relative border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-background"
          >
            {/* Remove Button */}
            <button
              onClick={() => handleRemoveFromWishlist(item.id)}
              className="absolute top-2 right-2 z-10 p-1.5 bg-background/70 rounded-full text-foreground/60 hover:text-red-500 hover:bg-background transition-all"
              aria-label="Remove from wishlist"
            >
              <X size={18} />
            </button>

            <Link href={`/products/${item.id}`} className="block">
              <div className="relative w-full h-52">
                <Image
                  src={item.image || "/placeholder.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            
            <div className="p-4 flex flex-col h-48 justify-between">
              <div>
                <h3 className="font-semibold text-lg truncate" title={item.title}>
                  {item.title}
                </h3>
                {item.price && (
                  <p className="text-primary font-medium mt-1">${item.price.toFixed(2)}</p>
                )}
              </div>
              
              <button
                onClick={() => handleMoveToCart(item)}
                className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground font-semibold rounded-lg shadow-sm hover:bg-secondary/80 transition-colors"
              >
                <ShoppingCart size={16} />
                Move to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;