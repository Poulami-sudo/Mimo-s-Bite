import { useMemo, useState } from "react";
import { Link } from "react-router";

import webBanner from "../../Web Banner.img.png";
import chocolateBrownie from "../../Chocolate brownie .img.png";
import cookies from "../../Cookies.img.png";
import birthdayCake from "../../Birthday cake.img (2).png";


function Home({ onAdd, onWishlist, wishlist }) {

  /* =========================================================
     PRODUCTS
  ========================================================= */

  const products = [
    {
      id: 1,
      name: "Chocolate Brownie",
      category: "Brownies",
      description:
        "Rich, fudgy brownie made with premium chocolate.",
      price: 129,
      rating: "4.9/5",
      image: chocolateBrownie,
    },

    {
      id: 2,
      name: "Cookies",
      category: "Cookies",
      description:
        "Freshly baked cookies with crispy edges and chocolate chips.",
      price: 89,
      rating: "4.8/5",
      image: cookies,
    },

    {
      id: 3,
      name: "Birthday Cakes",
      category: "Cakes",
      description:
        "Elegant pink & white and chocolate cakes customized for celebrations.",
      price: 399,
      rating: "5.0/5",
      image: birthdayCake,
    },
  ];


  /* =========================================================
     SEARCH + CATEGORY
  ========================================================= */

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");


  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;

    });

  }, [search, category]);


  /* =========================================================
     CATEGORY LIST
  ========================================================= */

  const categories = [
    "All",
    "Cakes",
    "Brownies",
    "Cookies",
    "Cupcakes",
    "Pastries",
    "Ice Cream",
  ];


  return (
    <main>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <img
          src={webBanner}
          alt="Mimo's Bite Bakery Banner"
        />

        <h2>
          Welcome to Mimo's Bite
        </h2>

        <p>
          Freshly Baked Cakes, Pastries, Cookies, Ice Cream & Snacks
        </p>

        <Link
          to="/menu"
          className="btn"
        >
          Order Now
        </Link>

      </section>


      {/* =====================================================
          BEST SELLERS
      ===================================================== */}

      <section className="products-section">

        <div className="section-title">

          <h2>
            Our Best Sellers
          </h2>

        </div>


        {/* SEARCH */}

        <div className="search-container">

          <input
            type="text"
            placeholder="🔍 Search your favorite dessert..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

        </div>


        {/* CATEGORY FILTERS */}

        <div className="category-buttons">

          {categories.map((item) => (

            <button
              key={item}
              type="button"
              className={
                category === item
                  ? "active"
                  : ""
              }
              onClick={() =>
                setCategory(item)
              }
            >
              {item}
            </button>

          ))}

        </div>


        {/* PRODUCT CARDS */}

        <div className="products-container">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <article
                className="product-card"
                key={product.id}
              >

                <div className="product-image-wrapper">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="best-seller-badge">
                    Best Seller
                  </span>


                  {/* WISHLIST */}

                  <button
                    type="button"
                    className="wishlist-btn"
                    onClick={() =>
                      onWishlist(product.id)
                    }
                    aria-label="Add to wishlist"
                  >
                    {wishlist.includes(product.id)
                      ? "♥"
                      : "🤍"}
                  </button>

                </div>


                <h3>
                  {product.name}
                </h3>


                <p>
                  {product.description}
                </p>


                <div className="price">

                  Starting from ₹
                  {product.price}

                </div>


                <div className="product-rating">

                  ★★★★★{" "}
                  {product.rating}

                </div>


                <button
                  type="button"
                  onClick={() =>
                    onAdd(product)
                  }
                >
                  Buy Now
                </button>

              </article>

            ))

          ) : (

            <div className="no-products">

              <h3>
                No products found
              </h3>

              <p>
                Try another search or category.
              </p>

            </div>

          )}

        </div>


        {/* FULL MENU */}

        <div
          className="view-menu"
          style={{
            textAlign: "center",
            marginTop: "35px",
          }}
        >

          <Link
            to="/menu"
            className="btn"
          >
            🍰 View Full Menu
          </Link>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE MIMO'S BITE
      ===================================================== */}

      <section className="features-section">

        <div className="section-title">

          <h2>
            Why Choose Mimo's Bite?
          </h2>

        </div>


        <div className="features-container">


          {/* FEATURE 1 */}

          <div className="feature-card">

            <div className="feature-icon">
              🎂
            </div>

            <h3>
              Freshly Baked
            </h3>

            <p>
              Every item is baked fresh every day.
            </p>

          </div>


          {/* FEATURE 2 */}

          <div className="feature-card">

            <div className="feature-icon">
              🍫
            </div>

            <h3>
              Premium Ingredients
            </h3>

            <p>
              We use only high-quality ingredients.
            </p>

          </div>


          {/* FEATURE 3 */}

          <div className="feature-card">

            <div className="feature-icon">
              🚚
            </div>

            <h3>
              Fast Delivery
            </h3>

            <p>
              Quick and safe delivery at your doorstep.
            </p>

          </div>


        </div>

      </section>


      {/* =====================================================
          CUSTOMER REVIEWS
      ===================================================== */}

      <section className="reviews-section">

        <div className="section-title">

          <h2>
            What Our Customers Say
          </h2>

        </div>


        <div className="reviews-container">


          {/* REVIEW 1 */}

          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "Absolutely delicious cakes!"
            </p>

            <h4>
              — Priya Sharma
            </h4>

          </div>


          {/* REVIEW 2 */}

          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "Fresh brownies and fast delivery."
            </p>

            <h4>
              — Rahul Dasgupta
            </h4>

          </div>


          {/* REVIEW 3 */}

          <div className="review-card">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "Beautiful customized birthday cakes."
            </p>

            <h4>
              — Sneha Paul
            </h4>

          </div>


        </div>

      </section>


      {/* =====================================================
          CART
      ===================================================== */}

      <section className="cart-section">

        <div className="cart-container">

          <h2>
            Your Cart
          </h2>


          <h3>
            🛒 Cart ({0})
          </h3>


          <p>
            No items yet
          </p>


          <div className="cart-total">
            Total: ₹0
          </div>


          <div
            className="cart-buttons"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >

            <Link
              to="/cart"
              className="btn"
            >
              Checkout
            </Link>

            <button
              type="button"
              className="btn"
              onClick={() => {}}
            >
              Clear Cart
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="newsletter">

        <h2>
          Stay Updated 🍰
        </h2>

        <p>
          Subscribe to receive our latest offers,
          new cake collections and festive discounts.
        </p>


        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert("Thank you for subscribing!");
          }}
        >

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      </section>


    </main>
  );
}


export default Home;