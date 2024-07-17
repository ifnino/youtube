import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mailit } from './components/Mailit';

function App() {


  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Mailit />
      {/* Wrap components with sections */}
      <section><Banner /></section>
      <section><Skills /></section>
      <section><Projects /></section>
      <section><Mailit /></section>
    </div>
  );
}

export default App;
