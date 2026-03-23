import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const About = lazy(() => import("./pages/About").then(module => ({ default: module.About })));
const Services = lazy(() => import("./pages/Services").then(module => ({ default: module.Services })));
const Sectors = lazy(() => import("./pages/Sectors").then(module => ({ default: module.Sectors })));
const Expertise = lazy(() => import("./pages/Expertise").then(module => ({ default: module.Expertise })));
const Clients = lazy(() => import("./pages/Clients").then(module => ({ default: module.Clients })));
const Contact = lazy(() => import("./pages/Contact").then(module => ({ default: module.Contact })));

const Loading = () => (
  <div className="h-screen w-full flex items-center justify-center bg-slate-50">
    <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
