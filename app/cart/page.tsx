// app/cart/page.tsx

"use client"; // This MUST be a client component

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";

// Define the Product and CartItem interfaces
interface Product {
  _id: string; // Using _id to match your API response
  title: string;
  featuredImage?: string;
  price?: number;
}

interface CartItem extends Product {
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false); // For handling hydration

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setIsMounted(true);
  }, []);

  // Helper function to update both state and localStorage
  const updateCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Handler for changing item quantity
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    let updatedCart;
    if (newQuantity < 1) {
      // Remove item if quantity is less than 1
      updatedCart = cartItems.filter((item) => item._id !== productId);
    } else {
      updatedCart = cartItems.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      );
    }
    updateCart(updatedCart);
  };

  // Handler for removing an item completely
  const handleRemoveItem = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    updateCart(updatedCart);
  };

  // Calculate order summary
  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );
  const shippingCost = subtotal > 50 ? 0 : 5; // Example: Free shipping over $50
  const total = subtotal + shippingCost;

  // Avoid rendering until the component is mounted to prevent hydration errors
  if (!isMounted) {
    return null; // Or you can return a loading skeleton here
  }

  // --- Render the Empty Cart View ---
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center">
        <ShoppingCart className="h-16 w-16 text-foreground/30 mb-4" />
        <h1 className="font-serif text-3xl font-bold">Your Cart is Empty</h1>
        <p className="mt-2 max-w-md text-foreground/60">
          Looks like you havent added anything to your cart yet.
        </p>
        <Link 
          href="/category" 
          className="mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // --- Render the Cart with Items ---
  return (
    <div className="bg-muted/50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-serif text-4xl font-bold mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side: Cart Items */}
          <div className="lg:col-span-2 bg-background p-6 rounded-lg shadow-sm">
            <ul role="list" className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item._id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image
                      src={item.featuredImage || "/placeholder.jpg"}
                      alt={item.title}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-foreground">
                        <h3><Link href={`/category/${item._id}`}>{item.title}</Link></h3>
                        <p className="ml-4">${((item.price || 0) * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center border rounded-md">
                        <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)} className="p-2"><Minus size={16}/></button>
                        <span className="px-3">{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)} className="p-2"><Plus size={16}/></button>
                      </div>
                      <div className="flex">
                        <button onClick={() => handleRemoveItem(item._id)} type="button" className="font-medium text-red-500 hover:text-red-700 flex items-center gap-1">
                          <Trash2 size={16} /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-background p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-lg font-medium text-foreground border-b pb-4">Order Summary</h2>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-foreground/70">Subtotal</p>
                  <p className="text-sm font-medium">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-foreground/70">Shipping estimate</p>
                  <p className="text-sm font-medium">${shippingCost.toFixed(2)}</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-between text-base font-medium">
                  <p>Order total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
              <div className="mt-6">
                <button 
                  onClick={() => alert('Redirecting to checkout...')}
                  className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg shadow hover:bg-primary/90 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;