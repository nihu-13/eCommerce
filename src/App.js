// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./component/About";
import Card from "./component/Cart";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Products from "./component/Products";
import SingleProduct from "./component/SingleProduct";
import { GlobalStyle } from "./component/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ErrorPage from "./component/ErrorPage";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#B3B2C2", //#0a1435
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
      section: "464px",
    },
  };
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/card" element={<Card />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/single-product/:id" element={<SingleProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
