import { useState, useEffect } from 'react'
import './ProductCards.css'
import ProductCard from '../ProductCard/ProductCard'
import { getProducts } from '../../services/products'

const ProductCards = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
    }
    fetchProducts()
  }, [])

  const CARDS = products
    .reverse()
    .map((product, index) =>
      index < 8 ? (
        <ProductCard
          _id={product._id}
          name={product.name}
          imgURL={product.imgURL}
          key={index}
        />
      ) : null
    )

  return (
    <div className='product-cards'>
      <div className='latest'>LATEST</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default ProductCards
