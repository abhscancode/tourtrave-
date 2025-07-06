import Link from "next/link";
import { Mountain } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold text-primary">VoyageVerse</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} VoyageVerse. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:text-primary" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
