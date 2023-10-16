import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Revolution from "./components/Revolution/Revolution";
import About from "./components/About/About";
import CustomSoftware from "./components/CustomSoftware/CustomSoftware";
import MobileApp from "./components/MobileApp/MobileApp";
import CustomerForm from "./components/Form/CustomerForm";
import { ThemeProvider } from "@mui/styles";
import Theme from "./components/Theme";
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from "./components/Basket/Basket";
function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={Theme}>
          <Routes>
            <Route path="/form" exact element={<CustomerForm />} />
            <Route path="/basket" exact element={<Basket />} />

            <Route
              element={
                <Layout
                  value={value}
                  setValue={setValue}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              }
            >
              <Route path="/home" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/revolution" element={<Revolution />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/customsoftware"
                element={<CustomSoftware setSelectedIndex={setSelectedIndex} />}
              />
              <Route
                path="/mobileapp"
                element={<MobileApp setSelectedIndex={setSelectedIndex} />}
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
