import React from "react";
import Child from "./Child";

export default function Parent() {
  return <Child onPress={() => console.log("Hola a todos!")}></Child>;
}