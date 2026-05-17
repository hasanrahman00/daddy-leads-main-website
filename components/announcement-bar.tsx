import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <a
      href="/#features"
      className="group block bg-gradient-to-r from-[color:var(--color-gold)] via-[color:var(--color-gold-2)] to-[color:var(--color-gold)] text-[color:var(--color-black)]"
    >
      <div className="container-x flex items-center justify-center gap-2 py-2 text-xs sm:text-sm">
        <span className="font-medium">
          Now offering verified Apollo lead exports from $0.04 per contact.
        </span>
        <span className="hidden sm:inline opacity-90 group-hover:opacity-100 inline-flex items-center gap-1">
          Check it out
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}
