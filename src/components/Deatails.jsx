import React from "react";

export const Deatails = ({ params }) => {
  console.log(params);

  return <h1>Gif: {params.id}</h1>;
};
