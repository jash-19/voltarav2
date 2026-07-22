export default function Trees() {
  return (
    <>
      {/* Left Tree */}
      <div className="absolute bottom-16 left-20 z-20">
        <div className="h-16 w-4 bg-amber-800 mx-auto"></div>
        <div className="h-20 w-20 rounded-full bg-green-700 -mt-2"></div>
      </div>

      {/* Right Tree */}
      <div className="absolute bottom-16 right-24 z-20">
        <div className="h-16 w-4 bg-amber-800 mx-auto"></div>
        <div className="h-24 w-24 rounded-full bg-green-700 -mt-2"></div>
      </div>
    </>
  );
}