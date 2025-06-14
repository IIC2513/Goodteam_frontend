import React, {useState} from 'react';
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
import AdminProductsPage from './pages/Protected/AdminProductsPage/AdminProductsPage'
import AdminUsersPage from './pages/Protected/AdminUsersPage/AdminUsersPage'
import AdminCategoriesPage from './pages/Protected/AdminCategoriesPage/AdminCategoriesPage'
import AdminOrdersPage from './pages/Protected/AdminOrdersPage/AdminOrdersPage'
import FormPage from './pages/ProductFormPage/ProductFormPage'
import UserFormPage from './pages/UserFormPage/UserFormPage'
import OrderFormPage from './pages/OrderFormPage/OrderFormPage'
import CategoryFormPage from './pages/CategoryFormPage/CategoryFormPage'
import PaymentPage from './pages/PaymentPage/PaymentPage'
import MainPageCat from './pages/MainPage/MainPageCat';

function Routing(){
    const [refresh, setRefresh] = useState(false);

    const refreshCarrito = () => {
        setRefresh(!refresh);
    };
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout refresh={refresh} refreshCarrito={refreshCarrito}/>}>
                    <Route path={'/landing_page'} element={<Landing_page/>}/>
                    <Route index element={<Landing_page />}/>
                    <Route path={'/about_us'} element={<About_us/>}/>
                    <Route path={'board'} element={<Board/>}/>
                    <Route path={'/DocsPage'} element={<DocsPage/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path="/mainpage" element={<MainPage refreshCarrito={refreshCarrito}/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/protected'} element={<UserCheck/>}/>
                    <Route path={'/admin'} element={<AdminCheck/>}/>
                    <Route path={'/admin-products'} element={<AdminProductsPage/>}/>
                    <Route path={'/admin-users'} element={<AdminUsersPage/>}/>
                    <Route path={'/admin-categories'} element={<AdminCategoriesPage/>}/>
                    <Route path={'/admin-orders'} element={<AdminOrdersPage/>}/>
                    <Route path={"/product-form"} element={<FormPage/>}/>
                    <Route path={'/product-form/:id'} element={<FormPage/>}/>
                    <Route path={'/user-form'} element={<UserFormPage/>}/>
                    <Route path={'/user-form/:id'} element={<UserFormPage/>}/>
                    <Route path={'/orders-form'} element={<OrderFormPage/>}/>
                    <Route path={'/orders-form/:id'} element={<OrderFormPage/>}/>
                    <Route path={'/category-form'} element={<CategoryFormPage/>}/>
                    <Route path={'/category-form/:id'} element={<CategoryFormPage/>}/>
                    <Route path={'/pay'} element={<PaymentPage/>}/>
                    <Route path={'/mainpage/:id'} element={<MainPageCat refreshCarrito={refreshCarrito}/>}/>
                </Route>
                <Route index element={<Landing_page />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing