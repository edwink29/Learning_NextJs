import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name_product: "Gajah-baru",
    price: 1000000,
  },
  {
    id: 2,
    name_product: "Gajah-nisa",
    price: 1000,
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log(searchParams, id);
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "API is working",
        data: detailProduct,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  return NextResponse.json({
    status: 200,
    message: "API is working",
    data,
  });
}
