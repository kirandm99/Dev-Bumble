import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { requestData } from "../utils/requestsData";

const Request = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addRequests(requestData));
  }, [dispatch]);

  const handleRequest = (id) => {
    dispatch(removeRequest(id));
  };

  if (!requests) return;
  if (requests.length === 0)
    return (
      <h1 className="text-center text-2xl my-4 text-black">
        No Requests Found...
      </h1>
    );
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-black text-3xl">Requests</h1>
      {requests.map((connection) => {
        const { id, companyName, companyImage, location, aboutCompany } =
          connection;

        return (
          <div
            key={id}
            className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 mx-auto w-1/2"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={companyImage}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">{companyName}</h2>
              <p>{location}</p>
              <p>{aboutCompany}</p>
            </div>
            <div className="flex">
              <button
                className="btn btn-active btn-primary mx-2"
                onClick={() => handleRequest(id)}
              >
                Accept
              </button>
              <button
                className="btn btn-active btn-secondary mx-2"
                onClick={() => handleRequest(id)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Request;
