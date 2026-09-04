import { cn } from "@/lib/utils";
import Container from "./Container";

type Tone = "ivory" | "cream" | "paper";

const tones: Record<Tone, string> = {
  ivory: "bg-ivory",
  cream: "bg-cream",
  paper: "bg-paper",
};

/**
 * Vertical rhythm is a prop rather than a class override: a padding utility
 * passed in through `className` loses to the responsive variants below, which
 * are generated later in the stylesheet.
 */
type Spacing = "default" | "topNone";

const spacings: Record<Spacing, string> = {
  default: "py-16 sm:py-20 lg:py-24",
  topNone: "pb-16 sm:pb-20 lg:pb-24",
};

export function Section({
  id,
  tone = "ivory",
  spacing = "default",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  spacing?: Spacing;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(spacings[spacing], tones[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <Tag className="text-balance text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          {description}
        </p>
      ) : null}
    </div>
  );
}
