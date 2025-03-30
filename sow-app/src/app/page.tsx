import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <h1 className="text-4xl font-bold mb-4">Welcome to SOW Estimator</h1>
      <p className="text-lg text-muted-foreground text-center max-w-2xl">
        Create accurate professional services estimates for consulting, training, and data migrations.
      </p>
    </div>
  );
}
