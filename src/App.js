import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Layout from '@components/Layout';
import SuspenseFallback from '@components/SuspenseFallback';
import ErrorBoundary from '@components/ErrorBoundary';
import theme from '@styles/theme'

import './App.css';

const Cards = React.lazy(() => import('@pages/Cards'));
const AddCard = React.lazy(() => import('@pages/AddCard'));
const EditCard = React.lazy(() => import('@pages/EditCard'));
const NotFound = React.lazy(() => import("@pages/NotFound"));


function App() {
  return (
    <ErrorBoundary>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Suspense fallback={<SuspenseFallback />}>
              <Layout>
                <Switch>
                  <Route exact path="/" component={Cards} />
                  <Route exact path="/cards" component={Cards} />
                  <Route exact path="/cards/add" component={AddCard} />
                  <Route exact path="/cards/:id/edit" component={EditCard} />
                  <Route component={NotFound} />
                </Switch>
              </Layout>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </ErrorBoundary>
  );
}

export default App;
