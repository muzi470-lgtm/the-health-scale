"use client";
import { useState } from 'react';
import { Flower2 } from 'lucide-react';

export default function OvulationTracker() {
  const [lmp, setLmp] = useState('');
  const [cycle, setCycle] = useState(28);
  const [result, setResult] = useState(null);

  const calculateOvulation = () => {
    if (!lmp) return;
    
    const lmpDate = new Date(lmp);
    const cycleLength = parseInt(cycle);
    
    // Ovulation is typically 14 days before the NEXT period
    const nextPeriodDate = new Date(lmpDate.getTime() + cycleLength * 24 * 60 * 60 * 1000);
    const ovulationDate = new Date(nextPeriodDate.getTime() - 14 * 24 * 60 * 60 * 1000);
    
    // Fertile window: 5 days before + 1 day after ovulation
    const fertileStart = new Date(ovulationDate.getTime() - 5 * 24 * 60 * 60 * 1000);
    const fertileEnd = new Date(ovulationDate.getTime() + 1 * 24 * 60 * 60 * 1000);

    const formatDate = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    setResult({
      ovulation: formatDate(ovulationDate),
      window: `${formatDate(fertileStart)} - ${formatDate(fertileEnd)}`,
      nextPeriod: formatDate(nextPeriodDate)
    });
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-28 pb-12 px-6">
      {/* Soft Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2C5E3B]/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Flower2 className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            FERTILITY <span className="text-[#CC584C]">WINDOW.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Predict your most fertile days with scientific accuracy
          </p>
        </div>

        {/* Yahan Snippet 2 aayega */}{/* Glassmorphic Input Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-8">
            
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">
                  First Day of Last Period
                </label>
                <input 
                  type="date" 
                  value={lmp}
                  onChange={(e) => setLmp(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 text-xl font-bold text-white focus:outline-none focus:border-[#CC584C] transition-colors appearance-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">
                  Cycle Length (Days)
                </label>
                <input 
                  type="number" 
                  value={cycle}
                  onChange={(e) => setCycle(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white focus:outline-none focus:border-[#CC584C] transition-colors"
                />
              </div>
            </div>

            <button 
              onClick={calculateOvulation} 
              className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 shadow-lg mt-6"
            >
              Track Cycle
            </button>
          </div>

          {/* Results Dashboard */}
          {result && (
            <div className="mt-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4">
              
              <div className="text-center mb-8">
                <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Peak Ovulation Day</p>
                <h2 className="text-5xl font-black text-[#CC584C] drop-shadow-[0_0_15px_rgba(204,88,76,0.3)]">
                  {result.ovulation}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/5 hover:border-white/20 transition-colors">
                  <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-2">Fertile Window</p>
                  <p className="text-xl md:text-2xl font-black text-white">{result.window}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/5 hover:border-white/20 transition-colors">
                  <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-2">Next Period</p>
                  <p className="text-xl md:text-2xl font-black text-white">{result.nextPeriod}</p>
                </div>
              </div>
              
            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Understanding Your Cycle</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            Ovulation is the brief window during your menstrual cycle when an egg is released and is ready to be fertilized. Knowing your exact fertile days is the most natural and effective way to either plan for pregnancy or simply understand your body's rhythm.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">The Fertility Phases</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-pink-400"></div>
              <span><strong className="text-white">The Fertile Window:</strong> The 5 days leading up to and the day of ovulation. This is when your chances of conception are highest.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#CC584C]"></div>
              <span><strong className="text-white">Ovulation Day:</strong> The peak day when the egg is released. It typically survives for only 12 to 24 hours.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <span><strong className="text-white">Luteal Phase:</strong> The time after ovulation until your next period starts, usually lasting a consistent 14 days.</span>
            </li>
          </ul>
        </div>
    </main>
  );
}