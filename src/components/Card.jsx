import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  if (!data || !data.length) {
    return <div className="bg-white">Loading...</div>;
  }
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/item/${item._id}`);
  };

  return (
    <div className="flex flex-wrap justify-center ">
      {data.map((item, index) => {
        const imageUrl =
          Array.isArray(item.Image) && item.Image.length > 0
            ? item.Image[1]
            : null;
        const title = item.Title || "Untitled";
        const status = item.Status || "Untitled";

       
        return (
          <div
            key={index}
            className="m-5 bg-gradient-to-r from-purple-700 to-cyan-200 p-3 shadow-md rounded-lg flex-col justify-center text-center w-1/5"
          >
            {imageUrl && (
              <div>
                <img
                  src={` https://ik.imagekit.io/dev24/${imageUrl}`}
                  alt={title}
                  className="rounded-md flex"
                />
              </div>
            )}
            <div className="mt-3 text-lg font-semibold text-white">{title}</div>
            <div className="mt-3 text-lg font-semibold flex justify-center bg-gray-50 rounded-full cursor-pointer">
              <button
                className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold"
                onClick={() => handleClick(item)}
              >
                {status}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
