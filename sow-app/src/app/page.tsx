import Link from "next/link";
import { ArrowRight, Calculator, FileText, Settings } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            SOW Estimator
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Create accurate professional services estimates for consulting, training, and data migrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects/new"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Start New Estimate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <Calculator className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accurate Estimates</h3>
              <p className="text-muted-foreground">
                Generate precise estimates based on industry standards and your specific requirements.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
              <p className="text-muted-foreground">
                Export estimates in PDF and Excel formats for easy sharing and manipulation.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <Settings className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-muted-foreground">
                Tailor your estimates with custom rates, services, and pricing models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create your first professional services estimate in minutes.
          </p>
          <Link
            href="/projects/new"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Create New Estimate
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
