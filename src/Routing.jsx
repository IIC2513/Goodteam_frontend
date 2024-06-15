import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About_us from './pages/AboutUs/About_us'
import Board from './components/tableros/Board'
import Layout from './components/header/Layout'
import DocsPage from './pages/Instructions/DocsPage'
import Cart from './components/header/Cart'
import MainPage from "./pages/MainPage/MainPage";
import Landing_page from './pages/LandingPage/Landing_page'
import Profile from './pages/UserProfile/User_profile'
import Login from './pages/SessionPages/LoginPage'
import UserCheck from './pages/Protected/UserCheck'
import AdminCheck from './pages/Protected/AdminCheck'
import FormPage from './pages/ProductFormPage/ProductFormPage'

function Routing(productItems){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={'/landing_page'} element={<Landing_page/>}/>
                    <Route index element={<Landing_page />}/>
                    <Route path={'/about_us'} element={<About_us/>}/>
                    <Route path={'board'} element={<Board/>}/>
                    <Route path={'/DocsPage'} element={<DocsPage/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path="/mainpage" element={<MainPage productItems={productItems} />}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/protected'} element={<UserCheck/>}/>
                    <Route path={'/admin'} element={<AdminCheck/>}/>
                    <Route path={"/product-form"} element={<FormPage/>}/>
                    <Route path={'/product-form/:id'} element={<FormPage/>}/>
                </Route>
                <Route index element={<Landing_page />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing