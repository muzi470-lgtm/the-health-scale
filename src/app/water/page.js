"use client";
import { useState } from 'react';
import { Droplets, Activity, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

export default function WaterCalculator() {
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('low');
  const [result, setResult] = useState(null);

  const calculateWater = () => {
    if (!weight) return;
    let base = weight * 35; // 35ml per kg
    if (activity === 'medium') base += 500;
    if (activity === 'high') base += 1000;
    setResult((base / 1000).toFixed(1)); // Convert to Liters
  };

  return (
    // Same Deep Sea Teal Background with Glows
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-28 pb-12 px-6">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2C5E3B]/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Back Button & Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Droplets className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            HYDRATION <span className="text-[#CC584C]">LOGIC.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Calculate your precise daily water intake
          </p>
        </div>

        {/* Premium Glassmorphic Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          
          <div className="space-y-8">
            {/* Input Field */}
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-3">
                Your Weight (KG)
              </label>
              <input 
                type="number" 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 65"
                className="w-full bg-transparent border-b-2 border-white/10 py-4 text-3xl font-black text-white placeholder-white/20 focus:outline-none focus:border-[#CC584C] transition-colors"
              />
            </div>

            {/* Aesthetic Radio Buttons (Activity Level) */}
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4">
                Daily Activity Level
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['low', 'medium', 'high'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setActivity(level)}
                    className={`py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${activity === level ? 'bg-[#CC584C] text-white shadow-lg' : 'bg-white/5 text-teal-100/60 hover:bg-white/10'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <button 
              onClick={calculateWater}
              className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(204,88,76,0.3)] mt-4"
            >
              Analyze Intake
            </button>
          </div>

          {/* Result Section (Smoothly appears) */}
          {result && (
            <div className="mt-12 pt-8 border-t border-white/10 text-center animate-in fade-in slide-in-from-bottom-4">
              <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Optimal Daily Target</p>
              <div className="flex justify-center items-end gap-2">
                <span className="text-7xl font-black text-white leading-none">{result}</span>
                <span className="text-2xl font-bold text-[#CC584C] mb-2">Liters</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">The Science of Hydration</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            Water is the foundation of your body's daily functions. From regulating temperature to delivering essential nutrients, staying optimally hydrated is non-negotiable for peak performance. Your exact requirement shifts based on your body mass and how actively you move throughout the day.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">Why Accuracy Matters</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#CC584C]"></div>
              <span><strong className="text-white">Energy Levels:</strong> Even mild dehydration can cause significant fatigue and brain fog.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#CC584C]"></div>
              <span><strong className="text-white">Metabolism:</strong> Proper water intake helps maintain a healthy metabolic rate for fitness goals.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#CC584C]"></div>
              <span><strong className="text-white">Skin Health:</strong> Consistent hydration flushes out toxins, acting as your best natural skincare.</span>
            </li>
          </ul>
          {/* Extended Content & Fresh Internal Linking */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">The Systemic Impact of Hydration</h3>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-4">
              Water is the ultimate biological solvent. Beyond simply quenching thirst, precise fluid intake dictates your blood viscosity, which directly impacts how effectively oxygen and vital macronutrients are delivered to your muscle tissues during a workout. If you are operating in a caloric deficit (calculated via your TDEE), drinking enough water is crucial because it facilitates the liver's ability to metabolize stored fat into usable energy.
            </p>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
              Furthermore, chronological aging and cellular degradation are accelerated by chronic, low-grade dehydration. Your hair follicles require immense hydration to prevent brittle snapping, while your epidermal cells rely on intracellular water to maintain elasticity and prevent premature wrinkling. To truly maximize your health protocols, hydration must be synchronized with your diet, skincare, and physical training.
            </p>

            {/* Contextual Internal Links (New Tools) */}
            <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-3">Synchronize Your Health Protocols</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/tdee" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">TDEE Calories</span>
                <span className="text-teal-100/60 text-xs">Hydration naturally boosts your basal metabolic rate.</span>
              </Link>
              
              <Link href="/workout" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Workout Planner</span>
                <span className="text-teal-100/60 text-xs">Prevent muscle cramps and fatigue during training.</span>
              </Link>

              <Link href="/skincare" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Skincare Guide</span>
                <span className="text-teal-100/60 text-xs">Combine topical creams with deep internal hydration.</span>
              </Link>

              <Link href="/hairhealth" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Hair Vitality</span>
                <span className="text-teal-100/60 text-xs">Support follicle strength by meeting water targets.</span>
              </Link>
            </div>
          </div>
        </div>
    </main>
  );
}