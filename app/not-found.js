import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="text-center bg-white py-24">
      <div className="p-4 py-8 text-black text-5xl ivanZelena">
        404 Error - This page does not exists
      </div>
      <div className="pb-3 bg-white">
        <button className="bgIvanZelenaSvetla rounded-lg p-2 hover:bg-green-900">
          <Link href="/">Return to the home page</Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
