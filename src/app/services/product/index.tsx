export const getData = async (url: string) => {
  // const res = await fetch("https://fakestoreapi.com/productss", {
  //   cache: "no-store",
  // });
  const res = await fetch(url, {
    cache: "no-store",
    next: {
      // revalidate: 30,
      tags: ["products"],
    },
  });

  // const res = await fetch("http://localhost:3000/api/product");

  if (!res.ok) {
    throw new Error("Failed to Fetch data");
  }

  return res.json();
};
