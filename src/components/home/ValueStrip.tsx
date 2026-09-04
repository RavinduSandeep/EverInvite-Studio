import { CalendarCheck, Palette, Share2, Smartphone, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";

const values = [
  { label: "Mobile friendly", Icon: Smartphone },
  { label: "Easy to share", Icon: Share2 },
  { label: "Personalised design", Icon: Palette },
  { label: "Interactive RSVP", Icon: CalendarCheck },
  { label: "Opens in one tap", Icon: Sparkles },
];

export default function ValueStrip() {
  return (
    <section className="border-y border-line bg-cream py-6">
      <Container>
        <h2 className="sr-only">What every invitation includes</h2>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
          {values.map(({ label, Icon }) => (
            <li key={label} className="flex items-center gap-2.5">
              <Icon className="h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
              <span className="text-sm text-ink-soft">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
