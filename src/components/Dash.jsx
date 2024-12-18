import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Dash = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!data) return <div>Loading...</div>;

  const { Title = "Untitled", Image, Brainquest, Storyadvenure } = data;

  return (
    <div className="flex-column flex-wrap justify-center">
      <div className="text-2xl font-bold text-center text-white mb-5">
        {Title}
      </div>

      {Image?.length > 0 && (
        <div className="flex justify-center">
          {Image.map((img, idx) => (
            <img
              key={idx}
              src={`https://ik.imagekit.io/dev24/${img}`}
              alt={`Image ${idx + 1}`}
              className="rounded-md mx-2 w-[32rem] object-fit"
            />
          ))}
        </div>
      )}
      <div className="mt-5 p-4 bg-gray-800 rounded-lg text-center">
        <div className="text-xl font-bold text-white">
          {Storyadvenure?.Storytitle || "No Title"}
        </div>
        {Storyadvenure?.content?.map((story, idx) => (
          <div key={idx} className="mt-3">
            {story.Paragraph?.map((para, i) => (
              <p key={i} className="text-white mb-2">
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-5 w-full">
        {Brainquest?.map((question, idx) => (
          <div key={idx} className="p-4 border-b border-gray-500">
            <div className="text-lg text-white font-semibold">
              {question.Question}
            </div>
            <div className="mt-2 flex flex-col">
              {question.Option?.map((opt, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="radio" name={`question-${idx}`} />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dash;
