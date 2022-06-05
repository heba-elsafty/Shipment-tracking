import { Helmet } from "react-helmet";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


// Pages
import HomeIndex from "./Pages/Home/HomeIndex";
import ShipmentIndex from "./Pages/ShipmentTracking/ShipmentIndex";

// SCSS

import './assets/stylesheet/App.scss';
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation("translation");
  return (
    <div className="pb-5">
      <Helmet>
        <title> {t("bosta")} </title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeIndex />} />
          <Route path="tracking-shipments/:id" element={<ShipmentIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
