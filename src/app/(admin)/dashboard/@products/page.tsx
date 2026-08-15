"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=Edwin12345",
      {
        method: "POST",
      },
    );
    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const respone = await res.json();
      if (respone.revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };

  return (
    <div className="w-3/6 h-50 bg-gray-400 rounded-2xl flex flex-col justify-center items-center gap-5">
      <div className="text-center">
        <h1 className="text-2xl text-white">Product Reactivate</h1>
        <h1>{status}</h1>
      </div>

      <button
        onClick={() => revalidate()}
        className="bg-gray-800 p-3 rounded-md text-white cursor-pointer"
      >
        Revalidate
      </button>
    </div>
  );
}
