import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

const Cards = React.lazy(() => import('@pages/Cards'));
const NotFound = React.lazy(() => import("@pages/NotFound"))


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/cards" component={Cards} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
