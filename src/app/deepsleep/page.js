"use client";
import { useState } from 'react';
import { Moon, Clock, Zap, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function DeepSleep() {
  const [wakeTime, setWakeTime] = useState('07:00');
  const [results, setResults] = useState([]);

  const calculateSleep = () => {
    if (!wakeTime) return;
    
    // Wake time ko Date object mein badalna
    const [hours, minutes] = wakeTime.split(':');
    let wakeDate = new Date();
    wakeDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    const cycles = [];
    // 90 minute ke cycles + 15 mins sone mein lagne wala waqt
    for (let i = 6; i >= 3; i--) {
      let sleepDate = new Date(wakeDate.getTime());
      sleepDate.setMinutes(sleepDate.getMinutes() - (i * 90) - 15);
      cycles.push({
        time: sleepDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        cycles: i,
        quality: i >= 5 ? 'Optimal' : 'Minimum'
      });
    }
    setResults(cycles);
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-20 pb-12 px-6">
      {/* Background Aesthetic Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2C5E3B]/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-teal-100/60 font-bold mb-10 hover:text-[#CC584C] transition-colors text-[10px] uppercase tracking-widest">
          <ChevronLeft size={16} /> Back to Hub
        </Link>

        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Moon className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            SLEEP <span className="text-[#CC584C]">CYCLE.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Optimize your sleep cycles for peak performance
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-8">
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4 text-center">
                I want to wake up at
              </label>
              <input 
                type="time" 
                value={wakeTime}
                onChange={(e) => setWakeTime(e.target.value)}
                className="w-full bg-white/5 border border-white/10 py-6 px-4 rounded-2xl text-4xl text-center font-black text-white focus:outline-none focus:border-[#CC584C] transition-colors appearance-none shadow-inner"
              />
            </div>

            <button 
              onClick={calculateSleep}
              className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 shadow-xl"
            >
              Calculate Bedtimes
            </button>
          </div>

          {/* Results Grid */}
          {results.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4">
              <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-6 text-center">
                Recommended Bedtimes
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.map((r, i) => (
                  <div key={i} className={`p-6 rounded-2xl border transition-all duration-500 flex flex-col items-center ${r.quality === 'Optimal' ? 'bg-[#2C5E3B]/10 border-[#2C5E3B]/40' : 'bg-white/5 border-white/10'}`}>
                    <Clock size={16} className="text-[#CC584C] mb-2" />
                    <p className="text-3xl font-black text-white mb-1">{r.time}</p>
                    <p className="text-[10px] font-bold text-teal-100/40 uppercase tracking-widest">
                      {r.cycles} Cycles — <span className={r.quality === 'Optimal' ? 'text-[#2C5E3B]' : ''}>{r.quality}</span>
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3">
                <Zap size={18} className="text-[#CC584C] shrink-0 mt-1" />
                <p className="text-[11px] text-teal-100/60 leading-relaxed">
                  These times include a 15-minute window to fall asleep. Waking up at the end of a 90-minute cycle prevents grogginess.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">The 90-Minute Rule</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            Human sleep isn't just a single block of hours; it consists of 90-minute cycles transitioning through light sleep, deep sleep, and REM (Rapid Eye Movement). Waking up in the middle of a deep sleep cycle leaves you feeling groggy, regardless of how many hours you actually slept.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">Why Calculate Cycles?</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#CC584C]"></div>
              <span><strong className="text-white">Wake Up Refreshed:</strong> Timing your alarm for the end of a 90-minute cycle helps you wake up naturally.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#CC584C]"></div>
              <span><strong className="text-white">Optimize Rest:</strong> Aim for 5 to 6 full cycles (7.5 to 9 hours) for optimal cognitive performance and memory.</span>
            </li>
          </ul>
        </div>
    </main>
  );
}