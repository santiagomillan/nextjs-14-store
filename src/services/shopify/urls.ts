import { env } from "app/config/env";

export const shopifyUrl = {
  products: {
    all: `https://${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
  },
};
