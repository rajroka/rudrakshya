// components/layout/Navbar.tsx

import Link from "next/link";
import { Search, ShoppingCart, Heart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-bold text-primary">
          Aum Rudraksha
        </Link>

        {/* Navigation Links */}
        {/* <nav className="hidden md:flex gap-6 font-inter   text-base">
          <Link href="/category/5-mukhi" className="transition-colors hover:text-primary">
            5 Mukhi
          </Link>
          <Link href="/category/bracelets" className="transition-colors hover:text-primary">
            Bracelets
          </Link>
          <Link href="/category/malas" className="transition-colors hover:text-primary">
            Malas
          </Link>
          <Link href="/category/rare" className="transition-colors hover:text-primary">
            Rare Collections
          </Link>
          <Link href="/blog" className="transition-colors hover:text-primary">
            Knowledge Hub
          </Link>
        </nav> */}

        <nav className="hidden md:flex gap-6 font-inter text-base">
  <Link
    href="/category/5-mukhi"
    className="relative after:block after:w-0 after:h-0.5 after:bg-primary after:absolute after:-bottom-1 after:left-0 after:transition-all hover:after:w-full"
  >
    5 Mukhi
  </Link>
  <Link
    href="/category/bracelets"
    className="relative after:block after:w-0 after:h-0.5 after:bg-primary after:absolute after:-bottom-1 after:left-0 after:transition-all hover:after:w-full"
  >
    Bracelets
  </Link>
  <Link
    href="/category/malas"
    className="relative after:block after:w-0 after:h-0.5 after:bg-primary after:absolute after:-bottom-1 after:left-0 after:transition-all hover:after:w-full"
  >
    Malas
  </Link>
  <Link
    href="/category/rare"
    className="relative after:block after:w-0 after:h-0.5 after:bg-primary after:absolute after:-bottom-1 after:left-0 after:transition-all hover:after:w-full"
  >
    Rare Collections
  </Link>
  <Link
    href="/blog"
    className="relative after:block after:w-0 after:h-0.5 after:bg-primary after:absolute after:-bottom-1 after:left-0 after:transition-all hover:after:w-full"
  >
    Knowledge Hub
  </Link>
</nav>


        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-foreground/70 hover:text-primary">
            <Search size={20} />
          </button>
          <Link href="/wishlist" className="text-foreground/70 hover:text-primary">
            <Heart size={20} />
          </Link>
          <Link href="/cart" className="relative text-foreground/70 hover:text-primary">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
