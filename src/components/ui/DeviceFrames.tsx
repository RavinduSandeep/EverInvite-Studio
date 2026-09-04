import { cn } from "@/lib/utils";

/**
 * A phone bezel. Children fill the screen area, so it works for a screenshot
 * and for a live preview alike.
 */
export function PhoneFrame({
  className,
  screenClassName,
  children,
}: {
  className?: string;
  screenClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2rem] border border-line bg-paper p-2 shadow-card",
        className,
      )}
    >
      {/* Earpiece detail, decorative only. */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-3.5 z-10 h-1 w-12 -translate-x-1/2 rounded-full bg-ink/10"
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.5rem] bg-cream",
          screenClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

/** A browser window, used for desktop screenshots and desktop previews. */
export function BrowserFrame({
  label,
  className,
  screenClassName,
  children,
}: {
  label?: string;
  className?: string;
  screenClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-paper shadow-card",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-cream/60 px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/12" />
        </span>
        {label ? (
          <span className="mx-auto max-w-[65%] truncate rounded-full bg-paper px-3 py-1 text-[11px] text-ink-muted">
            {label}
          </span>
        ) : null}
      </div>
      <div className={cn("relative bg-cream", screenClassName)}>{children}</div>
    </div>
  );
}
