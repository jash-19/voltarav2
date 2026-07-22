import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Navigation */}
        <NavbarMenu />

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 lg:inline-flex"
        >
          Get Free Consultation
        </a>
      </div>
    </header>
  );
}