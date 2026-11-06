import capSvg from '@documenso/assets/images/illustration/cap.svg';
import v73Svg from '@documenso/assets/images/illustration/v73.svg';
import v77Svg from '@documenso/assets/images/illustration/v77.svg';
import v1238Svg from '@documenso/assets/images/illustration/v1238.svg';
import v1277Svg from '@documenso/assets/images/illustration/v1277.svg';
import v1281Svg from '@documenso/assets/images/illustration/v1281.svg';
import v1282Svg from '@documenso/assets/images/illustration/v1282.svg';
import { cn } from '@documenso/ui/lib/utils';
import type { CSSProperties } from 'react';

/**
 * Runline brand illustration: the isometric "Managed services" piece from the Runline brand
 * exploration. The vectors sit at their exact positions in the original 739x436 frame, expressed
 * as percentages so the art scales with its container.
 *
 * The art sits on a white plate with a hairline border, as in the brand showcase, so the clipped
 * edges of the larger planes read as a frame rather than a cut.
 *
 * Motion follows the brand showcase: the node lifts, its footprint glows and a light sweeps the
 * gradient. Only the art moves, and it holds still under prefers-reduced-motion (see app.css).
 */
const FRAME_WIDTH = 739;
const FRAME_HEIGHT = 436;

const place = (left: number, top: number, width: number, height: number): CSSProperties => ({
  left: `${(left / FRAME_WIDTH) * 100}%`,
  top: `${(top / FRAME_HEIGHT) * 100}%`,
  width: `${(width / FRAME_WIDTH) * 100}%`,
  height: `${(height / FRAME_HEIGHT) * 100}%`,
});

// Dashed lift lines between the node and its footprint, in frame coordinates.
const LIFT_LINES = [
  { x: 166.23, y1: 246.2, y2: 305.43 },
  { x: 288.08, y1: 246.2, y2: 305.43 },
  { x: 190.66, y1: 276.12, y2: 303.5 },
  { x: 264.12, y1: 276.12, y2: 303.5 },
  { x: 227.48, y1: 283.99, y2: 342.22 },
];

export type RunlineIllustrationProps = {
  className?: string;
};

export const RunlineIllustration = ({ className }: RunlineIllustrationProps) => {
  return (
    <div
      className={cn(
        'runline-illustration relative aspect-[739/436] overflow-hidden border border-border bg-white',
        className,
      )}
      aria-hidden="true"
    >
      <img src={v1281Svg} alt="" className="absolute max-w-none" style={place(244.23, -162.61, 635.62, 808.25)} />
      <img src={v1238Svg} alt="" className="absolute max-w-none" style={place(85.9, -41.43, 625.82, 454.46)} />
      <img src={v73Svg} alt="" className="absolute max-w-none" style={place(166.56, 265.19, 121.84, 77.03)} />
      <img src={v1277Svg} alt="" className="absolute max-w-none" style={place(91.98, 314.5, 37.39, 35.47)} />
      <img src={v1282Svg} alt="" className="absolute max-w-none" style={place(253.97, 23.8, 37.39, 35.47)} />
      <img src={v1282Svg} alt="" className="absolute max-w-none" style={place(301.97, 50.65, 37.39, 35.47)} />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${FRAME_WIDTH} ${FRAME_HEIGHT}`}
        fill="none"
        stroke="#000"
        strokeWidth={1}
        strokeDasharray="3 3"
        opacity={0.5}
      >
        {LIFT_LINES.map((line) => (
          <line key={line.x} x1={line.x} y1={line.y1} x2={line.x} y2={line.y2} vectorEffect="non-scaling-stroke" />
        ))}
      </svg>

      <div className="runline-illustration-glow absolute z-[6]" style={place(150, 238, 200, 120)} />

      <img
        src={v77Svg}
        alt=""
        className="runline-illustration-lift absolute z-[7] max-w-none"
        style={place(166.56, 192.65, 121.84, 91.34)}
      />

      <div className="runline-illustration-lift absolute z-[8]" style={place(183, 195, 90, 90)}>
        <img src={capSvg} alt="" className="runline-illustration-cap absolute max-w-none" />
      </div>

      <div className="runline-illustration-sweep" />
    </div>
  );
};
