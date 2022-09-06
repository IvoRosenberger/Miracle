import React from "react";
import hoc from "./Hoc";

const App = ({ data }) => (
  <ul>
    {data.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);

export default hoc("https://jsonplaceholder.typicode.com/posts", App);