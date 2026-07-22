import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="flex h-screen items-center justify-center">
          <h1 className="text-5xl font-bold">
            Welcome to Voltara Energy Solutions
          </h1>
        </section>
      </main>
    </>
  );
}