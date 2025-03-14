async function getProducts() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return data.products;
}
import ProductButton from "./ProductButton";

export default async function Product() {
  let products = await getProducts();
  console.log(products);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h2 >Name: {item.title}</h2>
          <ProductButton price={item.price}/>
        </div>
      ))}
    </div>
  );
}
