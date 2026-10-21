import { Code2, Database, BarChart3, Globe, Smartphone, Cpu } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "Java", "C"],
  },
  {
    icon: Database,
    title: "Data & Databases",
    skills: ["SQL", "MongoDB"],
  },
  {
    icon: BarChart3,
    title: "Data Science",
    skills: ["NumPy", "Pandas", "Scikit-learn"],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    skills: ["Dart", "Express"],
  },
  {
    icon: Cpu,
    title: "Others",
    skills: ["Data Structure & Algorithm"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-mono tracking-widest uppercase text-primary">
          Skills
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Technologies & tools I work with
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A growing toolkit spanning programming, data science, and web
          development, continuously expanding through projects and coursework.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <category.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}