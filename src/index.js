import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./components/app/app.jsx";
import { PageNotFound } from "./components/page-not-found/page-not-found.jsx";
import { store } from "./redux/store";

//TODO: De incercat sa afiseze ceva daca avem 0 elemente si de lucrat cu react-router-dom pentru elemente aparte

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </Provider>
);
