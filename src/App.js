import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hireme from "./Components/Hireme";
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
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/hire", element: <Hireme /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appConfig} />);
