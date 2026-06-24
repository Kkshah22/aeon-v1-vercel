import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";
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
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);

  const navLinkClass = (to: string, className?: string) =>
    cn("editorial-link", className, isActive(to) && "text-ink");

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid grid-cols-3 items-center h-16 lg:h-20">
          {/* Desktop Left */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.18em] uppercase">
            <Link
              to="/women"
              className={navLinkClass("/women")}
              data-active={isActive("/women")}
            >
              Women
            </Link>

            <Link
              to="/men"
              className={navLinkClass("/men")}
              data-active={isActive("/men")}
            >
              Men
            </Link>

            <Link
              to="/essentials"
              className={navLinkClass("/essentials")}
              data-active={isActive("/essentials")}
            >
              Essentials
            </Link>
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

          {/* Desktop Right + Icons */}
          <div className="flex items-center justify-end gap-4 lg:gap-6">
            <div className="hidden lg:flex items-center gap-8 text-xs tracking-[0.18em] uppercase">
              <Link
                to="/journal"
                className={navLinkClass("/journal")}
                data-active={isActive("/journal")}
              >
                Journal
              </Link>

              <Link
                to="/about"
                className={navLinkClass("/about")}
                data-active={isActive("/about")}
              >
                About
              </Link>
            </div>

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

            <Link
              to="/cart"
              aria-label="Cart"
              className="relative"
            >
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
        <div className="lg:hidden fixed inset-0 z-[60] bg-paper flex flex-col fade-in-up">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="font-display text-2xl tracking-[0.4em]"
            >
              AEON
            </Link>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-8 p-10 text-2xl font-display">
            <Link
              to="/women"
              onClick={() => setOpen(false)}
              className={navLinkClass("/women")}
              data-active={isActive("/women")}
            >
              Women
            </Link>

            <Link
              to="/men"
              onClick={() => setOpen(false)}
              className={navLinkClass("/men")}
              data-active={isActive("/men")}
            >
              Men
            </Link>

            <Link
              to="/essentials"
              onClick={() => setOpen(false)}
              className={navLinkClass("/essentials")}
              data-active={isActive("/essentials")}
            >
              Essentials
            </Link>

            <div className="h-px bg-border my-2" />

            <Link
              to="/journal"
              onClick={() => setOpen(false)}
              className={navLinkClass("/journal", "text-base eyebrow")}
              data-active={isActive("/journal")}
            >
              Journal
            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className={navLinkClass("/about", "text-base eyebrow")}
              data-active={isActive("/about")}
            >
              About
            </Link>

            <Link
              to="/account"
              onClick={() => setOpen(false)}
              className={navLinkClass("/account", "text-base eyebrow")}
              data-active={isActive("/account")}
            >
              Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
