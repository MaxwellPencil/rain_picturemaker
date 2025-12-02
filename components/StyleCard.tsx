import React from 'react';
import { PromptStyle } from '../types';

interface StyleCardProps {
  style: PromptStyle;
  isSelected: boolean;
  onSelect: (style: PromptStyle) => void;
}

export const StyleCard: React.FC<StyleCardProps> = ({ style, isSelected, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(style)}
      className={`
        relative group cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 flex flex-col h-full
        ${isSelected 
          ? 'border-banana-400 bg-dark-800 ring-1 ring-banana-400' 
          : 'border-white/10 bg-dark-900 hover:border-gray-500 hover:bg-dark-800'
        }
      `}
    >
      {/* Header / Color Strip */}
      <div className={`h-16 w-full bg-gradient-to-r ${style.previewColor} opacity-90 group-hover:opacity-100 transition-opacity flex items-center px-4`}>
         <div className="bg-black/30 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-mono">
           {style.category}
         </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className={`font-bold text-lg mb-1 transition-colors ${isSelected ? 'text-banana-400' : 'text-gray-200 group-hover:text-white'}`}>
          {style.name}
        </h3>
        
        <p className="text-xs text-gray-400 mb-3 line-clamp-2">
          {style.description}
        </p>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-1">
          {style.tags.map(tag => (
            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
