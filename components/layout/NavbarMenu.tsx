import { navigationLinks } from "@/constants/navigation";

export default function NavbarMenu() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigationLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="group relative text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-green-600"
        >
          {link.name}

          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </nav>
  );
}