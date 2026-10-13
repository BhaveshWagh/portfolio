import { useEffect } from "react";
import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";

import "./App.css";
import Header from "./component/Header";
import Projects from "./component/Projects";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Body from "./component/Body";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-ink-950 font-sans text-slate-300">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const routes = [
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
];

export const router = createBrowserRouter(routes);

export default App;
