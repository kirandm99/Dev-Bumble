import { useState } from "react";
import Modal from "./Modal";

const Login = () => {
  const [modalFlag, setModalFlag] = useState(false);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content  text-center text-base-300">
        <div className="max-w-xl ">
          <h1 className="mb-5 text-5xl font-bold">Let's Find Your Property</h1>
          <p className="mb-5 text-xl">
            Welcome to Dev-Bumble – one of top real estate platforms where you
            can easily search, buy, sell, or rent your next property.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setModalFlag(!modalFlag)}
          >
            Get Started
          </button>
        </div>
      </div>
      {modalFlag && <Modal />}
    </div>
  );
};

export default Login;
