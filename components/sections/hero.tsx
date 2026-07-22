import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Scene */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-20">
        <HeroContent />
      </div>

    </section>
  );
}