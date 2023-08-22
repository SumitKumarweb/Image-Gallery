import axios from "axios";
import { useEffect, useState } from "react";

function Gallery(){

    const [photosData , setPhotosData] = useState([]);

    async function galleryData(){
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos')
        const result = response.data.photos;
        setPhotosData(result);
    }

    useEffect(()=>{
        galleryData()
        console.log("hello");
    },[])

    return (
        <>
            {
                photosData.map((photo)=>
                    (
                        <img src={photo.url} alt="" />
                    )
                )
            }
        </>
    )
}

export default Gallery;