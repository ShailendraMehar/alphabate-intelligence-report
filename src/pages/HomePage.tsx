import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from '@/components/ThemeToggle';
import { KpiCard } from '@/components/dashboard/KpiCard';
import { RevenueAreaChart } from '@/components/dashboard/RevenueAreaChart';
import { SegmentDonutChart } from '@/components/dashboard/SegmentDonutChart';
import { GraphIntelligence } from '@/components/dashboard/GraphIntelligence';
import { AiInsightsPanel } from '@/components/dashboard/AiInsightsPanel';
import { KPIS } from '@/lib/report-data';
import { 
  BarChart3, 
  Activity, 
  Globe, 
  Search, 
  Cloud, 
  Youtube, 
  Zap, 
  FileText,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-primary">
                  <Activity className="text-primary-foreground h-6 w-6" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight">Intelligence Report</h1>
              </div>
              <p className="text-muted-foreground flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Alphabet Inc. • 2025 Predictive Business Analytics
              </p>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle className="relative top-0 right-0" />
              <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
                <FileText className="h-4 w-4" />
                Whitepaper
              </Button>
              <Button size="sm" className="gap-2 shadow-primary">
                <Download className="h-4 w-4" />
                Export PDF
              </Button>
            </div>
          </header>
          <Tabs defaultValue="overview" className="space-y-8">
            <div className="flex items-center justify-between border-b border-border/60 pb-1">
              <TabsList className="bg-transparent h-auto p-0 gap-8">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 text-sm font-semibold transition-all"
                >
                  Executive Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="segments" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 text-sm font-semibold transition-all"
                >
                  Segment Deep Dive
                </TabsTrigger>
                <TabsTrigger 
                  value="intelligence" 
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 text-sm font-semibold transition-all"
                >
                  Graph Intelligence
                </TabsTrigger>
              </TabsList>
              <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-muted-foreground/60 tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Forecast Engine
              </div>
            </div>
            <TabsContent value="overview" className="space-y-8 focus-visible:outline-none">
              {/* KPI Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {KPIS.map((kpi, idx) => {
                  const icons = [BarChart3, Cloud, Zap, Activity];
                  return (
                    <KpiCard 
                      key={idx} 
                      title={kpi.title} 
                      value={kpi.value} 
                      trend={kpi.trend} 
                      label={kpi.label}
                      icon={icons[idx % icons.length]}
                    />
                  );
                })}
              </div>
              {/* Main Visualization Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                  <div className="bg-card rounded-3xl p-6 shadow-soft border-none">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold">Revenue Trajectory</h3>
                        <p className="text-sm text-muted-foreground">Projected growth across core segments for FY 2025</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 px-3 rounded-full text-xs font-bold bg-muted">MONTHLY</Button>
                        <Button variant="ghost" size="sm" className="h-8 px-3 rounded-full text-xs font-bold">QUARTERLY</Button>
                      </div>
                    </div>
                    <RevenueAreaChart />
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <AiInsightsPanel />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="segments" className="space-y-8 focus-visible:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-card rounded-3xl p-8 shadow-soft border-none flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2">Revenue Distribution</h3>
                  <p className="text-muted-foreground mb-8">Segment-wise contribution to the 2025 Alphabet ecosystem.</p>
                  <SegmentDonutChart />
                </div>
                <div className="space-y-6">
                  {[
                    { name: 'Google Search', icon: Search, growth: '+12%', color: 'text-[#4285F4]' },
                    { name: 'Google Cloud', icon: Cloud, growth: '+28%', color: 'text-[#34A853]' },
                    { name: 'YouTube Ads', icon: Youtube, growth: '+18%', color: 'text-[#EA4335]' },
                    { name: 'AI & Other Bets', icon: Zap, growth: '+145%', color: 'text-[#FBBC05]' }
                  ].map((seg, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-card rounded-2xl shadow-sm border border-border/30 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-muted ${seg.color}`}>
                          <seg.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-bold">{seg.name}</h4>
                          <p className="text-sm text-muted-foreground">Projected 2025 Lead</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${seg.color}`}>{seg.growth}</div>
                        <div className="text-[10px] font-bold text-muted-foreground">EST. GROWTH</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="intelligence" className="focus-visible:outline-none">
              <GraphIntelligence />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Toaster richColors position="bottom-right" />
    </div>
  );
}