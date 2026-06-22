import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { CartItem } from "./types";

interface CartContextType {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (slug: string, size: string) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotalCents: number;
}

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "aeon-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  const add: CartContextType["add"] = (item) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.slug === item.slug && p.size === item.size);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + item.quantity };
        return next;
      }
      return [...prev, item];
    });
  };

  const remove: CartContextType["remove"] = (slug, size) => {
    setItems((prev) => prev.filter((p) => !(p.slug === slug && p.size === size)));
  };

  const setQty: CartContextType["setQty"] = (slug, size, qty) => {
    setItems((prev) =>
      prev
        .map((p) => (p.slug === slug && p.size === size ? { ...p, quantity: qty } : p))
        .filter((p) => p.quantity > 0),
    );
  };

  const clear = () => setItems([]);

  const count = items.reduce((n, i) => n + i.quantity, 0);
  const subtotalCents = items.reduce((s, i) => s + i.priceCents * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, setQty, clear, count, subtotalCents }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
