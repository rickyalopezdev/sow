import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  FolderKanban,
  FileText,
  BarChart3,
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back, here's an overview of your projects and estimates.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FolderKanban className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">Active Projects</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold">12</span>
            <div className="flex items-center gap-x-1 mt-1">
              <span className="text-xs text-emerald-500">+2.5%</span>
              <span className="text-xs text-muted-foreground">from last month</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">Team Members</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold">24</span>
            <div className="flex items-center gap-x-1 mt-1">
              <span className="text-xs text-emerald-500">+12%</span>
              <span className="text-xs text-muted-foreground">from last month</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">Estimates</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold">36</span>
            <div className="flex items-center gap-x-1 mt-1">
              <span className="text-xs text-emerald-500">+8.3%</span>
              <span className="text-xs text-muted-foreground">from last month</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BarChart3 className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">Revenue</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold">$48.2k</span>
            <div className="flex items-center gap-x-1 mt-1">
              <span className="text-xs text-emerald-500">+6.8%</span>
              <span className="text-xs text-muted-foreground">from last month</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Recent Projects</h3>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-x-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-medium">Project {i}</p>
                  <p className="text-xs text-muted-foreground">Updated 2h ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Recent Estimates</h3>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-x-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-medium">Estimate {i}</p>
                  <p className="text-xs text-muted-foreground">Created 1d ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
