import { ExternalLink, Github, Download } from "lucide-react"

const projects = [
  {
    title: "FarukFashion-Website",
    description:
      "Developed a high-performance e-commerce web application featuring dynamic product catalogs, secure Google OAuth authentication, and a comprehensive administrative management dashboard.",
    tags: ["SpringBoot", "React", "MongoDB"],
    githubUrl: "https://github.com/jeyagurubalaji/FarukFashion-E-Commerce-Website",
    liveUrl: "https://farukfashion.vercel.app",
  },
  {
    title: "FarukFashion-Mobile App",
    description:
      "Built a cross-platform Flutter mobile application equipped with seamless native Google Sign-In, Razorpay payment processing, and an optimized mobile shopping interface.",
    tags: ["Dart", "Express", "MongoDB"],
    githubUrl: "https://github.com/jeyagurubalaji/FarukFashion-E-Commerce-App",
    liveUrl: "https://farukfashion-app.vercel.app",
    apkUrl: "/FarukFashion.apk", // Points directly to public/FarukFashion.apk
  },
  {
    title: "Campus Cleaning – Duty Management & Verification System",
    description:
      "Role-based system for Admin duty assignment, Sweeper task completion, and Invigilator verification or rejection of classroom and laboratory cleaning with full digital tracking.",
    tags: ["Dart", "Express", "MongoDB"],
    githubUrl: "https://github.com/jeyagurubalaji/CampusCleaning-DutyManagementApp",
    liveUrl: "https://campuscleaning.vercel.app",
    apkUrl: "/CampusCleaning.apk", // Points directly to public/CampusCleaning.apk
  },
  {
    title: "MovieTime – Movie Discovery & Recommendation Hub",
    description:
      "Built a feature-packed cinema discovery platform delivering real-time trending updates, custom watchlist libraries, interactive games, and seamless multi-language accessibility.",
    tags: ["React", "MongoDB", "SpringBoot"],
    githubUrl: "https://github.com/jeyagurubalaji/MovieTime-MovieRecommendationHub",
    liveUrl: "https://movietimehub.vercel.app",
  },
  {
    title: "True Detective – FakeNewsDetector",
    description:
      "A multi-modal fact-checking engine supporting real-time news claim verification, live web search corroboration, automated OCR image and video frame analysis, clickbait sensationalism metering, Developed SHAP-style model explainability dashboards displaying top token weights alongside downloadable PDF audit reporting.",
    tags: ["Python", "Scikit-learn", "Streamlit", "PyTesseract"],
    githubUrl: "https://github.com/jeyagurubalaji/TrueDetective-FakeNewsDetector",
    liveUrl: "https://truedetective.streamlit.app",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-mono tracking-widest uppercase text-primary">
          Projects
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Selected work
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Hands-on projects showcasing skills in full stack, machine learning,
          and software engineering.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
                {project.apkUrl && (
                  <a
                    href={project.apkUrl}
                    download
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`Download APK for ${project.title}`}
                  >
                    <Download className="h-4 w-4" />
                    APK
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}