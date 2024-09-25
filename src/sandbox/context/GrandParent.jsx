import React from "react";
import Parent from "./Parent";
import DataProvider from "./DataProvider";

export default function GrandParent() {
  return (
    <div>
      <DataProvider>
        <Parent />
      </DataProvider>
    </div>
  );
}
