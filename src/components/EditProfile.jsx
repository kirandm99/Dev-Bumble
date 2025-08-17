import React from "react";
import { useState } from "react";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const { firstName, about } = userData;
  const [companyName, setName] = useState(firstName);
  const [location, setLocation] = useState(userData.location);
  const [companyImage, setProfile] = useState(
    "../public/images/default-user-png.png"
  );
  const [aboutCompany, setAbout] = useState(about);

  const handleSubmit = () => {
    dispatch(
      addUser({
        firstName: companyName,
        password: companyName,
        companyImage: companyImage,
        location: location,
      })
    );
  };

  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center mx-10">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  value={companyName}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label py-2">
                  <span className="label-text">Location</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label py-2">
                  <span className="label-text">Profile URL</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  value={companyImage}
                  onChange={(e) => setProfile(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label py-2">
                  <span className="label-text">About</span>
                </div>
                <textarea
                  className="textarea"
                  value={aboutCompany}
                  placeholder="Bio"
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Save
              </button>
              <button className="btn btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <UserCard
        seller={{ companyName, location, companyImage, aboutCompany }}
      />
    </div>
  );
};

export default EditProfile;
