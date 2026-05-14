"use client";
import { useState } from 'react';
import { Scale, ChevronLeft, Info } from 'lucide-react';
import Link from 'next/link';
// src/app/bmi/page.js

import { /* aapke imports */ } from 'react';


export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) return;

    const hInMeters = parseFloat(height) / 100;
    const bmi = (parseFloat(weight) / (hInMeters * hInMeters)).toFixed(1);
    
    let status = "";
    let color = "";

    if (bmi < 18.5) { status = "Underweight"; color = "text-amber-500"; }
    else if (bmi >= 18.5 && bmi <= 24.9) { status = "Healthy"; color = "text-[#2C5E3B]"; }
    else if (bmi >= 25 && bmi <= 29.9) { status = "Overweight"; color = "text-amber-600"; }
    else { status = "Obese"; color = "text-[#CC584C]"; }

    setResult({ bmi, status, color });
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-20 pb-12 px-6">
      {/* Deep Sea Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2C5E3B]/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-teal-100/60 font-bold mb-10 hover:text-[#CC584C] transition-colors text-[10px] uppercase tracking-widest">
          <ChevronLeft size={16} /> Back to Hub
        </Link>

        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Scale className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            BODY <span className="text-[#CC584C]">INDEX.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Quickly assess your body mass and health category
          </p>
        </div>

        {/* Yahan Snippet 2 aayega */}{/* Glassmorphic Input Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Weight (KG)</label>
                <input 
                  type="number" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)} 
                  placeholder="70"
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 text-3xl font-black text-white placeholder-white/10 focus:outline-none focus:border-[#CC584C] transition-colors" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Height (CM)</label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)} 
                  placeholder="175"
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 text-3xl font-black text-white placeholder-white/10 focus:outline-none focus:border-[#CC584C] transition-colors" 
                />
              </div>
            </div>

            <button 
              onClick={calculateBMI} 
              className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 shadow-xl"
            >
              Calculate BMI
            </button>
          </div>

          {/* Results Display */}
          {result && (
            <div className="mt-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4">
              <div className="text-center">
                <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4">Your BMI Result</p>
                
                <h2 className="text-8xl font-black text-white mb-4 tracking-tighter">
                  {result.bmi}
                </h2>

                <div className="inline-flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full border border-white/10">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${result.status === 'Healthy' ? 'bg-[#2C5E3B]' : 'bg-[#CC584C]'}`}></div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${result.color}`}>
                    Category: {result.status}
                  </p>
                </div>

                <div className="mt-8 p-6 bg-white/5 rounded-3xl border border-white/5 flex items-start gap-4 text-left">
                  <Info size={20} className="text-[#CC584C] shrink-0" />
                  <p className="text-xs text-teal-100/50 leading-relaxed font-medium">
                    BMI is a general indicator. For a more detailed analysis, we recommend using our <b>Body Fat %</b> and <b>WHR Ratio</b> tools to understand your body composition better.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Understanding Your BMI</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            Body Mass Index (BMI) is a simple, scientific way to evaluate if your weight is well-balanced with your height. 
            While it doesn't measure body fat directly, it serves as a highly effective starting point to understand your overall health trajectory.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">The Daily Scale Categories</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span><strong className="text-white">Under 18.5:</strong> Underweight — Focus on nutrient-dense foods to build healthy mass.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span><strong className="text-white">18.5 - 24.9:</strong> Normal Weight — Excellent balance! Maintain your current lifestyle.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span><strong className="text-white">25.0 - 29.9:</strong> Overweight — A slight caloric deficit could help optimize your scale.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span><strong className="text-white">30.0 & Above:</strong> Obese — Consider consulting a health professional for a tailored plan.</span>
            </li>
          </ul>
          {/* Extended Content & Internal Linking */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Beyond The BMI Scale</h3>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-4">
              While BMI is a globally recognized standard for categorizing health risks, it's important to understand its limitations. The Body Mass Index calculates your physical mass relative to your height, but it does not differentiate between lean muscle mass, bone density, and visceral fat. For instance, athletes or bodybuilders with high muscle mass might be classified as "overweight" or "obese" despite having very low body fat levels.
            </p>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
              For a comprehensive view of your physiological health, BMI should be used alongside other metrics. Evaluating your body fat percentage and metabolic rate provides a much clearer picture of your internal health. If you are starting a fitness journey, tracking changes in your body composition over time is far more valuable than simply watching the scale.
            </p>

            {/* Contextual Internal Links */}
            <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-3">Next Steps: Complete Your Body Profile</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/bodyfat" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Body Fat Calculator</span>
                <span className="text-teal-100/60 text-xs">Find out how much of your weight is actual fat.</span>
              </Link>
              
              <Link href="/whr" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">WHR Calculator</span>
                <span className="text-teal-100/60 text-xs">Assess your heart disease risk using waist-to-hip ratio.</span>
              </Link>

              <Link href="/tdee" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">TDEE Calculator</span>
                <span className="text-teal-100/60 text-xs">Calculate your daily calorie needs for weight goals.</span>
              </Link>

              <Link href="/bioage" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Biological Age Tool</span>
                <span className="text-teal-100/60 text-xs">See if your body is aging faster than your real age.</span>
              </Link>
            </div>
          </div>
        </div>
    </main>
  );
}