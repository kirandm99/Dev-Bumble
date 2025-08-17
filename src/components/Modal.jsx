import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const getUser = useSelector((store) => store.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  const [loginFlag, setLoginFlag] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const performAction = () => {
    dispatch(
      addUser({
        firstName: name,
        password: password,
        email: email,
        location: location,
        about: about,
      })
    );
    setLoginFlag((value) => !value);
    return navigate("/");
  };

  const handleSubmit = async () => {
    setError("");
    try {
      if (getUser) {
        loginFlag && email == getUser.email && password == getUser.password
          ? "Logged SuccessFully"
          : setError("Enter Valid Credentials");
      } else if (email != "" && password != "" && location != "") {
        performAction();
        return "Sign Up SuccessFully";
      } else {
        setError("Enter Valid Credentials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.getElementById("my_modal_1").showModal();
  }, []);

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h2 className="card-title justify-center">
              {loginFlag ? "Login" : "Sign Up"}
            </h2>
            <div>
              {!loginFlag && (
                <>
                  <div>
                    <div className="label">
                      <span className="label-text">
                        First Name <span className="text-red-600">*</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input input-bordered w-full max-w-xs my-3"
                    />
                  </div>
                </>
              )}
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    E-mail ID <span className="text-red-600">*</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full max-w-xs my-3"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label py-2">
                  <span className="label-text">
                    Password <span className="text-red-600">*</span>
                  </span>
                </div>
                <input
                  type="password"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full max-w-xs my-3"
                />
              </label>

              {!loginFlag && (
                <>
                  <label className="form-control w-full max-w-xs">
                    <div className="label py-2">
                      <span className="label-text">
                        Location<span className="text-red-600">*</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="input input-bordered w-full max-w-xs my-3"
                    />
                  </label>

                  <label className="form-control w-full max-w-xs">
                    <div className="label py-2">
                      <span className="label-text">About</span>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                      className="input input-bordered w-full max-w-xs my-3"
                    />
                  </label>
                </>
              )}
            </div>
            <p className="text-red-700 text-center">{error}</p>
            <div className="justify-center">
              <button
                className="btn btn-neutral w-full max-w-xs mt-5"
                onClick={handleSubmit}
              >
                {loginFlag ? "Login" : "Sign Up"}
              </button>
            </div>
            <p className="text-center mt-4">
              {!loginFlag
                ? "If You have an account? "
                : "Don't have an account? "}
              <a
                onClick={() => setLoginFlag(!loginFlag)}
                className="text-blue-500 hover:underline"
              >
                {!loginFlag ? "Login Here" : "Register here"}
              </a>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
