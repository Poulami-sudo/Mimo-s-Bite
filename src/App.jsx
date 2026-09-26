import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";


function App() {
  /* =========================================================
     CART STATE
  ========================================================= */

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("mimos-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });


  /* =========================================================
     WISHLIST STATE
  ========================================================= */

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("mimos-wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });


  /* =========================================================
     SAVE CART TO LOCAL STORAGE
  ========================================================= */

  useEffect(() => {
    localStorage.setItem(
      "mimos-cart",
      JSON.stringify(cart)
    );
  }, [cart]);


  /* =========================================================
     SAVE WISHLIST TO LOCAL STORAGE
  ========================================================= */

  useEffect(() => {
    localStorage.setItem(
      "mimos-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);


  /* =========================================================
     ADD PRODUCT TO CART
  ========================================================= */

  const addToCart = (product) => {
    setCart((currentCart) => {

      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );


      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }


      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };


  /* =========================================================
     REMOVE ONE PRODUCT FROM CART
  ========================================================= */

  const removeFromCart = (id) => {
    setCart((currentCart) => {

      return currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };


  /* =========================================================
     CLEAR ENTIRE CART
  ========================================================= */

  const clearCart = () => {
    setCart([]);
  };


  /* =========================================================
     TOGGLE WISHLIST
  ========================================================= */

  const toggleWishlist = (id) => {
    setWishlist((currentWishlist) => {

      if (currentWishlist.includes(id)) {
        return currentWishlist.filter(
          (item) => item !== id
        );
      }


      return [
        ...currentWishlist,
        id,
      ];
    });
  };


  /* =========================================================
     CART COUNT
  ========================================================= */

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  /* =========================================================
     APP
  ========================================================= */

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar cartCount={cartCount} />


      {/* ================= PAGES ================= */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={
            <Home
              onAdd={addToCart}
              onWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          }
        />


        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* MENU */}

        <Route
          path="/menu"
          element={
            <Menu
              onAdd={addToCart}
              onWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          }
        />


        {/* GALLERY */}

        <Route
          path="/gallery"
          element={<Gallery />}
        />


        {/* CONTACT */}

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* CART */}

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemove={removeFromCart}
              onClear={clearCart}
            />
          }
        />


        {/* INVALID URL → HOME */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>


      {/* ================= FOOTER ================= */}

      <Footer />
    </>
  );
}


export default App;