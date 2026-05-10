export interface KpiData {
  title: string;
  value: string;
  trend: number;
  label: string;
  category: 'revenue' | 'growth' | 'efficiency';
}
export interface RevenuePoint {
  month: string;
  search: number;
  youtube: number;
  cloud: number;
  other: number;
}
export interface SegmentData {
  name: string;
  value: number;
  color: string;
}
export const KPIS: KpiData[] = [
  { title: "Total Revenue", value: "$382.4B", trend: 14.2, label: "Est. FY 2025", category: 'revenue' },
  { title: "Cloud Revenue", value: "$52.1B", trend: 28.4, label: "YoY Growth", category: 'growth' },
  { title: "AI Services", value: "$12.8B", trend: 145.2, label: "New Segment", category: 'growth' },
  { title: "Operating Margin", value: "31.2%", trend: 2.1, label: "Efficiency", category: 'efficiency' },
];
export const REVENUE_TRENDS: RevenuePoint[] = [
  { month: 'Jan', search: 45, youtube: 8, cloud: 4, other: 2 },
  { month: 'Feb', search: 46, youtube: 8.2, cloud: 4.2, other: 2.1 },
  { month: 'Mar', search: 48, youtube: 9, cloud: 4.5, other: 2.2 },
  { month: 'Apr', search: 47, youtube: 8.8, cloud: 4.8, other: 2.3 },
  { month: 'May', search: 50, youtube: 9.5, cloud: 5.2, other: 2.5 },
  { month: 'Jun', search: 52, youtube: 10, cloud: 5.8, other: 2.8 },
  { month: 'Jul', search: 53, youtube: 10.2, cloud: 6.2, other: 3.0 },
  { month: 'Aug', search: 55, youtube: 11, cloud: 6.8, other: 3.2 },
  { month: 'Sep', search: 58, youtube: 12.5, cloud: 7.5, other: 3.5 },
  { month: 'Oct', search: 60, youtube: 13, cloud: 8.2, other: 3.8 },
  { month: 'Nov', search: 65, youtube: 15, cloud: 9.5, other: 4.2 },
  { month: 'Dec', search: 72, youtube: 18, cloud: 11.2, other: 5.0 },
];
export const SEGMENTS: SegmentData[] = [
  { name: 'Google Search', value: 58, color: '#4285F4' },
  { name: 'YouTube Ads', value: 12, color: '#EA4335' },
  { name: 'Google Cloud', value: 15, color: '#34A853' },
  { name: 'AI & Other Bets', value: 15, color: '#FBBC05' },
];
export const GRAPH_NODES = [
  { id: 'gemini', label: 'Gemini AI Core', type: 'core', x: 50, y: 50 },
  { id: 'search', label: 'Search 2.0', type: 'product', x: 20, y: 30 },
  { id: 'cloud', label: 'Vertex AI', type: 'product', x: 80, y: 30 },
  { id: 'youtube', label: 'YT Shorts AI', type: 'product', x: 20, y: 70 },
  { id: 'workspace', label: 'Duet Workspace', type: 'product', x: 80, y: 70 },
  { id: 'ads', label: 'Performance Max', type: 'product', x: 50, y: 15 },
];
export const GRAPH_LINKS = [
  { from: 'gemini', to: 'search' },
  { from: 'gemini', to: 'cloud' },
  { from: 'gemini', to: 'youtube' },
  { from: 'gemini', to: 'workspace' },
  { from: 'gemini', to: 'ads' },
];