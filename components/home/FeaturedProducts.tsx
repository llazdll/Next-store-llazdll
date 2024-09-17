import { fetchFeaturedProducts } from '@/utils/actions'
import React from 'react'
import EmptyList from '../global/EmptyList'
import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../product/ProductsGrid'

async function FeaturedProducts() {
  const products=await fetchFeaturedProducts()
  if (products.length===0) {
    return <EmptyList/>
  }
  return (
    <section className="pt-24">
      <SectionTitle text='featured products'/>
      <ProductsGrid products={products}/>
    </section>
  )
}

export default FeaturedProducts