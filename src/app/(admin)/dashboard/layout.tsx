export default function AboutLayout({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <>
      <div className="m-5">
        <div className="mb-5">{children}</div>
        <div className="flex gap-5">
          {products}
          {analytics}
        </div>
        {payments}
      </div>
    </>
  );
}
