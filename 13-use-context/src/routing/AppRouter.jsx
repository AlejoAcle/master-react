import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Acerca } from "../components/Acerca";
import { Articulos } from "../components/Articulos";
import { Contacto } from "../components/Contacto";
import { Inicio } from "../components/Inicio";
import { Login } from "../components/Login";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <nav>
            <div className="logo" id="logo">
              <h2>Aprendiendo React Context</h2>
            </div>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>

            <li>
              <NavLink to="/articulos">Articulos</NavLink>
            </li>

            <li>
              <NavLink to="/acerca">Acerca de</NavLink>
            </li>

            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>

            <li>
              <NavLink to="/login">Iniciar Sesión</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <section className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Error, esta página no existe</h1>
              </div>
            }
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
