// components/home/CategoryQuickLinks.tsx
import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "1 Mukhi", href: "1-mukhi", image: "/images/1mukh.jpeg" },
  { name: "5 Mukhi", href: "5-mukhi", image: "/images/5mukh.jpeg" },
  { name: "Bracelets", href: "bracelets", image: "/images/braclet.jpeg" },
  { name: "Malas", href: "malas", image: "/images/mala.png" },
];

const CategoryQuickLinks = () => {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold">Explore Our Collections</h2>
          <p className="mt-2 text-foreground/70">Find the perfect bead for your needs.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={`/category/${category.href}`} className="group relative block overflow-hidden rounded-lg">
              <div className="relative w-full h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-xl font-semibold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryQuickLinks;
