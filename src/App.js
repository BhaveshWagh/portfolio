import Header from "./component/Header";

import { Outlet, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Projects from "./component/Projects";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Body from "./component/Body";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default App;
