import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Sparkles, Zap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
const INSIGHTS = [
  { text: "Gemini AI adoption across Search is driving a 15% increase in user retention for Q4 2025.", icon: Sparkles },
  { text: "Cloud services revenue hit a critical inflection point as SME transition to AI-native infrastructure accelerates.", icon: Zap },
  { text: "YouTube's 'AI Creative Suite' reduced content production friction, resulting in 2.5x growth in Shorts engagement.", icon: BrainCircuit },
];
export function AiInsightsPanel() {
  return (
    <Card className="h-full border-none shadow-soft overflow-hidden">
      <CardHeader className="pb-3 border-b border-border/50 bg-muted/30">
        <CardTitle className="text-lg flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-primary" />
          AI Intelligence Hub
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {INSIGHTS.map((insight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="flex gap-4 group"
            >
              <div className="mt-1">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <insight.icon className="h-4 w-4" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                  {insight.text}
                </p>
                <div className="mt-2 flex items-center text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  EXPLORE DATA <ChevronRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-primary uppercase">Risk Analysis</span>
            <span className="text-[10px] px-1.5 py-0.5 bg-primary/10 rounded">LOW</span>
          </div>
          <p className="text-xs text-muted-foreground italic">
            "Market sentiment remains bullish on Alphabet's hardware integration for 2025."
          </p>
        </div>
      </CardContent>
    </Card>
  );
}