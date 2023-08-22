import { Route, Routes } from "react-router-dom";
import Gallery from "../Components/Gallery/Gallery";
import Carddetail from "../Components/Card-Detail/Carddetail";

function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Gallery/>}/>
            <Route path="/card-detail/:id" element={<Carddetail/>}/>
        </Routes>
    )
}

export default CustomRoutes;