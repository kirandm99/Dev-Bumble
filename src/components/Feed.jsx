import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sellerCards } from "../utils/feedData";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeeds = () => {
    if (feed) return;
    try {
      dispatch(addFeed(sellerCards));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeeds();
  }, []);

  if (!feed) return;

  if (feed.length === 0)
    return (
      <h1 className="text-center text-bold text-xl my-2">
        No Sellers Found....
      </h1>
    );

  return (
    feed && (
      <div className=" flex justify-center my-10">
        <UserCard seller={feed[0]} />
      </div>
    )
  );
};

export default Feed;
