/* eslint-disable @next/next/no-img-element */
import { getData } from "@/app/services/product";
import Modal from "@/components/core/modal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function DetailProductPage(props: any) {
  const { params } = props;
  const { id } = await params; //harus menggunakan await untuk params karena params itu promise

  const product = await getData("http://localhost:3000/api/product/?id=" + id);
  console.log(product);

  return (
    <Modal>
      <img
        src={product.data.image}
        alt=""
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>{product.data.title}</h3>
        <p>Price: ${product.data.price}</p>
      </div>
    </Modal>
  );
}
