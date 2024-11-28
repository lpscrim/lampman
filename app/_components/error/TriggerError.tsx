"use client";

import { useState } from "react";

export default function ErrorButton(props: { label: string }) {
  const [raiseError, setRaiseError] = useState(false);

  if (raiseError) {
    // "a" is undefined so "props.a.b" will result in an error
    //@ts-expect-error testing purposes, deliberate error 
    return props.a.b;
  } else {
    return (
      <button onClick={() => setRaiseError((error) => !error)}>
        {props.label}
      </button>
    );
  }
}
