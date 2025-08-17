import React from "react";
import { useSelector } from "react-redux";
import { viewData } from "../utils/viewData";

const ViewFeed = () => {
  const feedData = useSelector((store) => store.ViewFeed);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div key={feedData.id} className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex items-center gap-4">
          <img
            src={feedData.companyImage}
            alt={feedData.companyName}
            className="w-20 h-20 rounded-full border"
          />
          <div className="text-black">
            <h2 className="text-2xl font-bold">{feedData.companyName}</h2>
            <p>{feedData.aboutCompany}</p>
            <p>{feedData.location}</p>
            <p>{"📞" + " " + feedData.contact.phone}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-black">
          Listed Properties
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {viewData.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-xl shadow-xl overflow-hidden shadow-base-300"
            >
              <img
                src={prop.image}
                alt={prop.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 text-black">
                <h4 className="text-lg font-semibold">{prop.title}</h4>
                <p>{prop.location}</p>
                <p className="text-sm">{prop.type}</p>
                <p className="font-bold mt-2">{prop.price}</p>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                  {prop.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewFeed;
