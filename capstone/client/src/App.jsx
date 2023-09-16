import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Billing from './Components/Billing/Billing'
import Breed from './Components/Breed/Breed'
import Charts from './Components/Charts/Charts'
import Contacts from './Components/Contacts/Contacts'
import Products from './Components/Products/Products'
import Delivery from './Components/Delivery/Delivery'


//import fucking React dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// lets fucking create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  },
  {
    path: '/billing',
    element: <div><Billing/></div>
  },
  {
    path: '/breed',
    element: <div><Breed/></div>
  },
  {
    path: '/charts',
    element: <div><Charts/></div>
  },
  {
    path: '/contacts',
    element: <div><Contacts/></div>
  },
  {
    path: '/products',
    element: <div><Products/></div>
  },
  {
    path: '/delivery',
    element: <div><Delivery/></div>
  }
])

function App() {
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
