import './ProductCard.css';
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <Link className="card" to={`/products/${props._id}`}>
                <img className="product-card-image" src={props.imgURL} alt={props.name} />
                <div>View</div>
            </Link>
        </div>
    )
}

export default ProductCard