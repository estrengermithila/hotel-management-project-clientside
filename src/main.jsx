import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import About from './components/About';
import News from './components/News';
import CardGalleryDetails from './components/CardGalleryDetails';
import RoomsCardDetails from './components/RoomsCardDetails';
import Authprovider from './Authprovider';
import Login from './components/Login';
import Register from './components/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/rooms',
        element:<Rooms />,
        loader:() => fetch('/roomOverView.json')
      },
      {
        path:'/services',
        element:<Services />,
        loader:() => fetch('/services.json')
      },
      {
        path:'/gallery',
        element:<Gallery />,
      },
      {
        path:'/news',
        element: <News />,
        loader:() => fetch('/newsData.json')
      },
      {
        path:'/contacts',
        element: <Contacts />,
      },
      {
        path:'/about',
        element: <About />,
      },
      {
        path:'/login',
        element: <Login />,
      },
      {
        path:'/register',
        element: <Register />,
      },
      {
        path:'/cardGalleryDetails/:id',
        element: <CardGalleryDetails />,
        // loader:({params}) => fetch(`newsData.json/${params.id}`)
        loader: () => fetch(`/newsData.json`)
      },
      {
        path:'/roomsCardDetails/:id',
        element: <RoomsCardDetails />,
        // loader:({params}) => fetch(`newsData.json/${params.id}`)
        loader: () => fetch(`/roomOverView.json`)
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider><RouterProvider router={router} /></Authprovider>
  </StrictMode>,
)
