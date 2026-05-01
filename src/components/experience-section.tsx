import { ProjectCards } from "@/components/ui/animated-project-cards";

const experiences = [
  {
    id: "brooklyn-college",
    title: "BS Computer Science",
    pricePerHour: "Brooklyn College · GPA 3.5/4.0 · Dean's List",
    status: "Paid" as const,
    categories: [
      "Data Structures",
      "Algorithms",
      "Web Applications",
      "Computer Architecture",
    ],
    description:
      "Expected May 2026. Coursework includes Web Applications, Multimedia Computing, Computer Architecture, Data Structures and Algorithms, Object Oriented Programming, Discrete Mathematics, and Introduction to C++.",
    location: "Brooklyn, NY",
    timeAgo: "Expected May 2026",
    logoColor: "bg-accent",
    logoIcon: "BC",
  },
  {
    id: "sports-excitement",
    title: "Full Stack Developer",
    pricePerHour: "Sports Excitement · Sports social platform",
    status: "Not Paid" as const,
    categories: ["TypeScript", "React", "Next.js", "Tailwind CSS", "shadcn/ui", "Axios", "Zustand", "REST APIs", "Prisma ORM", "PostgreSQL"],
    description: [
      "Built and shipped features using Next.js and TypeScript, creating responsive UI components with Tailwind CSS and shadcn/ui",
      "Designed and integrated REST APIs with Prisma ORM and PostgreSQL, handling data modeling and backend communication",
      "Implemented secure JWT authentication flows and improved state management using Zustand for scalable frontend architecture",
    ],
    location: "Queens, NY",
    timeAgo: "Jun 2025 - Dec 2025",
    logoColor: "bg-background",
    logoIcon: "SE",
  },
  {
    id: "unadat",
    title: "Software Engineer Intern",
    pricePerHour: "Unadat · Chores management system",
    status: "Not Paid" as const,
    categories: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    description: [
      "Collaborated with development team to maintain and enhance the existing chores management system using HTML, CSS, JavaScript, PHP, and SQL, ensuring consistent functionality and resolving system issues to maintain optimal user experience.",
      "Implemented feature improvements to the chores tracking system through frontend and backend development, enhancing task assignment workflows and improving system reliability for end users.",
      "Contributed to system optimization by debugging code and adding new functionality to the chores platform, strengthening application performance and extending feature capabilities through full-stack development practices.",
    ],
    location: "Remote, NY",
    timeAgo: "Jun 2025 - Aug 2025",
    logoColor: "bg-background",
    logoIcon: "U",
  },
  {
    id: "deo-mwano",
    title: "Web Developer Intern",
    pricePerHour: "Deo Mwano Consultancy · Calendar application",
    status: "Not Paid" as const,
    categories: ["HTML", "CSS", "JavaScript", "Ruby on Rails", "Git"],
    description: [
      "Contributed on developing and launch of a calendar application using HTML, CSS, JavaScript, and Ruby on Rails.",
      "Collaborated with a team of developers, utilizing Git and GitHub for version control, resulting in a 30% reduction in deployment time and improved code quality through rigorous code reviews and unit testing.",
      "Conducted thorough debugging and troubleshooting, resolving 95% of reported issues within 48 hours and improving overall system reliability by 50%.",
    ],
    location: "Remote, NY",
    timeAgo: "Jun 2024 - Aug 2024",
    logoColor: "bg-background",
    logoIcon: "DM",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-14 sm:py-16 lg:py-20">
      <div className="mb-10 flex items-center gap-4">
        <p className="font-display text-sm uppercase tracking-[0.28em] text-accent">
          03 / Timeline
        </p>
        <div className="h-px w-24 bg-secondary/25" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
        <div>
          <h1 className="font-display text-5xl font-semibold uppercase leading-none text-foreground sm:text-6xl lg:text-7xl">
            Experience
            <span className="block text-accent">Log.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-9 text-secondary sm:text-2xl sm:leading-10">
            A compact view of the work, coursework, and product practice behind
            my full-stack development path.
          </p>
        </div>

        <div className="relative z-10 border border-secondary/25 bg-surface px-5 py-2">
          <ProjectCards projects={experiences} />
        </div>
      </div>
    </section>
  );
}
