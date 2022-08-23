import React from 'react';

import { About, Footer,Work, Header, Skills, Testimonial } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () =>{
  //return(<h1>App</h1>);

 return(
  <div className ="app">
    <Navbar />
    <Header />
    <About />
    <Work/>
    <Skills />
    <Testimonial />
    <Footer />
    
  </div>
  
);}

export default App;