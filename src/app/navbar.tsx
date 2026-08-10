import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="flex bg-gray-800 p-4 justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-white text-xl font-bold mr-4">Navbar</h1>
        <div>
          <ul className="flex space-x-4">
            <Link href="/">
              <li
                className={`${pathname === "/" ? "text-blue-600" : "text-white"}`}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`${pathname === "/about" ? "text-blue-600" : "text-white"}`}
              >
                About
              </li>
            </Link>
            <Link href="/about/profile">
              <li
                className={`${pathname === "/about/profile" ? "text-blue-600" : "text-white"}`}
              >
                Profile
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <button
          className="bg-white rounded-md px-3 py-1 text-sm font-medium cursor-pointer hover:bg-gray-200"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
