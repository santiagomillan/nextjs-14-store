import { env } from "app/config/env";
import { shopifyUrl } from "./urls";
import { url } from "inspector";

export const getProducts = async (id?: string): Promise<ProductType[]> => {
  try {
    const apiUrl = id
      ? `${shopifyUrl.products.all}?ids=${id}`
      : shopifyUrl.products.all;
    const response = await fetch(apiUrl, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_API_KEY,
      }),
    });
    const { products } = await response.json();
    const trasnsformedProducts = products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      };
    });
    return trasnsformedProducts;
  } catch (error) {
    console.log(error);
  }
};
