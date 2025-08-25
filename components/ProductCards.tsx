// components/ui/ProductCard.tsx

import Link from "next/link";
import Image from "next/image";

// Re-use the Product interface
interface Product {
    _id: string;
    title: string;
    featuredImage?: string;
    description?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div
          className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-background"
        >
            <Link href={`/category/${product._id}`} className="block">
                <div className="relative w-full h-52">
                    <Image
                        src={product.featuredImage || "/placeholder.jpg"}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-lg truncate" title={product.title}>
                        {product.title}
                    </h3>
                    {product.description && (
                        <p className="text-sm text-foreground/70 mt-1 h-10 overflow-hidden">
                            {product.description}
                        </p>
                    )}
                    <span className="text-primary mt-3 inline-block text-sm font-medium group-hover:underline">
                        View Product →
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;