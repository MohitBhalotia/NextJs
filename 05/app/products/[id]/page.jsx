import Product from "@/app/components/Product";

async function generateStaticParams() {
    const res = await fetch(
      "https://dummyjson.com/products?limit=10&select=title,price"
    );
    const data = await res.json();
    return data.products.map((product=>({
        id:product.id.toString()
    })));
  }

  async function getProduct(id){
    const res = await fetch(
        `https://dummyjson.com/products/${id}`
      );
      const data = await res.json();
      return data;
  }
export default async function ProductPage({ params }) {
  const { id } = await params;
  const product=await getProduct(id)
//   console.log(product);
  
  return (
    <div>
        <Product title={product.title} price={product.price} />
    </div>
  );
}
