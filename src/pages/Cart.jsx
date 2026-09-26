function Cart({
  cart,
  onRemove,
  onClear,
}) {

  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.quantity,
      0
    );


  function handleCheckout() {

    if (cart.length === 0) {

      alert(
        "🛒 Your cart is empty!"
      );

      return;
    }


    alert(
      `🎉 Your order total is ₹${total}.\n\nCheckout system will be connected next.`
    );
  }


  return (
    <section className="cart-section">

      <div className="section-heading">

        <span>
          Your Order
        </span>

        <h2>
          Shopping Cart 🛒
        </h2>

      </div>


      <div className="cart-box">

        {cart.length === 0 ? (

          <div className="empty-cart">

            <div>
              🛒
            </div>

            <h3>
              Your cart is empty
            </h3>

            <p>
              Add some delicious treats
              to your cart!
            </p>

          </div>

        ) : (

          <>

            <div className="cart-items">

              {cart.map(
                (item) => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <div>

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        ₹{item.price}
                        {" × "}
                        {item.quantity}
                      </p>

                    </div>


                    <div className="cart-item-right">

                      <strong>
                        ₹
                        {item.price *
                          item.quantity}
                      </strong>


                      <button
                        onClick={() =>
                          onRemove(
                            item.id
                          )
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                )
              )}

            </div>


            <div className="cart-total">

              <h3>
                Total: ₹{total}
              </h3>


              <div>

                <button
                  className="checkout-btn"
                  onClick={
                    handleCheckout
                  }
                >
                  Checkout
                </button>


                <button
                  className="clear-btn"
                  onClick={onClear}
                >
                  Clear Cart
                </button>

              </div>

            </div>

          </>

        )}

      </div>

    </section>
  );
}


export default Cart;