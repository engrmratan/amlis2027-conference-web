import React, { useState } from 'react';
import { Cpu, Brain, Sparkles, Network, Zap, Binary } from 'lucide-react';

export const AiNeuralAnimation: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<{ id: number; label: string; desc: string } | null>(null);

  // Synaptic vector connections
  const connections = [
    { from: [160, 60], to: [120, 100], delay: '0s' },
    { from: [160, 60], to: [200, 100], delay: '0.3s' },
    { from: [120, 100], to: [90, 150], delay: '0.6s' },
    { from: [120, 100], to: [150, 140], delay: '0.2s' },
    { from: [200, 100], to: [170, 140], delay: '0.5s' },
    { from: [200, 100], to: [230, 150], delay: '0.8s' },
    { from: [150, 140], to: [160, 185], delay: '0.4s' },
    { from: [170, 140], to: [160, 185], delay: '0.7s' },
    { from: [90, 150], to: [110, 210], delay: '0.9s' },
    { from: [230, 150], to: [210, 210], delay: '1.1s' },
    { from: [110, 210], to: [160, 230], delay: '0.5s' },
    { from: [210, 210], to: [160, 230], delay: '0.8s' },
    { from: [160, 185], to: [160, 230], delay: '0.2s' },
    { from: [160, 230], to: [130, 270], delay: '0.6s' },
    { from: [160, 230], to: [190, 270], delay: '1.0s' },
    { from: [130, 270], to: [160, 295], delay: '0.4s' },
    { from: [190, 270], to: [160, 295], delay: '0.7s' }
  ];

  // Neural network nodes
  const nodes = [
    { id: 1, cx: 160, cy: 60, r: 6, label: 'Input Vector', desc: 'Multimodal Sensor Input' },
    { id: 2, cx: 120, cy: 100, r: 5, label: 'Feature Extraction', desc: 'Convolutional Layer' },
    { id: 3, cx: 200, cy: 100, r: 5, label: 'Latent Space', desc: 'Dimension Reduction' },
    { id: 4, cx: 90, cy: 150, r: 5.5, label: 'Attention Matrix', desc: 'Self-Attention Heads' },
    { id: 5, cx: 150, cy: 140, r: 7, label: 'AI Neural Core', desc: 'Deep Transformer Unit' },
    { id: 6, cx: 170, cy: 140, r: 7, label: 'Intelligent System', desc: 'Synaptic Processing' },
    { id: 7, cx: 230, cy: 150, r: 5.5, label: 'Weight Tensor', desc: 'Backprop Optimizer' },
    { id: 8, cx: 160, cy: 185, r: 8, label: 'Central Processor', desc: 'Cognitive Reasoning' },
    { id: 9, cx: 110, cy: 210, r: 5.5, label: 'Reinforcement Hub', desc: 'Policy Gradient' },
    { id: 10, cx: 210, cy: 210, r: 5.5, label: 'Pattern Memory', desc: 'Associative Graph' },
    { id: 11, cx: 160, cy: 230, r: 7, label: 'Decision Axis', desc: 'Softmax Distribution' },
    { id: 12, cx: 130, cy: 270, r: 5, label: 'Inference Engine', desc: 'Low-latency Execution' },
    { id: 13, cx: 190, cy: 270, r: 5, label: 'Knowledge Graph', desc: 'Semantic Embeddings' },
    { id: 14, cx: 160, cy: 295, r: 6, label: 'Output Stream', desc: 'Actuation & Prediction' }
  ];

  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[450px] aspect-square flex items-center justify-center select-none mx-auto">
      {/* 1. Ambient Glow Backdrops */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/15 via-indigo-400/20 to-sky-300/30 blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute -inset-6 rounded-full border border-blue-200/50 -z-10 animate-pulse-slow" />
      <div className="absolute -inset-12 rounded-full border border-indigo-100/40 -z-10" />

      {/* 2. Rotating Orbital Data Rings using animate-rotate-orbit & animate-rotate-orbit-reverse */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 animate-rotate-orbit"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="192"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.2"
          strokeDasharray="8 10"
          opacity="0.65"
        />
        {/* Orbiting Satellite Node 1 */}
        <circle cx="392" cy="200" r="5" fill="#2563eb" className="animate-pulse" />
        <circle cx="8" cy="200" r="4" fill="#6366f1" />
      </svg>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 animate-rotate-orbit-reverse"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="165"
          fill="none"
          stroke="#818cf8"
          strokeWidth="1"
          strokeDasharray="5 7"
          opacity="0.5"
        />
        {/* Orbiting Satellite Node 2 */}
        <circle cx="200" cy="35" r="4.5" fill="#00b4d8" />
        <circle cx="200" cy="365" r="4" fill="#3b82f6" />
      </svg>

      {/* 3. Main Glassmorphic AI Centerpiece */}
      <div className="w-[86%] h-[86%] rounded-3xl bg-gradient-to-b from-white/95 via-blue-50/70 to-indigo-50/90 p-4 sm:p-5 shadow-2xl border-2 border-white/80 backdrop-blur-md flex items-center justify-center relative overflow-hidden group">
        {/* Subtle grid pattern inside */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

        {/* Central SVG Graphic */}
        <svg
          viewBox="0 0 320 320"
          className="w-full h-full drop-shadow-md relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="primaryAIGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00b4d8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>

            <linearGradient id="neuralFlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>

            <radialGradient id="centerCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central Neural Glow */}
          <circle cx="160" cy="180" r="90" fill="url(#centerCoreGlow)" className="animate-pulse-slow" />

          {/* Brain / Intelligent Systems Outline Silhouette */}
          <path
            d="M160,70 C120,70 100,100 100,135 C100,165 115,190 130,210 C140,225 150,250 160,280 C170,250 180,225 190,210 C205,190 220,165 220,135 C220,100 200,70 160,70 Z"
            fill="none"
            stroke="url(#primaryAIGradient)"
            strokeWidth="1.8"
            strokeDasharray="4 4"
            className="animate-dash-flow opacity-70"
          />

          {/* Internal Synaptic Connection Lines */}
          {connections.map((c, idx) => (
            <line
              key={idx}
              x1={c.from[0]}
              y1={c.from[1]}
              x2={c.to[0]}
              y2={c.to[1]}
              stroke="url(#neuralFlowGrad)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              className="animate-dash-flow opacity-80"
            />
          ))}

          {/* Micro-circuit accent rings around center */}
          <circle
            cx="160"
            cy="185"
            r="38"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            className="animate-rotate"
          />
          <circle
            cx="160"
            cy="185"
            r="26"
            fill="none"
            stroke="#818cf8"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            className="animate-rotate-orbit-reverse"
          />

          {/* Neural Nodes with Interactivity */}
          {nodes.map((n) => {
            const isHovered = hoveredNode?.id === n.id;
            return (
              <g
                key={n.id}
                className="cursor-pointer transition-transform duration-200"
                onMouseEnter={() => setHoveredNode(n)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Outer Glow on hover or key nodes */}
                <circle
                  cx={n.cx}
                  cy={n.cy}
                  r={n.r + (isHovered ? 6 : 3)}
                  fill={isHovered ? '#00b4d8' : '#38bdf8'}
                  opacity={isHovered ? 0.6 : 0.25}
                  className="transition-all"
                />
                {/* Core Node Circle */}
                <circle
                  cx={n.cx}
                  cy={n.cy}
                  r={n.r}
                  fill={isHovered ? '#0284c7' : '#1d4ed8'}
                  stroke="#ffffff"
                  strokeWidth="2"
                  className={n.r > 6 ? 'animate-pulse' : ''}
                />
                {/* Little inner white dot for electric specular highlight */}
                <circle cx={n.cx - 1.5} cy={n.cy - 1.5} r="1.2" fill="#ffffff" />
              </g>
            );
          })}
        </svg>

        {/* 4. Interactive Node Tooltip Overlay */}
        {hoveredNode && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 px-3 py-1.5 rounded-xl bg-[#07153b] text-white text-[11px] font-medium shadow-xl border border-blue-400/40 pointer-events-none flex items-center gap-1.5 whitespace-nowrap animate-in fade-in zoom-in-95 duration-150">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-bold text-cyan-300">{hoveredNode.label}:</span>
            <span className="text-slate-200">{hoveredNode.desc}</span>
          </div>
        )}
      </div>

      {/* 5. Four Floating Animated Modern Cards representing 'AI & Intelligent Systems' */}

      {/* Badge Top-Left: AI & Deep Learning (Floating Animation) */}
      <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-20 animate-float">
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-blue-100 hover:border-blue-300 transition-all">
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
            <Brain className="w-4 h-4" />
          </div>
          <div className="text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block leading-tight">
              AI & Deep Learning
            </span>
            <span className="text-[9px] text-slate-500 font-medium">Neural Architecture</span>
          </div>
        </div>
      </div>

      {/* Badge Top-Right: Intelligent Systems (Delayed Floating Animation) */}
      <div className="absolute -top-2 -right-3 sm:-top-3 sm:-right-4 z-20 animate-float-delayed">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#07153b]/95 text-white backdrop-blur-md shadow-xl border border-blue-900/60 hover:border-cyan-400 transition-all">
          <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-[10px] font-bold text-cyan-300 tracking-wide">
            Intelligent Systems
          </span>
        </div>
      </div>

      {/* Badge Bottom-Left: Neural Networks (Float Animation) */}
      <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-3 z-20 animate-float-delayed">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80">
          <Network className="w-3.5 h-3.5 text-indigo-600" />
          <span className="text-[10px] font-bold text-slate-800">
            Neural Networks
          </span>
        </div>
      </div>

      {/* Badge Bottom-Right: Machine Learning Core (Float Animation) */}
      <div className="absolute -bottom-2 -right-3 sm:-bottom-3 sm:-right-4 z-20 animate-float">
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-blue-100">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Cpu className="w-4 h-4" />
          </div>
          <div className="text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block leading-tight">
              Machine Learning
            </span>
            <span className="text-[9px] text-slate-500 font-medium">99.4% Inference</span>
          </div>
        </div>
      </div>
    </div>
  );
};
