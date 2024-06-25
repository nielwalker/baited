<html
  key="1"
  lang="en"
>
  <head>
    <meta charSet="UTF-8" />
    <meta
      content="IE=edge"
      httpEquiv="X-UA-Compatible"
    />
    <meta
      content="width=device-width, initial-scale=1.0"
      name="viewport"
    />
    <title>
      MurtheHelp
    </title>
    <link
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      rel="stylesheet"
    />
    <link
      href="style.css"
      rel="stylesheet"
    />
  </head>
  <body className="">
    <section id="header">
      <a href="#">
        <img
          alt=""
          className="logo"
          src="img/logo.png"
        />
      </a>
      <div>
        <ul id="navbar">
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="shop.html">
              Shop
            </a>
          </li>
          <li>
            <a
              className="active"
              href="about.html"
            >
              About
            </a>
          </li>
          <li>
            <a href="contact.html">
              Contact
            </a>
          </li>
          <a
            href="#"
            id="close"
          >
            <i className="far fa-times" />
          </a>
          <div className="cart">
            <li id="lg-bag">
              <a>
                <i className="far fa-shopping-bag" />
              </a>
            </li>
            <span>
              0
            </span>
          </div>
        </ul>
      </div>
      <div id="mobile">
        <i
          className="fas fa-bars"
          id="bar"
        />
        <div className="cart">
          <li id="lg-bag">
            <a>
              <i className="far fa-shopping-bag" />
            </a>
          </li>
          <span>
            0
          </span>
        </div>
      </div>
      <div className="cartTab">
        <h3>
          Shopping Cart
        </h3>
        <div className="listCart">
        </div>
        <div className="btn">
          <button className="close">
            CLOSE
          </button>
          <button className="checkout">
            CHECK OUT
          </button>
        </div>
      </div>
    </section>
    <section
      className="about-header"
      id="page-header-about"
    >
      <h2>
        #KnowUs
      </h2>
      <p>
        BSIT 2R13 Valo_Boys
      </p>
    </section>
    <section
      className="section-p1"
      id="about-head"
    >
      <img
        alt=""
        src="img/about/a6.jpg"
      />
      <div>
        <h2>
          Who We Are?
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis ipsum voluptatem nesciunt mollitia suscipit, veritatis molestias itaque consectetur commodi? Aspernatur molestiae repellat velit doloremque laborum sequi earum ea assumenda?
        </p>
      </div>
    </section>
    <footer className="section-p1">
      <div className="col">
        <img
          alt=""
          src="img/logo.png"
        />
        <h4>
          contact
        </h4>
        <p>
          <strong>
            Address:
          </strong>
          {' '}C.M. Recto Ave., Lapasan, Cagayan de Oro City 9000
        </p>
        <p>
          <strong>
            Phone:
          </strong>
          {' '}09265553327
        </p>
        <p>
          <strong>
            Hours:
          </strong>
          {' '}10:00 - 18:00 Mon - Sat
        </p>
        <div className="follow">
          <h4>
            Follow Us
          </h4>
          <div>
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
          </div>
        </div>
      </div>
      <div className="col">
        <h4>
          About
        </h4>
        <a href="about.html">
          About Us
        </a>
        <a href="contact.html">
          Contact Us
        </a>
      </div>
      <div className="col">
        <h4>
          My Account
        </h4>
        <a href="#">
          Sign In
        </a>
        <a href="#">
          View Cart
        </a>
      </div>
      <div className="copyright">
        <p>
          2024, IT2R13 Valo Boys
        </p>
      </div>
    </footer>
    <script src="script.js" />
  </body>
</html>