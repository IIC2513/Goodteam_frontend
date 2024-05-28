import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About_us from './About_us'
import App from './App'
import Board from './Board'

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/about_us'} element={<About_us/>}/>
                <Route path={'/'} element={<App/>}/>
                <Route path={'board'} element={<Board/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing