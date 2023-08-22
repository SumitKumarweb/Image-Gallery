import { Link } from 'react-router-dom';
import './Card.css'
function Card({image , key , id}){
    return (
        <>
        <Link to={`/card-detail/${id}`}>
        <div className="image-card" key={key}>
            <img src={image} alt="" />
        </div>
        </Link>
        </>
    )
}
export default Card;