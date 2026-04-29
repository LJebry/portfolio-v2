import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 space-y-12">
      <div className="text-center space-y-4">
        <p className="text-label text-primary">Established 2026</p>
        <h1 className="text-display break-words">Cafe Racer</h1>
        <p className="max-w-md mx-auto text-secondary">
          A high-performance portfolio foundation built with Next.js 16+, Tailwind CSS 4, and the industrial aesthetic of a cafe racer motorcycle.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="rounded-md">
          Get Started
        </Button>
        <Button variant="outline" size="lg" className="rounded-md">
          View Projects
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl pt-12">
        {["Speed", "Precision", "Style"].map((feature) => (
          <div key={feature} className="p-8 border border-border bg-card rounded-lg space-y-2">
            <h2 className="text-xl font-semibold text-primary">{feature}</h2>
            <p className="text-secondary text-sm">
              Engineered for maximum performance and minimalist aesthetics.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
