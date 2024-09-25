import React from "react";
import { useData } from "./DataProvider";

export default function GrandChild() {
  const data = useData();

  return <div>this is grand child</div>;
}
