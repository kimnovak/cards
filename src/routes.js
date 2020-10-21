import React from 'react';
import NotFound from '@pages/NotFound';
import Cards from '@pages/Cards';

const routes = [
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