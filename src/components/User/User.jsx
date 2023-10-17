import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return <div className="bg-purple-500 text-white text-3xl p-4">User : {userid}</div>;
};

export default User;
