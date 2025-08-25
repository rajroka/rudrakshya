// components/layout/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif font-semibold text-primary mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <Link href="/category/all" className="hover:underline">
                  All Beads
                </Link>
              </li>
              <li>
                <Link href="/category/bracelets" className="hover:underline">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link href="/category/malas" className="hover:underline">
                  Malas
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:underline">
                  Find Your Rudraksha
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-primary mb-4">About Us</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <Link href="/about" className="hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/authenticity" className="hover:underline">
                  Authenticity
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Knowledge Hub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-primary mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:underline">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-primary mb-4">Stay Connected</h3>
            <p className="text-sm text-foreground/80">
              Sign up for spiritual insights and offers.
            </p>
            {/* Newsletter form can go here */}
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Aum Rudraksha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
