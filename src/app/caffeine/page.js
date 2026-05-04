"use client";
import { useState } from 'react';
import { Coffee } from 'lucide-react';

export default function CaffeineGuide() {
  const [weight, setWeight] = useState('');
  const [sensitivity, setSensitivity] = useState('normal');
  const [wakeTime, setWakeTime] = useState('07:00');
  const [result, setResult] = useState(null);

  const calculateCaffeine = () => {
    if (!weight || !wakeTime) return;

    const w = parseFloat(weight);
    let maxLimit = w * 5; // Normal sensitivity (mg per kg)
    let hoursBeforeBed = 10; // Normal cutoff

    if (sensitivity === 'high') {
      maxLimit = w * 3; // Kam caffeine
      hoursBeforeBed = 12; // Jaldi chhorni paregi
    } else if (sensitivity === 'low') {
      maxLimit = w * 6; // Zyada bardasht kar sakte hain
      hoursBeforeBed = 8; // Dair tak pi sakte hain
    }

    if (maxLimit > 400) maxLimit = 400; // FDA safe cap

    const [hours, minutes] = wakeTime.split(':');
    let wakeDate = new Date();
    wakeDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    // Assuming 16 hours awake time to find bedtime
    let bedTime = new Date(wakeDate.getTime() + 16 * 60 * 60 * 1000);
    // Cutoff time calculate karna
    let cutOffTime = new Date(bedTime.getTime() - hoursBeforeBed * 60 * 60 * 1000);

    setResult({
      limit: Math.round(maxLimit),
      cutOff: cutOffTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-28 pb-12 px-6">
      {/* Espresso / Earthy Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-700/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Coffee className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            CAFFEINE <span className="text-[#CC584C]">GUIDE.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Optimize your energy without destroying your sleep
          </p>
        </div>

        {/* Yahan Snippet 2 aayega */}{/* Input Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-8">
            
            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">
                  Body Weight (KG)
                </label>
                <input 
                  type="number" 
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 70"
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white focus:outline-none focus:border-[#CC584C] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">
                  I wake up at
                </label>
                <input 
                  type="time" 
                  value={wakeTime}
                  onChange={(e) => setWakeTime(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white focus:outline-none focus:border-[#CC584C] transition-colors appearance-none"
                />
              </div>
            </div>

            {/* Sensitivity Selector */}
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4 text-center">
                How sensitive are you to caffeine?
              </label>
              <div className="flex gap-4">
                {['low', 'normal', 'high'].map((s) => (
                  <button key={s} onClick={() => setSensitivity(s)} className={`flex-1 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${sensitivity === s ? 'bg-[#CC584C] text-white shadow-lg' : 'bg-white/5 text-teal-100/60 hover:bg-white/10'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={calculateCaffeine} className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 shadow-lg mt-6">
              Analyze Limits
            </button>
          </div>

          {/* Result Dashboard */}
          {result && (
            <div className="mt-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                  <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-2">Max Daily Limit</p>
                  <p className="text-4xl font-black text-white">{result.limit} <span className="text-lg text-[#CC584C]">mg</span></p>
                  <p className="text-[8px] text-teal-100/40 uppercase mt-2">(Approx {Math.round(result.limit / 95)} cups of coffee)</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-[#CC584C]/50 transition-colors">
                  <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-2">Hard Cut-off Time</p>
                  <p className="text-4xl font-black text-[#CC584C]">{result.cutOff}</p>
                  <p className="text-[8px] text-teal-100/40 uppercase mt-2">Zero caffeine after this</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Mastering Your Energy Curve</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            Caffeine is a powerful compound that temporarily blocks sleep receptors in your brain. While it provides excellent focus and physical energy, understanding its half-life is crucial so it doesn't disrupt your natural circadian rhythm and deep sleep phases.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">The Golden Rules of Caffeine</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8B5A2B]"></div>
              <span><strong className="text-white">Safe Limits:</strong> For most healthy adults, up to 400mg per day (roughly 4 cups of brewed coffee) is considered safe.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#CC584C]"></div>
              <span><strong className="text-white">The Half-Life Effect:</strong> Caffeine has a half-life of about 5 hours. If you consume 200mg at 4 PM, 100mg is still active in your system at 9 PM.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
              <span><strong className="text-white">The Cut-Off Time:</strong> To protect your restorative deep sleep, aim to consume your last caffeinated drink at least 8 to 10 hours before bedtime.</span>
            </li>
          </ul>
        </div>
    </main>
  );
}