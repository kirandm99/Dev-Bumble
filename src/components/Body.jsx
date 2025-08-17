import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const getUser = useSelector((store) => store.user);

  useEffect(() => {
    const fetchLoggedUser = async () => {
      if (getUser) return;
      dispatch(addUser(getUser));
    };
    fetchLoggedUser();
  }, [dispatch, getUser]);
  return (
    <>
      <NavBar />
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-screen pt-16"
        style={{
          backgroundImage: `url(../public/images/landing-page.png)`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Body;
