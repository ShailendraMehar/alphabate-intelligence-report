import React from 'react';
import { motion } from 'framer-motion';
import { GRAPH_NODES, GRAPH_LINKS } from '@/lib/report-data';
import { Badge } from '@/components/ui/badge';
export function GraphIntelligence() {
  return (
    <div className="relative w-full h-[600px] bg-slate-50 dark:bg-black/20 rounded-3xl overflow-hidden border border-border/50">
      <div className="absolute top-6 left-6 z-10">
        <h3 className="text-xl font-semibold mb-1">Intelligence Nexus</h3>
        <p className="text-sm text-muted-foreground">Mapping Alphabet's 2025 AI Integration flows</p>
      </div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {GRAPH_LINKS.map((link, idx) => {
          const fromNode = GRAPH_NODES.find(n => n.id === link.from);
          const toNode = GRAPH_NODES.find(n => n.id === link.to);
          if (!fromNode || !toNode) return null;
          return (
            <motion.line
              key={`${link.from}-${link.to}`}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="currentColor"
              className="text-primary/20"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: idx * 0.2 }}
            />
          );
        })}
      </svg>
      {GRAPH_NODES.map((node) => (
        <motion.div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <div className="group relative flex flex-col items-center">
            {node.type === 'core' && (
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
            )}
            <div className={`
              w-12 h-12 rounded-2xl flex items-center justify-center z-10 transition-all duration-300
              ${node.type === 'core' 
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/40 scale-125' 
                : 'bg-card border border-border shadow-soft group-hover:border-primary/50'}
            `}>
              <div className={`w-3 h-3 rounded-full ${node.type === 'core' ? 'bg-white' : 'bg-primary/60'}`} />
            </div>
            <div className="mt-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border shadow-sm">
              <span className="text-xs font-semibold whitespace-nowrap">{node.label}</span>
            </div>
            {node.type === 'core' && (
              <Badge variant="outline" className="mt-2 bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-[10px]">
                Active Engine
              </Badge>
            )}
          </div>
        </motion.div>
      ))}
      <div className="absolute bottom-6 right-6 flex gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-muted-foreground">Central Core</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-border border border-primary/40" />
          <span className="text-muted-foreground">Product Node</span>
        </div>
      </div>
    </div>
  );
}