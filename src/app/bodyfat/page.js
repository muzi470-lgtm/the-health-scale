"use client";
import { useState } from 'react';
import { Flame } from 'lucide-react';
import Link from 'next/link';

export default function BodyFatCalculator() {
  const [gender, setGender] = useState('male');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [height, setHeight] = useState('');
  const [hip, setHip] = useState('');
  const [result, setResult] = useState(null);

  const calculateBodyFat = () => {
    if (!height || !neck || !waist) return;
    
    // U.S. Navy Body Fat Formula
    let bf = 0;
    const w = parseFloat(waist);
    const n = parseFloat(neck);
    const h = parseFloat(height);

    if (gender === 'male') {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      const hi = parseFloat(hip);
      if (!hi) return;
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hi - n) + 0.22100 * Math.log10(h)) - 450;
    }

    setResult(bf.toFixed(1));
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-28 pb-12 px-6">
      {/* Deep Sea Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2C5E3B]/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Flame className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            NAVY <span className="text-[#CC584C]">COMPOSITION.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Estimate your body fat percentage with clinical precision
          </p>
        </div>

        {/* Yahan Snippet 2 aayega */}{/* Glassmorphic Form Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-8">
            
            {/* Gender Selection */}
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4">Select Gender</label>
              <div className="flex gap-4">
                {['male', 'female'].map((g) => (
                  <button key={g} onClick={() => setGender(g)} className={`flex-1 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${gender === g ? 'bg-[#CC584C] text-white shadow-lg' : 'bg-white/5 text-teal-100/60 hover:bg-white/10'}`}>
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Height (CM)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white focus:outline-none focus:border-[#CC584C] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Neck (CM)</label>
                <input type="number" value={neck} onChange={(e) => setNeck(e.target.value)} className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white focus:outline-none focus:border-[#CC584C] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Waist (CM)</label>
                <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white focus:outline-none focus:border-[#CC584C] transition-colors" />
              </div>
              
              {/* Conditional Hip Input for Females */}
              {gender === 'female' && (
                <div className="animate-in fade-in zoom-in duration-300">
                  <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Hip (CM)</label>
                  <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white focus:outline-none focus:border-[#CC584C] transition-colors" />
                </div>
              )}
            </div>

            <button onClick={calculateBodyFat} className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 shadow-lg mt-6">
              Calculate Fat %
            </button>
          </div>

          {/* Result Display */}
          {result && (
            <div className="mt-12 pt-8 border-t border-white/10 text-center animate-in fade-in slide-in-from-bottom-4">
              <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Estimated Body Fat</p>
              <div className="flex justify-center items-end gap-2">
                <span className="text-7xl font-black text-white leading-none">{result}</span>
                <span className="text-2xl font-bold text-[#CC584C] mb-2">%</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Beyond the Scale</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            While BMI gives a general overview, your Body Fat Percentage provides a much more accurate picture of your true fitness level. By calculating the ratio of adipose tissue (fat) to lean body mass (muscle, bones, and organs), you can better tailor your diet and training protocols.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">Understanding Fat Categories</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-3 h-1 bg-[#CC584C]"></div>
              <span><strong className="text-white">Essential Fat:</strong> The minimum amount required for basic physical and physiological health (Men: 2-5%, Women: 10-13%).</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-3 h-1 bg-green-500"></div>
              <span><strong className="text-white">Fitness Level:</strong> Indicates a lean, athletic physique with good muscle definition (Men: 14-17%, Women: 21-24%).</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-3 h-1 bg-yellow-500"></div>
              <span><strong className="text-white">Acceptable Range:</strong> A normal, healthy body composition for the general population (Men: 18-24%, Women: 25-31%).</span>
            </li>
          </ul>
          {/* Extended Content & Internal Linking */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">The Science Behind The U.S. Navy Method</h3>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-4">
              Our calculator utilizes the scientifically validated U.S. Navy Body Fat Formula. Instead of relying solely on your total weight, this method measures specific circumferences—your neck, waist, and hips—relative to your height. This approach is highly effective because excess fat tends to accumulate around the waistline (visceral fat) and hips (subcutaneous fat), whereas the neck circumference acts as a stable reference for your overall frame size.
            </p>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
              Knowing your fat percentage is critical for long-term metabolic health. High levels of visceral fat are strongly linked to cardiovascular issues and insulin resistance. Whether you are looking to optimize your athletic performance or embark on a weight loss journey, understanding your baseline body composition ensures you are targeting fat loss rather than losing valuable lean muscle mass.
            </p>

            {/* Contextual Internal Links */}
            <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-3">Optimize Your Health Journey</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/bmi" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">BMI Calculator</span>
                <span className="text-teal-100/60 text-xs">Get a quick overview of your weight-to-height ratio.</span>
              </Link>
              
              <Link href="/whr" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">WHR Calculator</span>
                <span className="text-teal-100/60 text-xs">Check your waist-to-hip ratio for heart health risks.</span>
              </Link>

              <Link href="/tdee" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">TDEE Calculator</span>
                <span className="text-teal-100/60 text-xs">Discover exactly how many calories you burn daily.</span>
              </Link>

              <Link href="/bioage" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Biological Age Tool</span>
                <span className="text-teal-100/60 text-xs">Find out how your lifestyle impacts your cellular aging.</span>
              </Link>
            </div>
          </div>
        </div>
    </main>
  );
}