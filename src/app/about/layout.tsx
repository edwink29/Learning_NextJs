export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed p-4 right-0 top-15 z-10 h-screen w-60 bg-gray-800 text-white">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
      {children}
    </>
  );
}
