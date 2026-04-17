import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Router from './Router/Router'
import Navber from './Navber/Navber'
import Home from './Home/Home'
import Timeline from './Timeline/Timeline'
import Status from './Status/Status'
import CardDetails from './CardDetails/CardDetails'
import CallProvider from './CallProvider/CallProvider'
import { ToastContainer } from 'react-toastify'
import ErrorPage from './ErrorPage/ErrorPage'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Router/>,
    children:[
      {
        index:true,
        loader:() => fetch("friends.json"),
        element:<Home/> 
      },
      {
        path:"/timeline",
        loader:() => fetch("friends.json"),
        element:<Timeline/>
      },
      {
        path:"/status",
        loader:() => fetch("friends.json"),
        element:<Status/>
      },
      {
        path:"/carddetails/:id",
        loader:() => fetch("friends.json"),
        
        
        element:<CardDetails></CardDetails>
      }
    ],
   errorElement:<ErrorPage></ErrorPage>,
  },
]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallProvider>
    <RouterProvider router={router}></RouterProvider>
    
    </CallProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
