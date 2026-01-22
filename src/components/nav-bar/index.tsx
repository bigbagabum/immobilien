import Link from "next/link";

const links = [
  { href: "/about", text: "Learn about us" },
  { href: "/career", text: "Career" },
  { href: "/learning-grid", text: "Grids" },
  { href: "/help", text: "FAQ" },
  { href: "/users", text: "Users" },
];

const generalLinks = links.map(({ href, text }) => (
  <Link key={href} href={href} className="text-blue-700 hover:text-amber-600">
    {text}
  </Link>
));

export default function NavBar() {
  return (
    <nav className="w-full flex justify-center gap-2 my-4">{generalLinks}</nav>
  );
}