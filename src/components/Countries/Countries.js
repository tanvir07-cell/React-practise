import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts : {posts.length}</h1>

      {posts.map((country) => (
        <Country title={country.title} key={country.id}></Country>
      ))}
    </div>
  );
};

export default Countries;
