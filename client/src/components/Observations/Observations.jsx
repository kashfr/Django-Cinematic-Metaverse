import React from 'react'
import StarRating from 'star-rating-react'
import './Reviews.css'

const Reviews = (props) => {

    const reviewsJSX = props.reviews.map((review, index) =>
        <div className="product-review" key={index}>
            <h1>{review.author}</h1>
            <StarRating size={review.rating} value={review.rating} onChange={ function(val) { console.log(val) }} />
            <p>{review.description}</p>
        </div>
    )

    return (
        <div className="product-reviews">
            { reviewsJSX}
        </div>
    )
}

export default Reviews