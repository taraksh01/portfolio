import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-black/95">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      // { path: "/about", element: <About /> },
      // { path: "/contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appConfig} />);
