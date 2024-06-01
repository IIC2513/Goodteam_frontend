import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About_us from './pages/AboutUs/About_us'
import Board from './components/tableros/Board'
import Layout from './components/header/Layout'
import Instrucciones from './pages/Instructions/Instrucciones'
import Cart from './components/header/Cart'
import MainPage from "./pages/MainPage/MainPage";
import Landing_page from './pages/LandingPage/Landing_page'

function Routing(productItems){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={'/about_us'} element={<About_us/>}/>
                    <Route index element={<MainPage productItems={productItems} />}/>
                    <Route path={'board'} element={<Board/>}/>
                    <Route path={'/instrucciones'} element={<Instrucciones/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path="/mainpage" element={<MainPage productItems={productItems} />}/>
                </Route>
                <Route path={'/landing_page'} element={<Landing_page/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing