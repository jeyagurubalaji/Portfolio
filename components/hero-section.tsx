import { ArrowDown, Send, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 text-center pt-20">
      {/* Subtitle Badge */}
      <span className="mb-4 text-xs font-semibold tracking-widest text-primary uppercase">
        ASPIRING FULL-STACK & AI ENGINEER
      </span>

      {/* Main Title */}
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl break-words text-balance max-w-full">
        Jeyagurubalaji
      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed text-balance">
        Innovative Full-Stack & AI Engineer skilled in building modern web interfaces, high-throughput backends, and customized machine
        learning workflows. Adept at transforming complex requirements into reliable, production-ready software across web and mobile
        platforms.
      </p>

      {/* Action Buttons Section */}
      <div className="mt-10 flex flex-col items-center gap-4 w-full max-w-xs sm:max-w-none">
        {/* Top Row: View Projects & Contact Me */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 w-full sm:w-auto"
          >
            <ArrowDown className="h-4 w-4" />
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary w-full sm:w-auto"
          >
            <Send className="h-4 w-4" />
            Contact Me
          </a>
        </div>

        {/* Bottom Row: Download Resume Button */}
        <div className="w-full sm:w-auto">
          <a
            href="/Jeyagurubalaji_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/50 px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
          >
            <FileText className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}