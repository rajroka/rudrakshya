
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

// Interface for our product data for type safety
interface Product {
  _id: string;
  title: string;
  category?: string;
  image?: string;
  featuredImage?: string;
  description?: string;
  // Add other properties like price if they exist in your API
  // price?: number;
}

// Data fetching function using axios
async function getProducts(): Promise<Product[]> {
  try {
    const res = await axios.get("https://blogging-site-c9f1.vercel.app/api/blogs");

    // Axios wraps the response in a `data` object
    const productsData = res.data.posts;

    // Ensure the response is an array before returning
    if (!Array.isArray(productsData)) {
      throw new Error("API did not return an array of products");
    }

    return productsData;

  } catch (error) {
    console.error("Failed to fetch products:", error);
    // In a server component, throwing an error will be caught by the nearest error.tsx file
    throw new Error("Failed to fetch products. Please try again later.");
  }
}

const AllProductsPage = async () => {
  const products = await getProducts();

  // Get all unique categories from the products array
  const categories = Array.from(
    // Use a Set to automatically handle uniqueness
    new Set(products.map((p) => p.category).filter(Boolean)) // filter(Boolean) removes any null/undefined categories
  ) as string[];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="font-serif text-4xl font-bold">All Products</h1>
        <p className="mt-2 text-foreground/70">
          Explore our curated collections of authentic spiritual items.
        </p>
      </div>

      {/* Sticky Category Navigation */}
      <nav className="sticky top-16 z-40 bg-background/80 backdrop-blur-md py-3 mb-12 border-b">
        <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
          <Link
            href="#all"
            className="text-sm font-medium text-primary hover:underline whitespace-nowrap"
          >
            All
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              {category}
            </Link>
          ))}
        </div>
      </nav>

      {/* Products grouped by Category */}
      <div id="all">
        {categories.map((category) => (
          <div
            key={category}
            // Add an ID to each section to allow the nav links to jump to it
            id={category.toLowerCase().replace(/\s+/g, "-")}
            className="mb-16 scroll-mt-24" // scroll-mt adds top margin when jumping to the ID
          >
            <h2 className="font-serif text-3xl font-bold mb-6 border-b pb-2 text-primary">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div
                    key={product._id}
                    className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-background"
                  >
                    <Link href={`/category/${product._id}`} className="block">
                      <div className="relative w-full h-52">
                        <Image
                          src={product.featuredImage || "/placeholder.jpg"} // Fallback image
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
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;