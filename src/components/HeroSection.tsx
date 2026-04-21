import { ArrowRight, BadgeCheck } from "lucide-react";
import "@google/model-viewer";

const highlights = [
  "Fabricator-ready deliverables",
  "Tablet-friendly coordination flow",
  "Fast review cycles for US teams",
];

export default function HeroSection() {
  const textHeroKicker = "US Steel Detailing Delivery";
  const textHeroHeading = "Precision Steel Detailing. AISC Compliant. US Standards.";
  const textHeroBody = `Sembada supports fabricators, detailers, and general contractors with coordinated models, clear shop packages, and field-aware deliverables that reduce downstream rework.`;
  const steelStairsModel = new URL("../assets/steel_stairs__fire_escapes.gltf", import.meta.url).href;
  const steelStairsCameraTarget = "-1925m 2340m -16630m";
  const steelStairsCameraOrbit = "-35deg 72deg 14000m";
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-hero-grid bg-[size:44px_44px] opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,32,0.92)_20%,rgba(26,54,93,0.72)_52%,rgba(15,23,32,0.82)_100%)]" />

      <div className="section-shell relative grid gap-10 py-14 md:py-20 xl:grid-cols-[1.1fr_0.9fr] xl:items-center xl:py-24">
        <div className="order-2 xl:order-1">
          <p className="section-kicker">{textHeroKicker}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl xl:text-6xl">
            {textHeroHeading}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {textHeroBody}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="button-primary"
            >
              Request Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              className="button-secondary"
            >
              View Portfolio
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="panel px-4 py-4">
                <BadgeCheck className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 xl:order-2">
          <div className="relative h-[500px] sm:h-[560px] xl:h-[620px]">
            <model-viewer
              src={steelStairsModel}
              alt="3D model of structural steel stairs and fire escapes"
              camera-controls
              auto-rotate
              camera-target={steelStairsCameraTarget}
              camera-orbit={steelStairsCameraOrbit}
              field-of-view="22deg"
              rotation-per-second="18deg"
              shadow-intensity="1"
              exposure="1.1"
              environment-image="neutral"
              interaction-prompt="none"
              touch-action="pan-y"
              className="h-full w-full bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
