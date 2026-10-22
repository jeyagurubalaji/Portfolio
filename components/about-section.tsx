import { GraduationCap, Brain, Code2, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Computer Science Engineering student at Government College of Engineering-Bodinayakanur.",
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    description:
      "Experienced in designing and building scalable full-stack web and mobile applications using Java, Spring Boot, React.js, Flutter,Express js and MongoDB with secure RESTful APIs.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Specializing in Natural Language Processing (NLP), semantic vector matching, model explainability (SHAP), and real-time inference pipelines using Python, scikit-learn, XGBoost, and FastAPI.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Passionate about solving real-world problems using data and building impactful solutions.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-mono tracking-widest uppercase text-primary">
          About Me
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Building the future with data
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          I am a dedicated Computer Science student with a deep curiosity for
          how data can transform decision-making. My journey spans from
          foundational programming to machine learning, always driven by the
          goal of creating meaningful, data-powered solutions.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
