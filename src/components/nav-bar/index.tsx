import Link from "next/link";
import SignInSignOut from "../sign-in-sign-out";

const links = [
  { href: "/about", text: "Learn about us" },
  { href: "/career", text: "Career" },
  { href: "/learning-grid", text: "Grids" },
  { href: "/help", text: "FAQ" },
  { href: "/users", text: "Users" },
  { href: "/products", text: "Products" },
  { href: "/categories", text: "Categories" },
  { href: "/news", text: "News" },
  { href: "/reviews", text: "Reviews" },
  { href: "/login", text: "Sign In" },
  { href: "/profile", text: "Profile" },
  { href: "/todos/new", text: "Todo" },


];

const generalLinks = links.map(({ href, text }) => (
  <Link key={href} href={href} className="text-blue-700 hover:text-amber-600">
    {text}
  </Link>
));

export default function NavBar() {
  return (
    <nav className="w-full flex justify-center gap-2 my-4">{generalLinks}
    <SignInSignOut />
    </nav>
  );
}