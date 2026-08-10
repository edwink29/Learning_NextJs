type ProductDetailProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function DetailProduct(props: ProductDetailProps) {
  const params = await props.params;
  console.log(params);

  return (
    <div>
      <h1>Product Detail</h1>
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
