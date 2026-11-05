import { cn } from '@documenso/ui/lib/utils';

export type SourceAttributionProps = {
  className?: string;
};

/**
 * Runline Sign is a modified Documenso (AGPL-3.0). Section 13 of the AGPL requires offering the
 * Corresponding Source to everyone who uses it over a network, so every layout links the source we run.
 */
export const SourceAttribution = ({ className }: SourceAttributionProps) => {
  return (
    <p className={cn('text-center text-muted-foreground text-xs', className)}>
      Runline Sign is built on{' '}
      <a
        href="https://github.com/documenso/documenso"
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-4 hover:text-foreground"
      >
        Documenso
      </a>{' '}
      (AGPL-3.0) ·{' '}
      <a
        href="https://github.com/Runline-AI/sign-service"
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-4 hover:text-foreground"
      >
        Source
      </a>
    </p>
  );
};
