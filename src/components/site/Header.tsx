import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { categories } from "@/lib/products";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  User,
} from "lucide-react";

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid grid-cols-3 items-center h-16 lg:h-20">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.18em] uppercase">
            <Link to="/shop" className="editorial-link">
              Shop
            </Link>

            {categories.slice(0, 3).map((c) => (
              <Link
                key={c.slug}
                to="/shop"
                search={{ category: c.slug } as never}
                className="editorial-link"
              >
                {c.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden -ml-2 p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="text-center font-display text-3xl tracking-[0.4em] lg:text-4xl"
          >
            AEON
          </Link>

          {/* Right Icons */}
          <div className="flex items-center justify-end gap-4 lg:gap-6">
            <Link
              to="/shop"
              aria-label="Search"
              className="hidden sm:inline-flex"
            >
              <Search className="size-5" />
            </Link>

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="hidden sm:inline-flex"
            >
              <Heart className="size-5" />
            </Link>

            <Link
              to="/account"
              aria-label="Account"
              className="hidden sm:inline-flex"
            >
              <User className="size-5" />
            </Link>

            <Link to="/cart" aria-label="Cart" className="relative">
              <ShoppingBag className="size-5" />

              {count > 0 && (
                <span className="absolute -top-1 -right-2 bg-ink text-paper text-[10px] min-w-[16px] h-[16px] inline-flex items-center justify-center px-1">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 bg-paper z-50 flex flex-col fade-in-up">
          <div className="flex items-center justify-between h-16 px-6 border-b border-border">
            <span className="font-display text-2xl tracking-[0.4em]">
              AEON
            </span>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-8 p-10 text-2xl font-display">
            <Link to="/shop" onClick={() => setOpen(false)}>
              Shop All
            </Link>

            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/shop"
                search={{ category: c.slug } as never}
                onClick={() => setOpen(false)}
              >
                {c.name}
              </Link>
            ))}

            <div className="h-px bg-border my-2" />

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-base eyebrow"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-base eyebrow"
            >
              Contact
            </Link>

            <Link
              to="/wishlist"
              onClick={() => setOpen(false)}
              className="text-base eyebrow"
            >
              Wishlist
            </Link>

            <Link
              to="/account"
              onClick={() => setOpen(false)}
              className="text-base eyebrow"
            >
              Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
