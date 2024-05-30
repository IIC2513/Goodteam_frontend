import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About_us from './componentes/paginas/About_us'
import App from './App'
import Board from './componentes/tableros/Board'
import Layout from './componentes/header/Layout'
import Instrucciones from './componentes/paginas/Instrucciones'

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={'/about_us'} element={<About_us/>}/>
                    <Route index element={<App/>}/>
                    <Route path={'board'} element={<Board/>}/>
                    <Route path={'/instrucciones'} element={<Instrucciones/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing