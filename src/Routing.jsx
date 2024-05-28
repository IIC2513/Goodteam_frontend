import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage/MainPage";

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/mainpage" element={<MainPage />}/>
                <Route path="/" element={<App />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing;