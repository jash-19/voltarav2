export default function NavbarLogo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
        V
      </div>

      <div className="leading-tight">
        <h1 className="text-lg font-bold text-gray-900">
          Voltara
        </h1>

        <p className="text-xs tracking-wide text-gray-500">
          Energy Solutions
        </p>
      </div>
    </a>
  );
}