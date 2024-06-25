<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Click&amp;Eat</title>
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <div className="container">
    <header>
      <h1>LIST PRODUCT</h1>
      <div className="iconCart">
        <h2 id="msg" />
        <h2 id="greet" />
        <button type="button" id="signoutbutton" className="btn btn-info">
          Log Out
        </button>
        <img src="cart.png" alt="" />
        <div className="totalQuantity">0</div>
      </div>
    </header>
    <div className="listProduct">
      <div className="item">
        <img src="image/1.jpg" alt="" />
        <h2>Product Name</h2>
        <div className="price">₱145.00</div>
        <button>Add to Cart</button>
      </div>
    </div>
  </div>
  <div className="cart">
    <h2>CART</h2>
    <div className="listCart">
      <div className="item">
        <img src="image/1.jpg" alt="" />
        <div className="content">
          <div className="name">Product Name</div>
          <div className="price">₱145.00/1 product</div>
        </div>
        <div className="quantity">
          <button>-</button>
          <span className="value">3</span>
          <button>+</button>
        </div>
      </div>
    </div>
    <div className="buttons">
      <div className="close">CLOSE</div>
      <div className="checkout">
        <a href="checkout.html">CHECKOUT</a>
      </div>
    </div>
  </div>
</>
