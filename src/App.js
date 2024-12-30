import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import userContext from "./utils/userContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

const AppLayout = () => {
  const data = "Raunak";
  return (
    <Provider store={appStore}>
      <div className="App">
        <userContext.Provider value={{ loggedInUser: data }}>
          <Header />
        </userContext.Provider>
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
