import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Image-Card/Card";
import './Gallery.css'
function Gallery() {

    const [photosData, setPhotosData] = useState([]);

    async function galleryData() {
        try {
            const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
            const result = response.data.photos;
            setPhotosData(result);
        } catch (error) {
            console.error("Error fetching gallery data:", error);
        }
    }

    useEffect(() => {
        galleryData()
    }, [])

    return (
        <div className="card-wrapper">
            {
                photosData.map((photo) =>
                (
                    <Card image={photo.url} key={photo.id} id={photo.id} />
                )
                )
            }
        </div>
    )
}

export default Gallery;