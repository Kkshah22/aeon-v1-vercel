import type { Product } from "./types";
import coatA from "@/assets/prod-coat.jpg";
import coatB from "@/assets/hero-coat.jpg";
import dress from "@/assets/prod-dress.jpg";
import bagA from "@/assets/prod-bag.jpg";
import bagB from "@/assets/cat-bags.jpg";
import knitA from "@/assets/prod-knit.jpg";
import knitB from "@/assets/cat-knitwear.jpg";
import trousers from "@/assets/prod-trousers.jpg";
import loaferA from "@/assets/prod-loafer.jpg";
import loaferB from "@/assets/cat-shoes.jpg";
import earrings from "@/assets/prod-earrings.jpg";

export const products: Product[] = [
  {
    slug: "wool-overcoat-noir",
    name: "Wool Overcoat — Noir",
    description:
      "A double-breasted overcoat cut from heavyweight Italian virgin wool. Tailored with a relaxed shoulder and column silhouette. Made in Portugal.",
    priceCents: 1890000,
    category: "ready-to-wear",
    categoryName: "Ready to Wear",
    images: [coatA, coatB],
    sizes: ["XS", "S", "M", "L", "XL"],
    isFeatured: true,
    isNew: true,
    isBestseller: true,
    materials: ["100% Italian virgin wool", "Cupro lining"],
    care: ["Dry clean only", "Cool iron if needed"],
  },
  {
    slug: "silk-slip-dress-ivory",
    name: "Silk Slip Dress — Ivory",
    description:
      "A bias-cut slip in heavyweight silk satin. Cool to the touch, gathered at the bust, falling to mid-calf.",
    priceCents: 840000,
    category: "ready-to-wear",
    categoryName: "Ready to Wear",
    images: [dress],
    sizes: ["XS", "S", "M", "L"],
    isFeatured: true,
    isNew: true,
    isBestseller: false,
    materials: ["100% mulberry silk satin"],
    care: ["Dry clean only"],
  },
  {
    slug: "structured-tote-noir",
    name: "Structured Tote — Noir",
    description:
      "A weighted leather tote, vegetable tanned in Tuscany, with brass hardware and an unlined interior.",
    priceCents: 2460000,
    category: "bags",
    categoryName: "Bags",
    images: [bagA, bagB],
    sizes: ["One Size"],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    materials: ["Vegetable-tanned Italian calf leather", "Brass hardware"],
    care: ["Protect from water", "Treat with leather conditioner"],
  },
  {
    slug: "cashmere-rib-knit-ivory",
    name: "Cashmere Rib Knit — Ivory",
    description:
      "A boxy, oversized pullover knitted from 6-ply Mongolian cashmere with a ribbed finish.",
    priceCents: 960000,
    category: "knitwear",
    categoryName: "Knitwear",
    images: [knitA, knitB],
    sizes: ["XS", "S", "M", "L", "XL"],
    isFeatured: true,
    isNew: true,
    isBestseller: true,
    materials: ["100% Mongolian cashmere"],
    care: ["Hand wash cold", "Lay flat to dry"],
  },
  {
    slug: "wide-leg-trouser-noir",
    name: "Wide-Leg Trouser — Noir",
    description:
      "High-waisted wide-leg trousers in fluid wool crepe with a sharp pressed crease.",
    priceCents: 640000,
    category: "ready-to-wear",
    categoryName: "Ready to Wear",
    images: [trousers],
    sizes: ["XS", "S", "M", "L", "XL"],
    isFeatured: false,
    isNew: true,
    isBestseller: true,
    materials: ["Italian wool crepe", "Viscose lining"],
    care: ["Dry clean only"],
  },
  {
    slug: "leather-loafer-noir",
    name: "Leather Loafer — Noir",
    description:
      "A handsewn penny loafer with a leather sole. Polished black calfskin, unlined.",
    priceCents: 780000,
    category: "shoes",
    categoryName: "Shoes",
    images: [loaferA, loaferB],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    materials: ["Polished calfskin", "Leather sole"],
    care: ["Polish regularly", "Use cedar shoe trees"],
  },
  {
    slug: "sculpted-hoop-earrings-gold",
    name: "Sculpted Hoop Earrings — Gold",
    description:
      "Hand-finished 18k gold-plated hoops with a weighted, tubular form.",
    priceCents: 320000,
    category: "accessories",
    categoryName: "Accessories",
    images: [earrings],
    sizes: ["One Size"],
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    materials: ["18k gold-plated brass"],
    care: ["Keep dry", "Polish with soft cloth"],
  },
];

export const categories = [
  { slug: "ready-to-wear", name: "Ready to Wear" },
  { slug: "bags", name: "Bags" },
  { slug: "shoes", name: "Shoes" },
  { slug: "knitwear", name: "Knitwear" },
  { slug: "accessories", name: "Accessories" },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const formatPrice = (pricePaise: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(pricePaise / 100);
