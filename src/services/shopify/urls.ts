import { env } from "app/config/env";

export const shopifyUrl = {
  products: {
    all: `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    mainProducts: `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/275116654691/products.json`,
  },
  collections: {
    all: `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
    products: (id: string) =>
      `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`,
  },
};
