import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Carddetail.css'
function Carddetail() {

    const [cardData, setCardData] = useState([]);

    const { id } = useParams();

    async function cardDownload() {
        try {
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
            const result = response.data.photo;
            console.log(result);
            setCardData(result)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        cardDownload();
    })
    return (
        <div className="center-cardDetail">
            <div className="cardDetail-wrapper">
                <img src={cardData.url} alt="" />
                <div className="cardDetail-info">
                    <h1>{cardData.title}</h1>
                    <p>{cardData.description}</p>
                </div>
            </div>
        </div>
    )
}
export default Carddetail;