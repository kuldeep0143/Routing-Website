import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/kuldeep0143")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-purple-500 text-white p-4 text-3xl">
      Github Total Repositories : {data.public_repos}
      <img
        className="text-center "
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
      />
    </div>
  );
};

export default Github;
