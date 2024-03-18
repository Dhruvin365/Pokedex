import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import Pokedex from "./pages/Pokedex";
import About from "./pages/About";
import ContactRow from "./components/home/contactRow/ContactRow";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="about" element={<About />} />
          <Route path="Pokemon/:id" element={<PokemonDetails />} />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="contactRow" element={<ContactRow />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
