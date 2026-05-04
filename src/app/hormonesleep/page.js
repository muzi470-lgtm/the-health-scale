"use client";
import { useState } from 'react';
import { Bed } from 'lucide-react';

export default function HormoneSleep() {
  const [hours, setHours] = useState(7);
  const [screenTime, setScreenTime] = useState('yes');
  const [result, setResult] = useState(null);

  const analyzeSleep = () => {
    let quality = "Average";
    let hormoneImpact = "Neutral";
    
    if (hours >= 7 && screenTime === 'no') {
      quality = "Elite";
      hormoneImpact = "Optimal Melatonin & Growth Hormone release.";
    } else if (hours < 7 && screenTime === 'yes') {
      quality = "Disrupted";
      hormoneImpact = "Elevated Cortisol levels; suppressed Melatonin.";
    } else {
      quality = "Sub-optimal";
      hormoneImpact = "Inconsistent recovery; potential insulin sensitivity impact.";
    }

    setResult({ quality, hormoneImpact });
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-28 pb-12 px-6">
      {/* Deep Indigo/Violet Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Bed className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            HORMONAL <span className="text-[#CC584C]">REST.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Analyze sleep quality for endocrine recovery
          </p>
        </div>
        {/* Yahan Snippet 2 aayega */}<div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-10">
            
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em]">Avg. Sleep Hours</label>
                <span className="text-2xl font-black text-white">{hours}h</span>
              </div>
              <input type="range" min="4" max="10" step="0.5" value={hours} onChange={(e) => setHours(e.target.value)} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#CC584C]" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4 text-center">Screen time 1 hour before bed?</label>
              <div className="flex gap-4">
                {['no', 'yes'].map((opt) => (
                  <button key={opt} onClick={() => setScreenTime(opt)} className={`flex-1 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${screenTime === opt ? 'bg-[#CC584C] text-white shadow-lg' : 'bg-white/5 text-teal-100/60 hover:bg-white/10'}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={analyzeSleep} className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 shadow-lg">Analyze Quality</button>
          </div>

          {result && (
            <div className="mt-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4">
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 text-center">
                <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-2">Sleep Category</p>
                <h3 className={`text-4xl font-black mb-4 ${result.quality === 'Elite' ? 'text-[#2C5E3B]' : result.quality === 'Disrupted' ? 'text-[#CC584C]' : 'text-amber-500'}`}>{result.quality}</h3>
                <p className="text-sm font-medium text-teal-100/80 leading-relaxed italic">"{result.hormoneImpact}"</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Syncing with Your Biology</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            Your body operates on delicate chemical messengers called hormones. From your sleep-wake cycle governed by light, to monthly fluctuations, aligning your lifestyle with your natural hormonal rhythms drastically improves energy, reduces stress, and enhances deep sleep.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">Key Hormonal Drivers</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full border border-yellow-400"></div>
              <span><strong className="text-white">Cortisol (The Waking Hormone):</strong> Naturally peaks in the morning to give you energy and focus. Chronic stress keeps this elevated, destroying sleep quality.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full border border-indigo-400"></div>
              <span><strong className="text-white">Melatonin (The Sleep Hormone):</strong> Rises in the evening as light fades, preparing your body for restorative deep sleep and cellular repair.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full border border-pink-400"></div>
              <span><strong className="text-white">Cycle Syncing:</strong> Adjusting your diet and workout intensity based on the four phases of the menstrual cycle to support hormonal homeostasis.</span>
            </li>
          </ul>
        </div>
    </main>
  );
}