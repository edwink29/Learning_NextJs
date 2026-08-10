"use client";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState(0);

  return (
    <div>
      {/* <h1>Template Page {state}</h1>
      <button onClick={() => setState(state + 1)}>click</button> */}
      {children}
    </div>
  );
}
