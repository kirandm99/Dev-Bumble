import React from "react";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import ViewFeed from "./ViewFeed";
import { useNavigate } from "react-router-dom";
import { addViewFeed } from "../utils/viewDataSlice";

const UserCard = ({ seller }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCard = (id) => {
    dispatch(removeFeed(id));
  };

  const viewcard = (data) => {
    dispatch(addViewFeed(data));
    navigate("/viewDetails");
  };

  const { id, companyName, companyImage, location, aboutCompany } = seller;

  return (
    <div className="card bg-base-300 w-96 shadow-xl shadow-black">
      <figure>
        <img
          src={companyImage}
          alt="Seller Image"
          onClick={() => viewcard(seller)}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{companyName}</h2>
        <p>{location}</p>
        <p>{aboutCompany}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary" onClick={() => handleCard(id)}>
            Ignore
          </button>
          <button className="btn btn-secondary" onClick={() => handleCard(id)}>
            Intrested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
