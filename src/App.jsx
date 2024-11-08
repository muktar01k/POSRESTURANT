
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Menu from "./Component/Menu";
import { SearchProvider } from "./Shared/SearchContext";
import NavBar from "./Component/NavBar";
// import Menu from "./Component/Menu";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Dashboard />

  },
  {
    path: "/Menu",
    element: <Menu />

  }
])


function App() {

  return (
    <>
      <SearchProvider>
      {/* <NavBar /> */}
      <RouterProvider router={router} />
    </SearchProvider>
    </>
  )
}

export default App