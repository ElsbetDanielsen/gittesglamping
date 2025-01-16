import { useLocation, useRoutes } from "react-router-dom"

import Navigation from "./components/Navigation/Nav"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import ActivitiesPage from "./pages/ActivitiesPage"
import StayPage from "./pages/Stay/StayPage"
import AStay from "./pages/Stay/AStay"
import ContactPage from "./pages/ContactPage"
import MyListPage from "./pages/MyListPage"
import Backoffice from "./pages/Backoffice/Backoffice"
import ProtectedRoute from "./components/ProtectedRoute"
import useAuth from "./hooks/useAuth"
import Login from "./components/Login/Login"
import SuccesMsg from "./components/KontaktGitte/SuccesMsg"


function App() {
  const {signedIn} = useAuth()

  const location = useLocation()
  const isNav = ["/", "/activities", "/stay", "/stay/:id", "/contact", "/mylist", "/login", "/backoffice"].includes(location.pathname)
  const isFooter = ["/", "/activities", "/stay", "/stay/:id", "/contact", "/mylist"].includes(location.pathname)

  const routes = useRoutes([
    { 
      path: "/", 
      element: <Home />
    },
    { 
      path: "/activities", 
      element: <ActivitiesPage /> 
    },
    { 
      path: "/stay", 
      element: <StayPage />,
      children: [
        {
          path: "/stay/:id",
          element: <AStay />
        }
      ]
    },
    { 
      path: "/contact", 
      element: <ContactPage /> 
    },
    { 
      path: "/mylist", 
      element: <MyListPage /> 
    },
    { 
      path: "/login", 
      element: <Login />
    },
    { 
      path: "/backoffice", 
      element: (
        <ProtectedRoute isAllowed={signedIn}>
            <Backoffice />
        </ProtectedRoute>
      )
    },
    { 
      path: "/succes", 
      element: <SuccesMsg />
    },
    {
      path: "*",
      element : <div>NOT FOUND</div>
    },
  ])

  return (
    <>
      {isNav && <Navigation />}
      <div>{routes}</div>
      {isFooter && <Footer />}
    </>
  )
}

export default App