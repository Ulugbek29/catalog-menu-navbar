import ProductsListsPage from "../../components/Pages/Products/ProductsListsPage"
import SEO from "@/components/Seo/seo";

const Products = (props) => {

    const keywords =
    props.data && props.data?.products.map((el) => el.title).join(",");

  console.log("Data2", props?.data?.products)
    return (
        <>
        <SEO keywords={keywords} />
        <ProductsListsPage products={props?.data?.products}/>
        </>
      );
}


export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  console.log("DATA ===>", data);
  return {
    props: {
      // something: "something",
      data: data,
    },
  };
}

export default Products