import SEO from '@/components/Seo/seo';
import { useRouter } from 'next/router';
import React from 'react'
import SingleProduct from "../../components/Pages/Products/Product"

export default function Product({data}) {
    // const router = useRouter()

    // console.log(router.query.id)
    
console.log(data)
  return (
    <div>
        <SEO 
        title={data.title}
        description={data.description}
        />
        <SingleProduct productData = {data}/>
    </div>
  )
}


export async function getServerSideProps(ctx) {
    console.log("CONTEXT PARAMS --->", ctx.params);
    const res = await fetch(`https://dummyjson.com/products/${ctx.params.id}`);
    const data = await res.json();
    
    return {
        props: {
            data: data
        }
    }
}