import { ReactNode } from 'react';
import Link from 'next/link';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              SOW Estimator
            </Link>
            <div className="space-x-4">
              <Link href="/projects" className="hover:text-primary">
                Projects
              </Link>
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
              <Link href="/pricing" className="hover:text-primary">
                Pricing
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
} 