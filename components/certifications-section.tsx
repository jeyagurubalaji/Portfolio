import { Award } from "lucide-react"

const certifications = [
  {
    title: "Industrial Internship",
    description:
      "Completed hands-on industrial development internship at Pumo Technovation India Pvt Ltd.",
  },
  {
    title: "Technical Workshop",
    description:
      "Participated in hands-on MERN Stack Development workshop at National Engineering College,Kovilpatti.",
  },
  {
    title: " IIT Madras: B.Sc. in Data Science and Programming (Online)",
    description:
      "Foundational Level completed currently pursuing Diploma Level.",
  },
  {
      title: "NPTEL Certification",
      description:
        "Successfully completed online certification course in Python for Data Science.",
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-mono tracking-widest uppercase text-primary">
          Certifications
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Continuous learning
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Committed to lifelong learning through structured programs and
          certifications.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
