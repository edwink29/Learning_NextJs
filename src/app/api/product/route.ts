import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Shoe Nike",
    price: 29,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/399385cb-1c90-4bd6-9c17-6e688763e149/NIKE+AIR+MAX+95+BIG+BUBBLE.png",
  },
  {
    id: 2,
    title: "Shoe Nike Type C",
    price: 100,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/399385cb-1c90-4bd6-9c17-6e688763e149/NIKE+AIR+MAX+95+BIG+BUBBLE.png",
  },
  {
    id: 3,
    title: "Shoe Nike Type C",
    price: 100,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/399385cb-1c90-4bd6-9c17-6e688763e149/NIKE+AIR+MAX+95+BIG+BUBBLE.png",
  },
  {
    id: 4,
    title: "Shoe Nike Type C",
    price: 100,
    image:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/399385cb-1c90-4bd6-9c17-6e688763e149/NIKE+AIR+MAX+95+BIG+BUBBLE.png",
  },
];

// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get("id");

//   if (id) {
//     const detailProduct = data.find((item) => item.id === Number(id));
//     if (detailProduct) {
//       return NextResponse.json({
//         status: 200,
//         message: "API is working",
//         data: detailProduct,
//       });
//     }

//     return NextResponse.json({
//       status: 404,
//       message: "Not Found",
//       data: {},
//     });
//   }

//   return NextResponse.json({
//     status: 200,
//     message: "API is working",
//     data,
//   });
// }

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retrieveDataById("products", id);
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

  const products = await retrieveData("products");

  return NextResponse.json({
    status: 200,
    message: "API is working",
    products,
  });
}
