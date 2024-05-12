"use client";

import Link from "next/link";
import React from "react";

function error() {
  return (
    <>
      <div>It came to unexpected error</div>
      <div>Return to the home page</div>
      <Link href="/">Home page</Link>
    </>
  );
}

export default error;
