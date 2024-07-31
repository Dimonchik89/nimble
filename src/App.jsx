import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact, Home } from "./pages";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/:id" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
