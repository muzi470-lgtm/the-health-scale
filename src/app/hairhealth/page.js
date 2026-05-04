"use client";
import { useState } from 'react';
import { Scissors } from 'lucide-react';

export default function HairHealth() {
  const [shedding, setShedding] = useState(50);
  const [fatigue, setFatigue] = useState('no');
  const [result, setResult] = useState(null);

  const analyzeHair = () => {
    let status = "Normal";
    let advice = "";
    const s = parseInt(shedding);

    if (s <= 100) {
      status = "Healthy";
      advice = "Your shedding is within the physiological norm. Maintain a balanced diet for longevity.";
    } else if (s > 100 && s <= 150) {
      status = "Elevated";
      advice = "Shedding is slightly high. This could be due to seasonal changes or temporary stress.";
    } else {
      status = "Excessive";
      advice = "High shedding level. We recommend checking your Ferritin (Iron) and Thyroid levels.";
    }

    if (fatigue === 'yes' && s > 100) {
      advice += " Since you mentioned fatigue, Iron deficiency is a strong possibility for this hair loss.";
    }

    setResult({ status, advice });
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-28 pb-12 px-6">
      {/* Soft Red/Rose Glows (Iron Theme) */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Scissors className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            HAIR <span className="text-[#CC584C]">VITALITY.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Analyze shedding patterns and potential iron markers
          </p>
        </div>

        {/* Yahan Snippet 2 aayega */}{/* Input Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-10">
            
            {/* Shedding Slider */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em]">
                  Est. Daily Hair Loss (Strands)
                </label>
                <span className="text-2xl font-black text-white">{shedding}</span>
              </div>
              
              <input 
                type="range" 
                min="10" 
                max="300" 
                step="10"
                value={shedding}
                onChange={(e) => setShedding(e.target.value)}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#CC584C]"
              />
              <div className="flex justify-between text-[8px] font-bold text-teal-100/40 uppercase tracking-widest mt-2">
                <span>Normal (100)</span>
                <span>Moderate</span>
                <span>Extreme</span>
              </div>
            </div>

            {/* Fatigue Toggle (Iron Marker) */}
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4 text-center">
                Do you experience frequent fatigue/cold hands?
              </label>
              <div className="flex gap-4">
                {['no', 'yes'].map((opt) => (
                  <button key={opt} onClick={() => setFatigue(opt)} className={`flex-1 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${fatigue === opt ? 'bg-[#CC584C] text-white shadow-lg' : 'bg-white/5 text-teal-100/60 hover:bg-white/10'}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={analyzeHair} className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 shadow-lg">
              Analyze Vitality
            </button>
          </div>

          {/* Analysis Result */}
          {result && (
            <div className="mt-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4">
              
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 text-center">
                <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-2">Shedding Status</p>
                <h3 className={`text-5xl font-black mb-6 ${result.status === 'Healthy' ? 'text-[#2C5E3B]' : result.status === 'Elevated' ? 'text-amber-500' : 'text-[#CC584C]'}`}>
                  {result.status}
                </h3>
                <p className="text-sm font-medium text-teal-100/80 leading-relaxed max-w-md mx-auto">
                  {result.advice}
                </p>
              </div>

            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">The Root of Hair Science</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            Beautiful hair starts at a microscopic level. Understanding your unique strand thickness, curl pattern, and moisture retention ability is the first step in curating the right routine. Using the wrong products for your specific type can lead to severe breakage, excess sebum, or chronic dryness.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">Key Hair Care Metrics</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rotate-45 bg-amber-600"></div>
              <span><strong className="text-white">Hair Porosity:</strong> Determines how well your hair absorbs moisture. High porosity needs heavy sealing oils, while low porosity requires lightweight hydration.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rotate-45 bg-[#CC584C]"></div>
              <span><strong className="text-white">Scalp Environment:</strong> A balanced scalp prevents dandruff and promotes optimal blood circulation for follicle growth.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rotate-45 bg-stone-400"></div>
              <span><strong className="text-white">Strand Elasticity:</strong> Healthy hair stretches slightly without snapping. A lack of elasticity often points to a need for protein treatments.</span>
            </li>
          </ul>
        </div>
    </main>
  );
}