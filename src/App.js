import { useEffect } from "react";
import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";

import "./App.css";
import Header from "./component/Header";
import Projects from "./component/Projects";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Body from "./component/Body";
import seo from "./utils/seo.json";

// Mirrors the per-route tags that scripts/seo-pages.js bakes into the built
// HTML, so client-side navigation shows the same title/description/canonical.
const useRouteSeo = (pathname) => {
  useEffect(() => {
    const route = seo.routes.find((r) => r.path === pathname);
    if (!route) return;
    document.title = route.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", route.description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", seo.siteUrl + route.path);
  }, [pathname]);
};

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useRouteSeo(pathname);

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
