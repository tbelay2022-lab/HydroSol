/**
 * Living wave transition at the bottom of hero sections — two seamlessly
 * tiling water lines drifting at different speeds, echoing the droplet.
 * The front shoreline is white (the background of the section below);
 * the mirrored back swell adds depth. Both pause under reduced motion.
 */
export function HeroWaves({
  tint = false,
}: {
  /** Fill the front shoreline with the light-gray section color instead of white. */
  tint?: boolean;
}) {
  const fill = tint ? "#f7fafc" : "#ffffff";
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden>
      <div className="relative h-[56px] overflow-hidden sm:h-[88px]">
        {/* back swell — mirrored, translucent, slow */}
        <div className="animate-wave-slow motion-reduce:animate-none absolute bottom-0 left-0 h-full w-[200%]">
          <svg
            viewBox="0 0 2880 140"
            preserveAspectRatio="none"
            className="h-full w-full -scale-x-100"
          >
            <path
              d="M0,58 Q360,118 720,58 T1440,58 T2160,58 T2880,58 L2880,140 L0,140 Z"
              fill="rgba(255,255,255,0.5)"
            />
          </svg>
        </div>
        {/* front shoreline — white, with a faint blue crest line */}
        <div className="animate-wave motion-reduce:animate-none absolute bottom-0 left-0 h-full w-[200%]">
          <svg
            viewBox="0 0 2880 140"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0,76 Q360,130 720,76 T1440,76 T2160,76 T2880,76 L2880,140 L0,140 Z"
              fill={fill}
            />
            <path
              d="M0,76 Q360,130 720,76 T1440,76 T2160,76 T2880,76"
              fill="none"
              stroke="rgba(15,95,168,0.12)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
