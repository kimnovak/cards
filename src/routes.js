import React from 'react';
import NotFound from '@pages/NotFound';
import Home from '@pages/Home';
import Cards from '@pages/Cards';

const routes = [
    {
        path: '/',
        content: <Home />
    },
    {
        path: '/cards',
        content: <Cards />
    },
    {
        path: '*',
        content: <NotFound />
    }
];

export default routes;