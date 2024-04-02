import { ProductsWrapper } from "app/components/shared/Store/ProductWrapper";
import {
  getCollectionProducts,
  getCollections,
} from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;
  let products = [];
  // let products = await getProducts();
  const collections = await getCollections();

  // if (categories?.length > 0) {
  //   const selectedCollectionId = collections.find(
  //     (collection: any) => collections.handle === categories[0]
  //   ).id;
  //   products = await getCollectionProducts(selectedCollectionId);
  // } else {
  //   products = await getProducts();
  // }
  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection: any) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }
  // throw new Error("Error: boom!");
  return <ProductsWrapper products={products} />;
}
