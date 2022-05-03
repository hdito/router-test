import React, { useEffect } from "react";

export function Test({ title }) {
  useEffect(() => {
    console.log(title);
  });
  return <h1>{title}</h1>;
}
