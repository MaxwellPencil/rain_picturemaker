import React, { useState, useEffect } from 'react';
import { StyleCard } from './components/StyleCard';
import { enhancePrompt } from './services/geminiService';
import { PROMPT_STYLES, CATEGORIES } from './constants';
import { PromptStyle } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStyle, setSelectedStyle] = useState<PromptStyle>(PROMPT_STYLES[0]);
  const [subjectInput, setSubjectInput] = useState("");
  const [finalPrompt, setFinalPrompt] = useState("");
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  // Update prompt when selection changes
  useEffect(() => {
    // Determine placeholder text based on whether input is empty
    const sub = subjectInput.trim() || "[角色描述]";
    // Note: The templates in constant.ts are in English to ensure better generation quality,
    // so we simply replace the placeholder. The user sees the final English prompt.
    setFinalPrompt(selectedStyle.template.replace("{{subject}}", sub));
  }, [selectedStyle, subjectInput]);

  const handleEnhance = async () => {
    if (!subjectInput) return;
    setIsEnhancing(true);
    try {
      const enhanced = await enhancePrompt(subjectInput, selectedStyle.name);
      setFinalPrompt(enhanced);
    } catch (e) {
      console.error(e);
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filter Logic
  const filteredStyles = PROMPT_STYLES.filter(s => {
    const matchesCategory = selectedCategory === "all" || s.category === selectedCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-banana-500 selection:text-black flex flex-col">
      {/* Header */}
      <header className="bg-dark-900 border-b border-white/10 sticky top-0 z-30">
        <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-banana-400 to-orange-500 flex items-center justify-center font-bold text-black text-lg">
              NB
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-none">
                Nano Banana <span className="text-banana-400">提示词大全</span>
              </h1>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">专业 AI 提示词库</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <a href="https://ai.google.dev" target="_blank" className="text-xs text-gray-500 hover:text-white transition-colors">Powered by Gemini</a>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 lg:p-6 grid lg:grid-cols-12 gap-6">
        
        {/* Left Panel: Prompt Workbench (Fixed on Desktop) */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
          <div className="bg-dark-900 border border-white/10 rounded-2xl p-6 sticky top-24 shadow-2xl">
             <div className="flex items-center gap-2 mb-6">
               <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedStyle.previewColor}`}></div>
               <h2 className="font-bold text-white">提示词构建器</h2>
             </div>

             {/* Style Info */}
             <div className="mb-6 bg-black/40 rounded-xl p-4 border border-white/5">
                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">已选风格</span>
                <div className="text-xl font-bold text-banana-400 mt-1">{selectedStyle.name}</div>
                <div className="text-sm text-gray-400 mt-1">{selectedStyle.description}</div>
             </div>

             {/* Inputs */}
             <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">角色主体 / 描述</label>
                  <input
                    type="text"
                    value={subjectInput}
                    onChange={(e) => setSubjectInput(e.target.value)}
                    placeholder="例如：一只赛博朋克风格的武士猫"
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-banana-400 focus:ring-1 focus:ring-banana-400 transition-all"
                  />
                </div>

                <div className="flex gap-2">
                   <button
                    onClick={handleEnhance}
                    disabled={!subjectInput || isEnhancing}
                    className="flex-1 py-2 bg-dark-800 hover:bg-dark-800/80 text-banana-400 text-sm font-medium rounded-lg border border-banana-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isEnhancing ? <span className="animate-spin">✨</span> : <span>✨ AI 智能润色 (Enhance)</span>}
                  </button>
                </div>

                <hr className="border-white/10 my-4" />

                <div>
                   <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">
                     最终提示词 (英文)
                   </label>
                   <div className="relative group">
                     <textarea
                       readOnly
                       value={finalPrompt}
                       className="w-full h-40 bg-black/60 border border-white/10 rounded-xl p-4 text-sm text-gray-300 resize-none font-mono leading-relaxed focus:outline-none"
                     />
                     <button
                       onClick={handleCopy}
                       className="absolute bottom-2 right-2 px-4 py-2 bg-banana-500 hover:bg-banana-400 text-black text-sm font-bold rounded-lg shadow-lg transition-all flex items-center gap-2"
                     >
                       {copied ? (
                         <>
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                           已复制
                         </>
                       ) : (
                         <>
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                           复制
                         </>
                       )}
                     </button>
                   </div>
                   <p className="mt-2 text-[10px] text-gray-600 text-center">
                     适用于 Nano Banana Pro / Gemini 3 / Midjourney
                   </p>
                </div>
             </div>
          </div>
        </div>

        {/* Right Panel: Style Library */}
        <div className="lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
           
           {/* Filters */}
           <div className="sticky top-0 z-20 bg-[#050505]/95 backdrop-blur-xl py-4 mb-6 border-b border-white/5">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                 
                 {/* Search */}
                 <div className="relative w-full md:w-64">
                    <input 
                      type="text" 
                      placeholder="搜索风格..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-dark-900 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:border-banana-500 outline-none transition-colors"
                    />
                    <svg className="w-4 h-4 text-gray-500 absolute left-3.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                 </div>

                 {/* Categories */}
                 <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto custom-scrollbar">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`
                          whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all border
                          ${selectedCategory === cat.id 
                            ? 'bg-banana-500 text-black border-banana-500' 
                            : 'bg-dark-900 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                          }
                        `}
                      >
                        {cat.label}
                      </button>
                    ))}
                 </div>
              </div>
           </div>

           {/* Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredStyles.map(style => (
                <StyleCard 
                  key={style.id}
                  style={style}
                  isSelected={selectedStyle.id === style.id}
                  onSelect={setSelectedStyle}
                />
              ))}
              
              {filteredStyles.length === 0 && (
                <div className="col-span-full py-20 text-center text-gray-500">
                  <p>未找到符合条件的风格。</p>
                </div>
              )}
           </div>

        </div>

      </main>
    </div>
  );
}

export default App;