export default function Sky() {
  return (
    <div className="absolute inset-0">

      {/* Morning Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-green-50" />

      {/* Horizon Glow */}
      <div className="absolute bottom-0 h-80 w-full bg-gradient-to-t from-yellow-100/60 to-transparent" />

    </div>
  );
}