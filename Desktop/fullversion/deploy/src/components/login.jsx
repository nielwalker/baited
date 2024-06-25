<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Firebase Auth</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <form id="MainForm" className="w-25 m-4">
    <h2 className="mb-3">Sign In</h2>
    <div className="form-floating mb-3">
      <input
        type="email"
        className="form-control"
        id="emailInp"
        placeholder="name@example.com"
      />
      <label htmlFor="emInput">Email address</label>
    </div>
    <div className="form-floating mb-3">
      <input
        type="password"
        className="form-control"
        id="passwordInp"
        placeholder="Password"
      />
      <label htmlFor="Passinput">Password</label>
    </div>
    <button
      type="submit"
      className="btn btn-primary"
      style={{ float: "right" }}
    >
      Log in
    </button>
    <a href="register.html">
      {" "}
      <button
        type="button"
        style={{ float: "right" }}
        className="btn btn-primary me-2"
      >
        Sign Up
      </button>
    </a>
  </form>
</>
