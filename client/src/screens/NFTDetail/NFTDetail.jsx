import { useState, useEffect } from 'react'
import './ProductDetail.css'
import { Layout, ReviewForm, Reviews } from '../../components'
import { getProduct, deleteProduct, updateProduct } from '../../services/products'
import { useParams, Link } from 'react-router-dom'
import StarRating from 'star-rating-react'

const ProductDetail = (props) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    imgURL: '',
    price: '',
    reviews: [],
  })
  const [review, setReview] = useState({
    author: '',
    rating: '',
    description: '',
  })
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
      setLoaded(true)
    }
    fetchProduct()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setReview({
      ...review,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    product.reviews.push(review)
    setProduct(product)
    await updateProduct(id, product)
  }

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user}>
      <div className='product-detail'>
        <img
          className='product-detail-image'
          src={product.imgURL}
          alt={product.name}
        />
        <div className='detail'>
          <div className='name'>{product.name}</div>
          <div className='seller'>by {product.userId.username}</div>
          <div className='rating'>
            <StarRating
              size={product.rating}
              value={product.rating}
              onChange={function (val) {
                console.log(val)
              }}
            />
          </div>
          <div className='price'>{`$${product.price}`}</div>
          <div className='description'>{product.description}</div>
          <div className='button-container'>
            <Link className='edit-button' to={`/products/${product._id}/edit`}>
              Edit
            </Link>
            <button
              className='delete-button'
              onClick={() => deleteProduct(product._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className='reviews-wrapper'>
        <ReviewForm
          author={review.author}
          rating={review.rating}
          description={review.description}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
        <Reviews reviews={product.reviews} />
      </div>
    </Layout>
  )
}

export default ProductDetail
