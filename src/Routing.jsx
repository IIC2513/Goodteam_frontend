import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing_page from './pages/LandingPage/Landing_page'
import App from './App'

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/landing_page'} element={<Landing_page/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing