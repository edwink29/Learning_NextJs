/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";

type ProductProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

async function getData() {
  const res = await fetch("https://fakestoreapi.com/productss", {
    cache: "no-store",
  });
  // const res = await fetch("http://localhost:3000/api/product", {
  //   cache: "force-cache",
  //   next: {
  //     // revalidate: 30,
  //     tags: ["products"],
  //   },
  // });

  // const res = await fetch("http://localhost:3000/api/product");

  if (!res.ok) {
    throw new Error("Failed to Fetch data");
  }

  return res.json();
}

export default async function ProductPage(props: ProductProps) {
  const params = await props.params;
  const product = await getData();
  console.log(product);

  console.log(product);

  return (
    <div>
      <h1>Product Detail</h1>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto max-w-7xl p-6">
        {product.length > 0 &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          product.map((product: any) => (
            <div
              className="w-full max-w-sm bg-gray-100 hover:shadow-lg p-6 border border-gray-200 rounded-md shadow-md flex flex-col h-full"
              key={product.id}
            >
              <a href="#">
                <img
                  alt="product.title"
                  src={product.image}
                  className="rounded-base mb-6 w-48 h-48"
                />
              </a>
              <div>
                <div className="flex flex-col flex-1">
                  <a href="#">
                    <h5 className="text-xl text-heading font-semibold tracking-tight truncate">
                      {product.title}
                    </h5>
                  </a>
                  <div className="flex items-center mt-auto justify-between pt-6">
                    <span className="text-3xl font-extrabold text-heading">
                      ${product.price}
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center  text-white bg-green-500 hover:bg-green-600 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {params.slug && (
        <>
          <p>{params.slug[0]}</p>
          <p>{params.slug[1]}</p>
          <p>{params.slug[2]}</p>
        </>
      )}
    </div>
  );
}
