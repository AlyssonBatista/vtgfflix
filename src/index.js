import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Home from './pages/Home';

const Pagina404 = () => (<div>erro 404!</div>);

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
