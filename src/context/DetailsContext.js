import React, { useState } from "react";

export const DetailsContext = React.createContext({
  name: "",
  state: true,
});

export const api = () => {
  const res = fetch(``);
  const data = res.json();
  this.Profile__context = data;
};

export const principall = () => {
  const les = "git__bash";

  const ctx = useState();
  return (
    <div>
      {les}
      {ctx}
    </div>
  );
};
