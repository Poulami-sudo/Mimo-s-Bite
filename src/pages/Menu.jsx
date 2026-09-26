import { useMemo, useState } from "react";

import birthdayCakes from "../../B'day cakes.png";
import chocolateBrownies from "../../Chocolate Brownie.png";
import cookies from "../../Cookies.png";
import cupcakes from "../../Cupcakes.png";
import pastries from "../../Pastries.png";
import iceCream from "../../Ice-cream & Pastries.png";

function Menu() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "🎂 Birthday Cakes",
      searchName: "Birthday Cakes",
      description: "Freshly baked customized birthday cakes.",
      price: 399,
      image: birthdayCakes,
    },
    {
      id: 2,
      name: "🍫 Chocolate Brownies",
      searchName: "Chocolate Brownies",
      description: "Rich, fudgy brownies made with premium chocolate.",
      price: 129,
      image: chocolateBrownies,
    },
    {
      id: 3,
      name: "🍪 Cookies",
      searchName: "Cookies",
      description: "Crispy outside, soft inside with chocolate chips.",
      price: 89,
      image: cookies,
    },
    {
      id: 4,
      name: "🧁 Cupcakes",
      searchName: "Cupcakes",
      description: "Soft and delicious cupcakes in different flavours.",
      price: 79,
      image: cupcakes,
    },
    {
      id: 5,
      name: "🍰 Pastries",
      searchName: "Pastries",
      description: "Fresh cream pastries perfect for every occasion.",
      price: 99,
      image: pastries,
    },
    {
      id: 6,
      name: "🍦 Ice Cream",
      searchName: "Ice Cream",
      description: "Refreshing ice cream in a variety of flavours.",
      price: 69,
      image: iceCream,
    },
  ];

  const filteredProducts = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return products;
    }

    return products.filter((product) =>
      product.searchName.toLowerCase().includes(value)
    );
  }, [search]);

  return (
    <main className="menu-page">

      {/* MENU HEADER */}
      <section className="menu-header">
        <h1>Our Menu</h1>

        <div className="menu-search-wrapper">
          <input
            type="text"
            placeholder="🔍 Search your favorite dessert..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </section>

      {/* MENU PRODUCTS */}
      <section className="menu-products-section">

        <div className="menu-grid">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article className="menu-product-card" key={product.id}>

                <div className="menu-product-image">
                  <img
                    src={product.image}
                    alt={product.searchName}
                  />
                </div>

                <div className="menu-product-content">

                  <h2>{product.name}</h2>

                  <p>{product.description}</p>

                  <div className="menu-product-price">
                    Starting from ₹{product.price}
                  </div>

                </div>

              </article>
            ))
          ) : (
            <div className="menu-no-results">
              <h2>No desserts found</h2>
              <p>Try searching for another dessert.</p>
            </div>
          )}

        </div>

      </section>

    </main>
  );
}

export default Menu;