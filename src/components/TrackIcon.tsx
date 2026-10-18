import React from 'react';
import {
  Cpu,
  Brain,
  Layers,
  Sparkles,
  Database,
  Eye,
  MessageSquare,
  ShieldAlert,
  Cog,
  Lock,
  MoreHorizontal
} from 'lucide-react';

interface TrackIconProps {
  name: string;
  className?: string;
}

export const TrackIcon: React.FC<TrackIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Brain':
      return <Brain className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'Eye':
      return <Eye className={className} />;
    case 'MessageSquare':
      return <MessageSquare className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    case 'Cog':
      return <Cog className={className} />;
    case 'Lock':
      return <Lock className={className} />;
    case 'MoreHorizontal':
    default:
      return <MoreHorizontal className={className} />;
  }
};
