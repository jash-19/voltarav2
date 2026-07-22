import Sky from "./Sky";
import Sun from "./Sun";
import Clouds from "./Clouds";
import Birds from "./Birds";
import Mountains from "./Mountains";
import WindTurbine from "./WindTurbine";
import Trees from "./Trees";
import House from "./House";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Sky />
      <Sun />
      <Clouds />
      <Mountains />
    </div>
  );
}