import Product from "../components/Product";
import ProductButton from "../components/ProductButton";
async function getProducts() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=10&select=title,price"
  );
  const data = await res.json();
  return data.products;
}

export default async function Products() {
  const products = await getProducts();
  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 &&
        products.map(({ id, title, price }) => {
          {
            /* return <h1 key={id}>Title : {title}</h1>; */
          }
          return (
            <div key={id}>
              <Product  id={id} title={title} price={price} />
              <ProductButton id={id} />
            </div>
          );
        })}
    </div>
  );
}
