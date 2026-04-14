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



const router = createBrowserRouter([
  {
    path:"/",
    element:<Router/>,
    children:[
      {
        index:true,
        element:<Home/> 
      },
      {
        path:"/timeline",
        element:<Timeline/>
      },
      {
        path:"/status",
        element:<Status/>
      },
      {
        path:"/carddetails/:id",
        loader:()=> fetch("friends.json"),
        element:<CardDetails></CardDetails>
      }
    ]
  }
]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider> 
  </StrictMode>,
)
