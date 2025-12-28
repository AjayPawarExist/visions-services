import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-background">
      <h2 className="text-4xl font-semibold text-foreground mb-4">404 – Not Found</h2>

      <p className="text-muted-foreground mb-6">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
