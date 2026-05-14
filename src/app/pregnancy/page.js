"use client";
import { useState } from 'react';
import { Baby } from 'lucide-react';
import Link from 'next/link';

export default function PregnancyTracker() {
  const [lmp, setLmp] = useState('');
  const [cycle, setCycle] = useState(28);
  const [result, setResult] = useState(null);

  const calculateDue = () => {
    if (!lmp) return;
    
    const lmpDate = new Date(lmp);
    // Naegele's rule logic: Add 280 days + cycle adjustment
    const dueTime = lmpDate.getTime() + (280 + (cycle - 28)) * 24 * 60 * 60 * 1000;
    const dueDate = new Date(dueTime);
    
    // Calculate current weeks
    const today = new Date();
    const diffTime = Math.abs(today - lmpDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);
    
    let trimester = 1;
    if (weeks >= 13 && weeks <= 26) trimester = 2;
    if (weeks >= 27) trimester = 3;

    setResult({
      dueDate: dueDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      weeks: weeks,
      trimester: trimester
    });
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-28 pb-12 px-6">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#2C5E3B]/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Baby className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            MILESTONE <span className="text-[#CC584C]">TRACKER.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Estimate your due date and current timeline
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-8">
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">
                First Day of Last Period (LMP)
              </label>
              <input 
                type="date" 
                value={lmp}
                onChange={(e) => setLmp(e.target.value)}
                className="w-full bg-transparent border-b-2 border-white/10 py-4 text-xl font-bold text-white focus:outline-none focus:border-[#CC584C] transition-colors appearance-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">
                Average Cycle Length (Days)
              </label>
              <input 
                type="number" 
                value={cycle}
                onChange={(e) => setCycle(Number(e.target.value))}
                className="w-full bg-transparent border-b-2 border-white/10 py-4 text-2xl font-black text-white focus:outline-none focus:border-[#CC584C] transition-colors"
              />
            </div>

            <button 
              onClick={calculateDue}
              className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 mt-4"
            >
              Analyze Timeline
            </button>
          </div>

          {result && (
            <div className="mt-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4">
              <div className="text-center mb-8">
                <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Estimated Due Date</p>
                <h2 className="text-4xl md:text-5xl font-black text-white">{result.dueDate}</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/5 hover:border-[#CC584C]/30 transition-colors">
                  <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-2">Current Week</p>
                  <p className="text-4xl font-black text-white">{result.weeks}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/5 hover:border-[#CC584C]/30 transition-colors">
                  <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-2">Trimester</p>
                  <p className="text-4xl font-black text-white">{result.trimester}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Understanding Your Timeline</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            A standard pregnancy typically lasts about 40 weeks, or 280 days, calculated from the first day of your Last Menstrual Period (LMP). Tracking your precise timeline is crucial for scheduling medical check-ups and monitoring vital fetal development milestones.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">The Three Trimesters</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full border border-[#CC584C]"></div>
              <span><strong className="text-white">First Trimester (Weeks 1-13):</strong> The most crucial stage for your baby's physical development and organ formation.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full border border-[#CC584C]"></div>
              <span><strong className="text-white">Second Trimester (Weeks 14-27):</strong> Often called the "honeymoon phase," usually bringing more energy and the first flutters of movement.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full border border-[#CC584C]"></div>
              <span><strong className="text-white">Third Trimester (Weeks 28-40):</strong> The final stretch focusing on rapid growth, weight gain, and preparing for birth.</span>
            </li>
          </ul>
          {/* Extended Content & Fresh Internal Linking */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Physiological Shifts During Pregnancy</h3>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-4">
              Beyond tracking dates, your body undergoes massive physiological shifts during these 40 weeks. As your blood volume expands by nearly 50% to support the placenta and amniotic fluid, your daily hydration needs skyrocket. Furthermore, your Basal Metabolic Rate (BMR) gradually increases, especially in the second and third trimesters, requiring a strategic caloric surplus to support fetal growth without excessive, unhealthy weight gain.
            </p>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
              Additionally, extreme hormonal surges—specifically elevated progesterone—can heavily disrupt your normal sleep architecture, leading to intense first-trimester fatigue or third-trimester insomnia. Managing your sleep cycles and understanding your baseline body composition early on can help you navigate these 9 months with significantly greater comfort, vitality, and peace of mind.
            </p>

            {/* Contextual Internal Links (New Tools) */}
            <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-3">Support Your Pregnancy Journey</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/water" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Hydration Needs</span>
                <span className="text-teal-100/60 text-xs">Calculate precise water intake for amniotic fluid support.</span>
              </Link>
              
              <Link href="/tdee" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">TDEE Calculator</span>
                <span className="text-teal-100/60 text-xs">Understand your new metabolic rate and caloric needs.</span>
              </Link>

              <Link href="/deepsleep" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Sleep Optimizer</span>
                <span className="text-teal-100/60 text-xs">Manage pregnancy insomnia by timing your sleep cycles.</span>
              </Link>

              <Link href="/bmi" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">BMI Calculator</span>
                <span className="text-teal-100/60 text-xs">Check your pre-pregnancy baseline to guide weight goals.</span>
              </Link>
            </div>
          </div>
        </div>
    </main>
  );
}