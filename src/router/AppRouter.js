import React from 'react'
import { useRoutes } from 'react-router'

import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { FormularioContainer } from '../components/FormularioContainer/FormularioContainer';
import { CartView } from '../components/CartView/CartView';
import { Checkout } from '../components/Checkout/Checkout';
import { Book } from '../components/Book/Book';


export const AppRouter = () => {

    const routes = useRoutes([
        {path: "/", element:<ItemListContainer/>},
        {path: "/categories/:catId", element:<ItemListContainer/>},
        {path: "/detail/:itemId", element:<ItemDetailContainer/>},
        {path: "/contact", element:<FormularioContainer/>},
        {path: "/enciclopedia", element:<Book/>},
        {path: "/cart", element:<CartView/>},
        {path: "/checkout", element:<Checkout/>},
        {path: "*", element:"/"}
    ])

    return routes
}
