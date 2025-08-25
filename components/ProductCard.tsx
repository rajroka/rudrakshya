import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  img: string;
  price: number;
  fakePrice?: number; // Optional fake price for display
  discountPercent?: number; // Optional discount percentage
}

export default function ProductCard({ 
  id, 
  name, 
  img, 
  price, 
  fakePrice, 
  discountPercent 
}: ProductCardProps) {
  // Calculate discount percentage if not provided but fakePrice is
  const discount = discountPercent || (fakePrice ? Math.round(((fakePrice - price) / fakePrice) * 100) : 0);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative">
        <Image 
          src={img} 
          alt={name} 
          width={300} 
          height={300} 
          className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300" 
        />
        
        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {discount}% OFF
          </div>
        )}
        
        {/* Quick view button */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link 
            href={`/product/${id}`} 
            className="bg-saffron text-white px-4 py-2 rounded-full font-medium"
          >
            Quick View
          </Link>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-brown font-semibold text-lg mb-2 line-clamp-1">{name}</h2>
        
        <div className="flex items-center gap-2 mb-2">
          {/* Rating stars */}
          <div className="flex text-amber-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">(42)</span>
        </div>
        
        <div className="flex items-center gap-2 mt-3">
          {/* Current price */}
          <p className="text-saffron font-bold text-xl">₹{price.toLocaleString()}</p>
          
          {/* Fake price with strikethrough */}
          {fakePrice && fakePrice > price && (
            <p className="text-gray-400 text-sm line-through">₹{fakePrice.toLocaleString()}</p>
          )}
        </div>
        
        {/* Add to cart button */}
        <button className="mt-4 w-full bg-saffron hover:bg-amber-600 text-white py-2 rounded transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}