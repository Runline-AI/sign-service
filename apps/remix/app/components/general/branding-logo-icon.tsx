import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

// Runline arch mark: runline-context company/branding/fiona-exploration/assets/runline-mark-ink.svg (square viewBox)
export const BrandingLogoIcon = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.479 15.9543 15.9543" {...props}>
      <g fill="currentColor">
        <path d="M15.9543 14.9963H14.1409V8.14426C14.1409 4.65386 11.3756 1.81494 7.97717 1.81494C4.57875 1.81494 1.8134 4.65386 1.8134 8.14426V14.9963H0V8.14426C0 3.65442 3.5793 0 7.97717 0C12.375 0 15.9543 3.65288 15.9543 8.14426V14.9963Z" />
        <path d="M5.32664 14.9963H3.51323V8.00019C3.51323 5.5399 5.51519 3.53794 7.97548 3.53794C10.4358 3.53794 12.4377 5.5399 12.4377 8.00019V9.96842H10.6243V8.00019C10.6243 6.53934 9.43632 5.35135 7.97548 5.35135C6.51463 5.35135 5.32664 6.53934 5.32664 8.00019V14.9963Z" />
        <path d="M12.4393 14.9963H10.6259C10.6259 13.5354 9.43788 12.3474 7.97703 12.3474H7.06956V8.10591H8.88297V10.626C10.911 11.046 12.4393 12.8456 12.4393 14.9963Z" />
      </g>
    </svg>
  );
};
