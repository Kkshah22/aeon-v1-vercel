import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  User,
} from "lucide-react";

type MegaMenuKey = "work" | "travel" | "weekend" | "evening";

type MegaMenuLink = {
  label: string;
  search?: Record<string, string>;
};

type MegaMenuColumn = {
  heading: string;
  links: MegaMenuLink[];
};

const shopLink = (label: string, search?: Record<string, string>): MegaMenuLink => ({
  label,
  search,
});

const megaMenus: Record<MegaMenuKey, { label: string; columns: MegaMenuColumn[] }> = {
  work: {
    label: "Work",
    columns: [
      {
        heading: "Start Here",
        links: [
          shopLink("Build Your Work Wardrobe", { category: "ready-to-wear" }),
          shopLink("Foundation Pieces", { sort: "featured" }),
          shopLink("New for Work", { sort: "newest" }),
          shopLink("The Monday Edit", { category: "ready-to-wear" }),
        ],
      },
      {
        heading: "Wardrobe",
        links: [
          shopLink("Shirts", { category: "ready-to-wear" }),
          shopLink("Trousers", { category: "ready-to-wear" }),
          shopLink("Tailored Layers", { category: "ready-to-wear" }),
          shopLink("Knitwear", { category: "knitwear" }),
        ],
      },
      {
        heading: "Finish",
        links: [
          shopLink("Bags", { category: "bags" }),
          shopLink("Shoes", { category: "shoes" }),
          shopLink("Quiet Accessories", { category: "accessories" }),
        ],
      },
    ],
  },
  travel: {
    label: "Travel",
    columns: [
      {
        heading: "Start Here",
        links: [
          shopLink("Build Your Travel Wardrobe", { category: "bags" }),
          shopLink("Carry-On Edit", { category: "bags" }),
          shopLink("Airport Layers", { category: "knitwear" }),
          shopLink("New for Travel", { sort: "newest" }),
        ],
      },
      {
        heading: "Pack",
        links: [
          shopLink("Soft Knits", { category: "knitwear" }),
          shopLink("Fluid Layers", { category: "ready-to-wear" }),
          shopLink("Travel Shoes", { category: "shoes" }),
          shopLink("Day Bags", { category: "bags" }),
        ],
      },
      {
        heading: "System",
        links: [
          shopLink("One Bag Weekend", { category: "bags" }),
          shopLink("Repeatable Outfits", { sort: "featured" }),
          shopLink("Low-Effort Polish", { category: "accessories" }),
        ],
      },
    ],
  },
  weekend: {
    label: "Weekend",
    columns: [
      {
        heading: "Start Here",
        links: [
          shopLink("Build Your Weekend Wardrobe", { category: "knitwear" }),
          shopLink("Off-Duty Staples", { sort: "featured" }),
          shopLink("Soft Structure", { category: "ready-to-wear" }),
          shopLink("Best Sellers", { sort: "featured" }),
        ],
      },
      {
        heading: "Wardrobe",
        links: [
          shopLink("Knitwear", { category: "knitwear" }),
          shopLink("Easy Trousers", { category: "ready-to-wear" }),
          shopLink("Relaxed Shirts", { category: "ready-to-wear" }),
          shopLink("Everyday Shoes", { category: "shoes" }),
        ],
      },
      {
        heading: "Finish",
        links: [
          shopLink("Small Bags", { category: "bags" }),
          shopLink("Minimal Jewelry", { category: "accessories" }),
          shopLink("Scarves & Belts", { category: "accessories" }),
        ],
      },
    ],
  },
  evening: {
    label: "Evening",
    columns: [
      {
        heading: "Start Here",
        links: [
          shopLink("Build Your Evening Wardrobe", { category: "ready-to-wear" }),
          shopLink("After Dark Edit", { sort: "featured" }),
          shopLink("New for Evening", { sort: "newest" }),
          shopLink("Best Sellers", { sort: "featured" }),
        ],
      },
      {
        heading: "Wardrobe",
        links: [
          shopLink("Precise Dresses", { category: "ready-to-wear" }),
          shopLink("Polished Layers", { category: "ready-to-wear" }),
          shopLink("Evening Shoes", { category: "shoes" }),
          shopLink("Compact Bags", { category: "bags" }),
        ],
      },
      {
        heading: "Finish",
        links: [
          shopLink("Jewelry", { category: "accessories" }),
          shopLink("Belts", { category: "accessories" }),
          shopLink("Quiet Statement Pieces", { category: "accessories" }),
        ],
      },
    ],
  },
};

const megaMenuKeys = Object.keys(megaMenus) as MegaMenuKey[];

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaMenuKey | null>(null);
  const [mobileMenu, setMobileMenu] = useState<MegaMenuKey | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation({
    select: (current) => ({
      pathname: current.pathname,
      search: current.search as { category?: string },
    }),
  });

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname === to || location.pathname.startsWith(`${to}/`);

  const navLinkClass = (active: boolean, className?: string) =>
    cn("editorial-link", className, active && "text-ink");

  const closeMenus = () => {
    setActiveMenu(null);
    setMobileMenu(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileMenu(null);
        setOpen(false);
      }
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setActiveMenu(null)}
      className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-border"
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <div className="flex min-w-0 items-center gap-10 xl:gap-14">
            <Link
              to="/"
              className="shrink-0 font-display text-3xl tracking-[0.4em] lg:text-4xl"
              onMouseEnter={() => setActiveMenu(null)}
            >
              AEON
            </Link>

            <nav className="hidden items-center gap-8 text-xs tracking-[0.13em] uppercase xl:gap-10 lg:flex">
              {megaMenuKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === key}
                  onMouseEnter={() => setActiveMenu(key)}
                  onFocus={() => setActiveMenu(key)}
                  onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                  className={navLinkClass(activeMenu === key, "uppercase")}
                  data-active={activeMenu === key}
                >
                  {megaMenus[key].label}
                </button>
              ))}

              <Link
                to="/journal"
                onMouseEnter={() => setActiveMenu(null)}
                className={navLinkClass(isActive("/journal"))}
                data-active={isActive("/journal")}
              >
                Journal
              </Link>

              <Link
                to="/about"
                onMouseEnter={() => setActiveMenu(null)}
                className={navLinkClass(isActive("/about"))}
                data-active={isActive("/about")}
              >
                About
              </Link>
            </nav>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-4 lg:gap-6">

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

            <button
              className="lg:hidden -mr-2 p-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {activeMenu && (
        <div className="mega-menu-panel hidden lg:block absolute inset-x-0 top-full bg-white border-b border-border shadow-[0_28px_70px_rgb(17_17_17_/_0.10)]">
          <div className="mx-auto max-w-[1600px] px-10 py-14">
            <div className="grid max-w-5xl grid-cols-3 gap-20">
              {megaMenus[activeMenu].columns.map((column) => (
                <div key={column.heading} className="space-y-5">
                  <p className="eyebrow text-muted-foreground">{column.heading}</p>

                  <div className="flex flex-col items-start gap-3">
                    {column.links.map((link) => (
                      <Link
                        key={`${column.heading}-${link.label}`}
                        to="/shop"
                        search={link.search as never}
                        onClick={() => setActiveMenu(null)}
                        className="font-display text-2xl leading-tight text-ink transition duration-500 ease-out hover:translate-x-1 hover:text-muted-foreground focus-visible:translate-x-1 focus-visible:text-muted-foreground"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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

          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <div className="space-y-1">
              {megaMenuKeys.map((key) => {
                const menu = megaMenus[key];
                const expanded = mobileMenu === key;

                return (
                  <div key={key} className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => setMobileMenu(expanded ? null : key)}
                      aria-expanded={expanded}
                      className="flex w-full items-center justify-between py-5 text-left font-display text-3xl"
                    >
                      {menu.label}
                      <ChevronDown
                        className={cn(
                          "size-5 transition-transform duration-500",
                          expanded && "rotate-180",
                        )}
                      />
                    </button>

                    {expanded && (
                      <div className="grid gap-8 pb-8 pt-1 fade-in-up">
                        {menu.columns.map((column) => (
                          <div key={column.heading} className="space-y-3">
                            <p className="eyebrow text-muted-foreground">{column.heading}</p>

                            <div className="grid gap-3">
                              {column.links.map((link) => (
                                <Link
                                  key={`${column.heading}-${link.label}`}
                                  to="/shop"
                                  search={link.search as never}
                                  onClick={() => {
                                    setOpen(false);
                                    closeMenus();
                                  }}
                                  className="font-display text-2xl leading-tight text-ink"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="h-px bg-border my-2" />

            <Link
              to="/journal"
              onClick={() => {
                setOpen(false);
                closeMenus();
              }}
              className={navLinkClass(isActive("/journal"), "text-base eyebrow")}
              data-active={isActive("/journal")}
            >
              Journal
            </Link>

            <Link
              to="/about"
              onClick={() => {
                setOpen(false);
                closeMenus();
              }}
              className={navLinkClass(isActive("/about"), "text-base eyebrow")}
              data-active={isActive("/about")}
            >
              About
            </Link>

            <Link
              to="/account"
              onClick={() => {
                setOpen(false);
                closeMenus();
              }}
              className={navLinkClass(isActive("/account"), "text-base eyebrow")}
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
