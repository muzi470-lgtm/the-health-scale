"use client";
import { useState } from 'react';
import { Scale } from 'lucide-react';
import Link from 'next/link';

export default function WHRCalculator() {
  const [gender, setGender] = useState('female');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [result, setResult] = useState(null);

const calculateWHR = () => {
    if (!waist || !hip) return;
    const ratio = (parseFloat(waist) / parseFloat(hip)).toFixed(2);
    
    let risk = "Low";
    if (gender === 'male') { // <-- Yeh bracket yahan lagani zaroori thi
      if (ratio >= 0.96 && ratio <= 1.0) risk = "Moderate";
      else if (ratio > 1.0) risk = "High";
    } else {
      if (ratio >= 0.81 && ratio <= 0.85) risk = "Moderate";
      else if (ratio > 0.85) risk = "High";
    }

    setResult({ ratio, risk });
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-28 pb-12 px-6">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#2C5E3B]/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Scale className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            FAT <span className="text-[#CC584C]">DISTRIBUTION.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Analyze your Waist-to-Hip Ratio and health risk
          </p>
        </div>
        
        {/* Yahan Snippet 2 aayega */}{/* Premium Glassmorphic Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-8">
            
            {/* Gender Toggle */}
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4">Select Gender</label>
              <div className="flex gap-4">
                {['female', 'male'].map((g) => (
                  <button key={g} onClick={() => setGender(g)} className={`flex-1 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${gender === g ? 'bg-[#CC584C] text-white shadow-lg' : 'bg-white/5 text-teal-100/60 hover:bg-white/10'}`}>
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Waist Circumference (CM)</label>
                <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} placeholder="Narrowest part" className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white placeholder-white/20 focus:outline-none focus:border-[#CC584C] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Hip Circumference (CM)</label>
                <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} placeholder="Widest part" className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white placeholder-white/20 focus:outline-none focus:border-[#CC584C] transition-colors" />
              </div>
            </div>

            {/* Action Button */}
            <button onClick={calculateWHR} className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 mt-6 shadow-lg">
              Analyze Ratio
            </button>
          </div>

          {/* Result Dashboard */}
          {result && (
            <div className="mt-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-2">Your Ratio</p>
                  <p className="text-5xl font-black text-white">{result.ratio}</p>
                </div>
                <div className={`p-6 rounded-2xl border transition-colors ${result.risk === 'Low' ? 'bg-[#2C5E3B]/20 border-[#2C5E3B]/50' : result.risk === 'Moderate' ? 'bg-amber-500/20 border-amber-500/50' : 'bg-[#CC584C]/20 border-[#CC584C]/50'}`}>
                  <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-2">Health Risk</p>
                  <p className={`text-3xl font-black ${result.risk === 'Low' ? 'text-[#2C5E3B]' : result.risk === 'Moderate' ? 'text-amber-500' : 'text-[#CC584C]'}`}>
                    {result.risk}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">The Importance of Fat Distribution</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            Your Waist-to-Hip Ratio (WHR) goes beyond overall weight by analyzing exactly where your body stores fat. Weight carried around your midsection (visceral fat) is a much stronger predictor of cardiovascular issues and metabolic syndrome than fat stored around the hips.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">Assessing Your Risk Level</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-sm bg-green-500"></div>
              <span><strong className="text-white">Low Risk (Pear Shape):</strong> Indicates a healthier fat distribution (WHR ≤ 0.80 for women, ≤ 0.95 for men).</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-sm bg-yellow-500"></div>
              <span><strong className="text-white">Moderate Risk:</strong> Fat is starting to centralize. A great time to review dietary habits and daily activity.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-sm bg-red-500"></div>
              <span><strong className="text-white">High Risk (Apple Shape):</strong> Indicates higher visceral fat, signaling a need for proactive lifestyle and fitness changes.</span>
            </li>
          </ul>
          {/* Extended Content & Fresh Internal Linking */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Visceral vs. Subcutaneous Fat</h3>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-4">
              Not all fat is created equal. Subcutaneous fat (the pinchable fat just under your skin) is relatively harmless. However, a high Waist-to-Hip Ratio strongly indicates an accumulation of visceral fat. This is a dangerous type of active fat that wraps around your major abdominal organs, including your liver and pancreas. Visceral fat actively releases inflammatory cytokines into your bloodstream, heavily contributing to insulin resistance, elevated blood pressure, and a heightened risk of metabolic syndrome.
            </p>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
              The good news is that visceral fat is highly responsive to dietary interventions and cardiovascular training. If your WHR falls into the moderate or high-risk category, establishing a strategic caloric deficit and incorporating regular aerobic exercise can dramatically reduce your abdominal circumference and improve your overall metabolic health.
            </p>

            {/* Contextual Internal Links (New Tools) */}
            <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-3">Take Action on Your Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/bodyfat" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Body Fat %</span>
                <span className="text-teal-100/60 text-xs">Get a complete breakdown of your overall body composition.</span>
              </Link>
              
              <Link href="/tdee" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">TDEE Calories</span>
                <span className="text-teal-100/60 text-xs">Calculate the exact caloric deficit needed to burn visceral fat.</span>
              </Link>

              <Link href="/workout" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Workout Planner</span>
                <span className="text-teal-100/60 text-xs">Design a cardio and lifting routine to lower your ratio.</span>
              </Link>

              <Link href="/bioage" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Biological Age</span>
                <span className="text-teal-100/60 text-xs">See if high visceral fat is accelerating your cellular aging.</span>
              </Link>
            </div>
          </div>
        </div>
    </main>
  );
}