import Link from 'next/link'
import React from 'react'
import SingleProductDetails from './SingleProductDetails'

export default function ProductsListsPage({products}) {

  console.log(products)
  return (
    <div className='grid grid-cols-5 gap-4'>
        {products.map((product,index)=> (
          <Link href={`/products/${product.id}`}>
          <SingleProductDetails productData={product} />
          </Link>
        ))}
    </div>
  )
}
