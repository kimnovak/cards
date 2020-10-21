import React, { Suspense } from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, Button } from '@material-ui/core';
import Layout from '@components/Layout';
import SuspenseFallback from '@components/SuspenseFallback';
import theme from '@styles/theme'

import './App.css';

const Cards = React.lazy(() => import('@pages/Cards'));
const AddCard = React.lazy(() => import('@pages/AddCard'));
const NotFound = React.lazy(() => import("@pages/NotFound"));


function App() {

  const cards = useSelector(state => state.cards.cards);
  console.log({cards})
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<SuspenseFallback />}>
          <Layout>
            <Switch>
              <Route exact path="/cards" component={Cards} />
              <Route exact path="/cards/add" component={AddCard} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
