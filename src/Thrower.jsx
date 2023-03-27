import React from "react";

export default function Thrower() {
  const thrower = () => {
    // testing hidden-source-map
    // for real this time
    foobar();
  };

  return <button onClick={thrower}>throw me!</button>;
}
