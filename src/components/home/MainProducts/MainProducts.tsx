const getProducts = async () => {
  const response = await fetch(
    `https://${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    {
      headers: new Headers({
        "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const MainProducts = () => {
  const products = getProducts();
  console.log("products", products);
  return (
    <section>
      <h1>Main Products</h1>
    </section>
  );
};
