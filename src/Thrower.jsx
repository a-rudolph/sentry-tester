import React from "react";

export default function Thrower() {
  const thrower = () => {
    const obj = {};

    const bar = obj.bar;

    const foo = bar;
    // testing hidden-source-map
    console.log(obj.foo(bar));
  };

  return <button onClick={thrower}>throw me! V3</button>;
}
