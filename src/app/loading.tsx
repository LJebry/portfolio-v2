import { GooeyLoader } from "@/components/ui/loader-10";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <GooeyLoader
        primaryColor="#c42e2e"
        secondaryColor="#e8e4db"
        borderColor="#9b968c"
      />
    </main>
  );
}
