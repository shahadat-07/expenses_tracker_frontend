import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email, password);

  const signUp = async (event) => {
    event.preventDefault();

    await axios
      .post("https://expenses-tracker-07.herokuapp.com/signup", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      });
    .then((window.location.href = "/"));
  };

  return (
    <section className="container position-absolute top-50 start-50 translate-middle">
      <div className="text-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          fill="currentColor"
          className="bi bi-coin mb-4 text-info"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <h3>Start Your Journey</h3>
        <p>
          Already have an account?{" "}
          <Link className="fw-bold ms-1 text-info" to="/">
            Login
          </Link>
        </p>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form id="login" className="form-signin" onSubmit={signUp}>
            <div className="mb-4">
              <label for="inputEmail" className="sr-only mb-2">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label for="inputPassword" className="sr-only mb-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <button className="btn btn-md btn-info w-100" type="submit">
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </section>
  );
};

export default SignUp;
