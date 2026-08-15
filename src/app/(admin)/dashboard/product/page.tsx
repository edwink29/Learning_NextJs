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
    <div>
      <h1>{status}</h1>
      <button
        onClick={() => revalidate()}
        className="bg-gray-800 p-3 rounded-md m-8 text-white cursor-pointer"
      >
        Revalidate
      </button>
    </div>
  );
}
