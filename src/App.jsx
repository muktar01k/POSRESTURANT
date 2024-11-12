
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import NavBar from "./Component/NavBar";
import { GuestProvider } from "./Shared/GuestContext";
import { SearchProvider } from "./Shared/SearchContext";
import Menu from "./Component/Menu";
import Payment from "./Component/Payment";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Dashboard />

  },
  {
    path: "/Menu",
    element: <Menu />

  },
  {
    path: "/Payment",
    element: <Payment />

  }
])


function App() {

  return (
    <>
   <GuestProvider>
      <SearchProvider>
        <NavBar />       
        <RouterProvider router={router} />
      </SearchProvider>
    </GuestProvider>
    </>
  )
}

export default App


