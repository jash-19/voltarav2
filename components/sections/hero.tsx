export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 via-white to-green-50">

      {/* Background will be added later */}

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
          Clean Energy • Smart Investment
        </p>

        <h1 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
          Power Your Future
          <br />
          With Solar Energy
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
          Premium solar solutions for homes and businesses.
          Save on electricity bills while building a cleaner future.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="#contact"
            className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            Get Free Consultation
          </a>

          <a
            href="#calculator"
            className="rounded-full border border-gray-300 px-8 py-4 font-semibold transition hover:border-green-600 hover:text-green-600"
          >
            Calculate Savings
          </a>

        </div>

      </div>

    </section>
  );
}