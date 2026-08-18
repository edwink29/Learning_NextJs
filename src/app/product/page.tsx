/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";

import Link from "next/link";
import { getData } from "../services/product";

type ProductProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function ProductPage(props: ProductProps) {
  const params = await props.params;
  const products = await getData("http://localhost:3000/api/product");

  console.log(products.products);

  return (
    <div>
      <h1>Product Detail</h1>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto max-w-7xl p-6">
        {products.products.length > 0 &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          products.products.map((product: any) => (
            <Link
              href={`/product/detail/${product.id}`}
              className="w-full max-w-sm bg-gray-100 hover:shadow-lg p-6 border border-gray-200 rounded-md shadow-md flex flex-col h-full"
              key={product.id}
            >
              <img
                alt={product.title}
                src={product.image}
                className="rounded-base mb-6 w-48 h-48"
              />
              <div>
                <div className="flex flex-col flex-1">
                  <h5 className="text-xl text-heading font-semibold tracking-tight truncate">
                    {product.title}
                  </h5>
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
            </Link>
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
