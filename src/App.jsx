import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaLogin from './Pages/PaginaLogin'
import './Reset.css';
import Erro404 from './Pages/PaginaErro404';
function Roteador() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PaginaLogin/>
        }>
        </Route>
        <Route path='*' element={
          <Erro404/>
        } />
      </Routes>
    </BrowserRouter>


  )
}

export default Roteador
