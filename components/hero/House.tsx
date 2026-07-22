export default function House() {
  return (
    <div className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2">
      {/* Roof */}
      <div
        className="mx-auto h-0 w-0
        border-l-[90px] border-r-[90px]
        border-b-[60px]
        border-l-transparent
        border-r-transparent
        border-b-red-700"
      />

      {/* House */}
      <div className="h-40 w-44 rounded-b-lg border-2 border-gray-300 bg-white shadow-xl">
        <div className="mx-auto mt-8 h-16 w-14 rounded bg-blue-200"></div>
      </div>
    </div>
  );
}