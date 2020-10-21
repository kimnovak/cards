import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, Button } from '@material-ui/core';
import Layout from '@components/Layout';
import SuspenseFallback from '@components/SuspenseFallback';
import theme from '@styles/theme'

import './App.css';

const Cards = React.lazy(() => import('@pages/Cards'));
const NotFound = React.lazy(() => import("@pages/NotFound"));


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<SuspenseFallback />}>
          <Switch>
            <Layout>
              <Button variant="contained" color="primary">
                Test
              </Button>
              <Route exact path="/cards" component={Cards} />
              <Route path="*" component={NotFound} />
            </Layout>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
