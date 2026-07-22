import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-gray-100 lg:hidden"
      aria-label="Open navigation menu"
    >
      <Menu size={24} />
    </button>
  );
}