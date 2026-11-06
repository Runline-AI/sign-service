import { Button } from '@documenso/ui/primitives/button';
import type { MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/react/macro';
import { ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

import { RunlineIllustration } from './runline-illustration';

type ErrorCodeMap = Record<
  number,
  { subHeading: MessageDescriptor; heading: MessageDescriptor; message: MessageDescriptor }
>;

export type GenericErrorLayoutProps = {
  children?: React.ReactNode;
  errorCode?: number;
  errorCodeMap?: ErrorCodeMap;
  /**
   * The primary button to display. If left as undefined, the default home link will be displayed.
   *
   * Set to null if you want no button.
   */
  primaryButton?: React.ReactNode | null;

  /**
   * The secondary button to display. If left as undefined, the default back button will be displayed.
   *
   * Set to null if you want no button.
   */
  secondaryButton?: React.ReactNode | null;
};

export const defaultErrorCodeMap: ErrorCodeMap = {
  404: {
    subHeading: msg`404`,
    heading: msg`This page isn't here`,
    message: msg`The link may be old, or the page may have moved. Check the address and try again.`,
  },
  500: {
    subHeading: msg`500`,
    heading: msg`Something broke on our end`,
    message: msg`Try again in a minute. If it keeps happening, contact the person who sent you the link.`,
  },
};

export const GenericErrorLayout = ({
  children,
  errorCode,
  errorCodeMap = defaultErrorCodeMap,
  primaryButton,
  secondaryButton,
}: GenericErrorLayoutProps) => {
  const navigate = useNavigate();
  const { _ } = useLingui();

  const { subHeading, heading, message } = errorCodeMap[errorCode || 500] ?? defaultErrorCodeMap[500];

  return (
    <div className="fixed inset-0 z-0 flex h-screen w-screen overflow-y-auto">
      <div className="m-auto flex w-full max-w-5xl flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row md:gap-16">
        <RunlineIllustration className="w-full max-w-sm md:max-w-md" />

        <div className="w-full max-w-md">
          <p className="font-semibold text-muted-foreground">{_(subHeading)}</p>

          <h1 className="mt-3 font-bold text-2xl md:text-3xl">{_(heading)}</h1>

          <p className="mt-4 text-muted-foreground text-sm">{_(message)}</p>

          <div className="mt-6 flex gap-x-2.5 gap-y-4 md:items-center">
            {secondaryButton ||
              (secondaryButton !== null && (
                <Button
                  variant="ghost"
                  className="w-32"
                  onClick={() => {
                    void navigate(-1);
                  }}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  <Trans>Go Back</Trans>
                </Button>
              ))}

            {primaryButton ||
              (primaryButton !== null && (
                <Button asChild>
                  <Link to={'/'}>
                    <Trans>Home</Trans>
                  </Link>
                </Button>
              ))}

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
