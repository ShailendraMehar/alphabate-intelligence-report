import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface KpiCardProps {
  title: string;
  value: string;
  trend: number;
  label: string;
  icon: LucideIcon;
}
export function KpiCard({ title, value, trend, label, icon: Icon }: KpiCardProps) {
  const isPositive = trend >= 0;
  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border-none shadow-soft bg-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </CardTitle>
          <div className="p-2 bg-primary/5 rounded-lg">
            <Icon className="h-4 w-4 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold tracking-tight">{value}</div>
          <div className="flex items-center mt-2">
            <span
              className={cn(
                "flex items-center text-xs font-semibold px-1.5 py-0.5 rounded-full mr-2",
                isPositive ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10" : "text-rose-600 bg-rose-50 dark:bg-rose-500/10"
              )}
            >
              {isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
              {Math.abs(trend)}%
            </span>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}