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
        loader:() => fetch('../public/roomOverView.json')
      },
      {
        path:'/services',
        element:<Services />,
        loader:() => fetch('../public/services.json')
      },
      {
        path:'/gallery',
        element:<Gallery />,
      },
      {
        path:'/news',
        element: <News />,
        loader:() => fetch('../public/newsData.json')
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
        path:'/cardGalleryDetails/:id',
        element: <CardGalleryDetails />,
        // loader:({params}) => fetch(`newsData.json/${params.id}`)
        loader: () => fetch(`../newsData.json`)
      },
      {
        path:'/roomsCardDetails/:id',
        element: <RoomsCardDetails />,
        // loader:({params}) => fetch(`newsData.json/${params.id}`)
        loader: () => fetch(`../roomOverView.json`)
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
