import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage/MainPage";

function Routing(productItems){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/mainpage" element={<MainPage productItems={productItems} />}/>
                <Route path="/" element={<App />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing;