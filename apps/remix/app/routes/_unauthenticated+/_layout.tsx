import agreementPhoto from '@documenso/assets/images/runline-key-visual-agreement.webp';
import reviewPhoto from '@documenso/assets/images/runline-key-visual-review.webp';
import { Trans } from '@lingui/react/macro';
import { Outlet } from 'react-router';

import { BrandingLogo } from '~/components/general/branding-logo';
import { PublicLegalLinks } from '~/components/general/public-legal-links';
import { SourceAttribution } from '~/components/general/source-attribution';

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      {/*
        Brand panel (xl and up, where the form column always has room for the auth pages'
        max-w-lg cards): Runline's key visual in the warm register (brand DOS #8). A gradient
        block with the dash pattern raining through, warm grained photography, the headline and
        the white lockup. Corners stay square (DOS #2). Styles live in app.css.
      */}
      <aside className="runline-key-visual relative hidden w-[42%] max-w-[760px] shrink-0 overflow-hidden xl:block">
        <div className="runline-key-visual-dashes" aria-hidden="true" />

        <img
          src={reviewPhoto}
          alt=""
          aria-hidden="true"
          className="runline-key-visual-photo runline-key-visual-photo-top"
        />
        <img
          src={agreementPhoto}
          alt=""
          aria-hidden="true"
          className="runline-key-visual-photo runline-key-visual-photo-bottom"
        />

        <div className="absolute top-12 left-12">
          <p className="runline-key-visual-title">
            <Trans>
              Put it
              <br />
              in writing.
            </Trans>
          </p>

          <a
            href="https://runlineai.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Runline"
            className="mt-8 inline-block"
          >
            <BrandingLogo className="h-7 w-auto text-white" />
          </a>
        </div>
      </aside>

      <main className="relative flex flex-1 flex-col items-center justify-between overflow-hidden px-4 py-12 md:p-12">
        <div className="flex w-full flex-1 flex-col items-center justify-center">
          <BrandingLogo className="mb-10 h-8 w-auto text-foreground xl:hidden" />

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
