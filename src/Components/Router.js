import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuComponent from './MenuComponent';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuComponent />
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/empleados" element={<h1>Empleados</h1>} />
        </Routes>
      </BrowserRouter>
    );
  }
}