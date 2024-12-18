import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Contain = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(
        "https://mxpertztestapi.onrender.com/api/sciencefiction"
      );
      setData(resp.data);
    };
    getData();
  }, []);
  return (
    <div className="flex justify-center p-2 curve grid-cols-4 bg-black">
      <Card data={data} />
    </div>  
  );
};

export default Contain;
