import axios from "axios";
import { useState, useEffect } from "react";
import Person from "./Person";

const Card = () => {
  const url = "https://randomuser.me/api/";
  const [first, setFirst] = useState();
  const response = async () => {
    const { data } = await axios.get(url);
    const response = data.results[0];

    setFirst(response);
    console.log(first);
  };
  useEffect(() => {
    response();
  }, []);
  return (
    <div className="container">
      {first && <Person first={first} />}
      <button className="btn btn-primary " onClick={() => response()}>
        Random User
      </button>
    </div>
  );
};

export default Card;
