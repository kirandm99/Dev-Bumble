import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectionData } from "../utils/connectionData";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  dispatch(addConnection(connectionData));
  console.log(connections);
  if (!connections) return;
  if (connections.length === 0)
    return (
      <h1 className="text-center text-black my-10">No Connections Found...</h1>
    );
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-black text-3xl">Connections</h1>
      {connections.map((connection) => {
        const { id, companyName, companyImage, location, aboutCompany } =
          connection;

        return (
          <div
            key={id}
            className="flex m-4 p-4 rounded-lg bg-base-300 mx-auto w-1/2"
          >
            <div className="flex items-center justify-center w-20 h-20">
              <img
                alt="photo"
                className=" w-full h-full rounded-full object-cover"
                src={companyImage}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">{companyName}</h2>
              <p>{location}</p>
              <p>{aboutCompany}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
