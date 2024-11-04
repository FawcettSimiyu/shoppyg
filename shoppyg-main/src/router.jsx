import { createBrowserRouter } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import App from './App';
import Home from './Pages/Home/Home';
import Error from './Components/Error';
import Loading from './Components/Loading';

const Products = lazy(() => import('./Pages/ProductPage/Products'));
const ProductDetail = lazy(() => import('./Components/ProductDetail'));
const Cart = lazy(() => import('./Pages/Cart/CartPage'));
const Checkout = lazy(() => import('./Components/Checkout/Checkout'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element:
                    <Home />
                    
            },
            {
                path: '/products',
                element:
                    <Suspense fallback={<div><Loading /></div>}>
                        <Products />
                    </Suspense>

            },
            {
                path: '/products/:id',
                element:
                    <Suspense fallback={<div><Loading /></div>}>
                        <ProductDetail />
                    </Suspense>
            },
            {
                path: '/cartproduct',
                element:
                    <Suspense fallback={<div><Loading /></div>}>
                        <Cart />
                    </Suspense>

            },
        ],
        errorElement:<Error />,
    },
    {
        path: '/checkout',
        element:
            <Suspense fallback={<div><Loading /></div>}>
                <Checkout />
            </Suspense>,
        errorElement:<Error />
    }
])

export default router;