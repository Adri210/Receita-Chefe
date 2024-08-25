import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Receitas from './pages/Receitas';
import Erro from './pages/Erro';
import AdicionarReceita  from './pages/Adicionar/newReceita';


function RoutesApp(){
  return(
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/receitas/:id" element={ <Receitas/> } />
        <Route path="/AdicionarReceita" element={ <AdicionarReceita/> } />

        <Route path="*" element={ <Erro/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;