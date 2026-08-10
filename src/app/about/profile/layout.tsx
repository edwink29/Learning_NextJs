export default function LayoutProfile({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Thanks for visiting!</h2>
      {children}
    </>
  );
}
