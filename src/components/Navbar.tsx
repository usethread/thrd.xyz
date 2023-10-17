import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link href={"/"} className="p-2 bg-zinc-800 rounded-full">
          STRAFE.CHAT
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/login"}>Login</Link>
      </div>
    </nav>
  );
}
