import { Mail, Linkedin, Github } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "jeyagurubalaji@email.com",
    href: "mailto:jeyagurubalaji@email.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/jeyagurubalaji2706/?isSelfProfile=true",
    href: "https://www.linkedin.com/in/jeyagurubalaji2706/?isSelfProfile=true",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "https://github.com/jeyagurubalaji",
    href: "https://github.com/jeyagurubalaji",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-mono tracking-widest uppercase text-primary">
          Contact
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          {"Let's connect"}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {"If you'd like to discuss a project, collaboration, or just say hi, feel free to reach out."}
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <link.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground">
                  {link.label}
                </h3>
                <p className="mt-1 truncate text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
