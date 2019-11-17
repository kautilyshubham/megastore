import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './pages/home';
import Shop from './pages/shop';
import About from './pages/about';
import Contact from './pages/contact';
import Detail from './pages/detail';

const routing =()=> (
    <Router>
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact}exact  />
        <Route path="/detail/:id" component={Detail} exact />
      </div>
    </Router>
  )

export default routing;