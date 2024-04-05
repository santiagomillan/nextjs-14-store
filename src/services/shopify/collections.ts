import { env } from "app/config/env";
import { shopifyUrl } from "./urls";

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrl.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_API_KEY,
      }),
    });
    const { smart_collections } = await response.json();
    const transformedColections = smart_collections.map(
      (collection: SmartCollection) => {
        return {
          id: collection.id,
          title: collection.title,
          handle: collection.handle,
        };
      }
    );
    return transformedColections;
  } catch (error) {
    console.log(error);
  }
};

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyUrl.collections.products(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_API_KEY,
      }),
    });
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
