import MobileMenu from "./MobileMenu";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <NavbarLogo />

        <NavbarMenu />

        <div className="flex items-center gap-4">

          <a
            href="#contact"
            className="hidden rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/30 lg:inline-flex"
          >
            Get Free Consultation
          </a>

          <MobileMenu />

        </div>

      </div>
    </header>
  );
}