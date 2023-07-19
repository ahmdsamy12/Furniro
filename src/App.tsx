import LayoutApp from "./Layout/LayoutApp";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeApp from "./pages/homepage/HomeApp";
import Shop from "./pages/shop-page/Shop";
import Contact from "./pages/contact/Contact";
import { motion } from "framer-motion";
import About from "./pages/about/About";
import ScrollToTop from "react-scroll-to-top";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutApp />}>
      <Route path="/" element={<HomeApp />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);


function App() {
  return (
    <motion.div className="App"   initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}>
       <ScrollToTop />
    <RouterProvider router={router} />
    </motion.div>
  );
}

export default App;
