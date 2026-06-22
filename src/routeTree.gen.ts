/* eslint-disable */

// @ts-nocheck

// This file was simplified for the launch build.

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AboutRouteImport } from './routes/about'
import { Route as CartRouteImport } from './routes/cart'
import { Route as CheckoutRouteImport } from './routes/checkout'
import { Route as ContactRouteImport } from './routes/contact'
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

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cart': typeof CartRoute
  '/checkout': typeof CheckoutRoute
  '/contact': typeof ContactRoute
  '/product/$slug': typeof ProductSlugRoute
  '/shop': typeof ShopRoute
  '/sitemap.xml': typeof SitemapDotxmlRoute
  '/wishlist': typeof WishlistRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cart': typeof CartRoute
  '/checkout': typeof CheckoutRoute
  '/contact': typeof ContactRoute
  '/product/$slug': typeof ProductSlugRoute
  '/shop': typeof ShopRoute
  '/sitemap.xml': typeof SitemapDotxmlRoute
  '/wishlist': typeof WishlistRoute
}

export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cart': typeof CartRoute
  '/checkout': typeof CheckoutRoute
  '/contact': typeof ContactRoute
  '/product/$slug': typeof ProductSlugRoute
  '/shop': typeof ShopRoute
  '/sitemap.xml': typeof SitemapDotxmlRoute
  '/wishlist': typeof WishlistRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/cart'
    | '/checkout'
    | '/contact'
    | '/product/$slug'
    | '/shop'
    | '/sitemap.xml'
    | '/wishlist'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/cart'
    | '/checkout'
    | '/contact'
    | '/product/$slug'
    | '/shop'
    | '/sitemap.xml'
    | '/wishlist'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/cart'
    | '/checkout'
    | '/contact'
    | '/product/$slug'
    | '/shop'
    | '/sitemap.xml'
    | '/wishlist'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CartRoute: typeof CartRoute
  CheckoutRoute: typeof CheckoutRoute
  ContactRoute: typeof ContactRoute
  ProductSlugRoute: typeof ProductSlugRoute
  ShopRoute: typeof ShopRoute
  SitemapDotxmlRoute: typeof SitemapDotxmlRoute
  WishlistRoute: typeof WishlistRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/cart': {
      id: '/cart'
      path: '/cart'
      fullPath: '/cart'
      preLoaderRoute: typeof CartRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/checkout': {
      id: '/checkout'
      path: '/checkout'
      fullPath: '/checkout'
      preLoaderRoute: typeof CheckoutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/product/$slug': {
      id: '/product/$slug'
      path: '/product/$slug'
      fullPath: '/product/$slug'
      preLoaderRoute: typeof ProductSlugRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/shop': {
      id: '/shop'
      path: '/shop'
      fullPath: '/shop'
      preLoaderRoute: typeof ShopRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/sitemap.xml': {
      id: '/sitemap.xml'
      path: '/sitemap.xml'
      fullPath: '/sitemap.xml'
      preLoaderRoute: typeof SitemapDotxmlRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/wishlist': {
      id: '/wishlist'
      path: '/wishlist'
      fullPath: '/wishlist'
      preLoaderRoute: typeof WishlistRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CartRoute,
  CheckoutRoute,
  ContactRoute,
  ProductSlugRoute,
  ShopRoute,
  SitemapDotxmlRoute,
  WishlistRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
