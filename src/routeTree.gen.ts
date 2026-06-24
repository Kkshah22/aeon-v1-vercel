/* eslint-disable */

// @ts-nocheck

// This file was simplified for the launch build.

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AboutRouteImport } from './routes/about'
import { Route as AccountRouteImport } from './routes/account'
import { Route as CreateAccountRouteImport } from './routes/create-account'
import { Route as CartRouteImport } from './routes/cart'
import { Route as CheckoutRouteImport } from './routes/checkout'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as EssentialsRouteImport } from './routes/essentials'
import { Route as ForgotPasswordRouteImport } from './routes/forgot-password'
import { Route as JournalRouteImport } from './routes/journal'
import { Route as MenRouteImport } from './routes/men'
import { Route as WomenRouteImport } from './routes/women'
import { Route as ProductSlugRouteImport } from './routes/product.$slug'
import { Route as ShopRouteImport } from './routes/shop'
import { Route as SitemapDotxmlRouteImport } from './routes/sitemap[.]xml'
import { Route as WishlistRouteImport } from './routes/wishlist'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)

const AccountRoute = AccountRouteImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => rootRouteImport,
} as any)

const CreateAccountRoute = CreateAccountRouteImport.update({
  id: '/create-account',
  path: '/create-account',
  getParentRoute: () => rootRouteImport,
} as any)

const CartRoute = CartRouteImport.update({
  id: '/cart',
  path: '/cart',
  getParentRoute: () => rootRouteImport,
} as any)

const CheckoutRoute = CheckoutRouteImport.update({
  id: '/checkout',
  path: '/checkout',
  getParentRoute: () => rootRouteImport,
} as any)

const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)

const EssentialsRoute = EssentialsRouteImport.update({
  id: '/essentials',
  path: '/essentials',
  getParentRoute: () => rootRouteImport,
} as any)

const ForgotPasswordRoute = ForgotPasswordRouteImport.update({
  id: '/forgot-password',
  path: '/forgot-password',
  getParentRoute: () => rootRouteImport,
} as any)

const JournalRoute = JournalRouteImport.update({
  id: '/journal',
  path: '/journal',
  getParentRoute: () => rootRouteImport,
} as any)

const MenRoute = MenRouteImport.update({
  id: '/men',
  path: '/men',
  getParentRoute: () => rootRouteImport,
} as any)

const WomenRoute = WomenRouteImport.update({
  id: '/women',
  path: '/women',
  getParentRoute: () => rootRouteImport,
} as any)

const ProductSlugRoute = ProductSlugRouteImport.update({
  id: '/product/$slug',
  path: '/product/$slug',
  getParentRoute: () => rootRouteImport,
} as any)

const ShopRoute = ShopRouteImport.update({
  id: '/shop',
  path: '/shop',
  getParentRoute: () => rootRouteImport,
} as any)

const SitemapDotxmlRoute = SitemapDotxmlRouteImport.update({
  id: '/sitemap.xml',
  path: '/sitemap.xml',
  getParentRoute: () => rootRouteImport,
} as any)

const WishlistRoute = WishlistRouteImport.update({
  id: '/wishlist',
  path: '/wishlist',
  getParentRoute: () => rootRouteImport,
} as any)

const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AccountRoute,
  CreateAccountRoute,
  CartRoute,
  CheckoutRoute,
  ContactRoute,
  EssentialsRoute,
  ForgotPasswordRoute,
  JournalRoute,
  MenRoute,
  WomenRoute,
  ProductSlugRoute,
  ShopRoute,
  SitemapDotxmlRoute,
  WishlistRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<any>()
