import authArt from '@documenso/assets/images/runline-auth-art.webp';
import { Outlet } from 'react-router';

import { BrandingLogo } from '~/components/general/branding-logo';
import { PublicLegalLinks } from '~/components/general/public-legal-links';
import { SourceAttribution } from '~/components/general/source-attribution';

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      {/*
        Brand panel (desktop): the "made of code" ASCII-of-people texture from Runline's design
        system, one texture per surface. White lockup on black, per the identity rules.
      */}
      <aside className="relative hidden w-[42%] max-w-[760px] shrink-0 overflow-hidden bg-[#0a0a0b] lg:block">
        <img
          src={authArt}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <a
          href="https://runlineai.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Runline"
          className="absolute top-10 left-10"
        >
          <BrandingLogo className="h-7 w-auto text-white" />
        </a>
      </aside>

      <main className="relative flex flex-1 flex-col items-center justify-between overflow-hidden px-4 py-12 md:p-12">
        <div className="flex w-full flex-1 flex-col items-center justify-center">
          <BrandingLogo className="mb-10 h-8 w-auto text-foreground lg:hidden" />

          <div className="relative flex w-full items-center justify-center">
            <Outlet />
          </div>
        </div>

        <footer className="z-10 mt-8 w-full">
          <PublicLegalLinks />
          <SourceAttribution className="mt-4" />
        </footer>
      </main>
    </div>
  );
}
