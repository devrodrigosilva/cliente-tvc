import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Cadastrar from '../pages/Cadastrar/Cadastrar';
import RecuperarSenha from '../pages/RecuperarSenha/RecuperarSenha';
import Podcasts from '../pages/Podcasts/Podcasts';
import Podcast from '../pages/Podcast/Podcast';
import Episodio from '../pages/Episodio/Episodio';
import ScrollToTop from '../pages/ScrollToTop/ScrollToTop';
import Planos from '../pages/Planos/Planos';
import Perfil from '../pages/Perfil/Perfil';
import Rss from '../pages/Rss/Rss';
import Episodios from '../pages/Episodios/Episodios';

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperarSenha" element={<RecuperarSenha />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="podcast">
          <Route path=":podcastName" element={<Podcast />} />
          <Route path=":podcastName/:episodio" element={<Episodio />} />
        </Route>
        <Route path="/episodios" element={<Episodios />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/rss" element={<Rss />} />
      </Routes>
    </BrowserRouter>
  );
}
