"use client";
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function SkincareGuide() {
  const [skinType, setSkinType] = useState('combination');
  const [humidity, setHumidity] = useState(50); // Default 50%
  const [result, setResult] = useState(null);

  const generateRoutine = () => {
    let focus = "";
    let avoid = "";
    let starIngredient = "";

    // Low Humidity (Dry Air)
    if (humidity < 40) {
      focus = "Heavy hydration and moisture trapping.";
      avoid = "Strong exfoliants and foaming cleansers that strip oils.";
      if (skinType === 'dry' || skinType === 'combination') {
        starIngredient = "Ceramides & Rich Occlusives";
      } else {
        starIngredient = "Lightweight Face Oils";
      }
    } 
    // Normal Humidity
    else if (humidity >= 40 && humidity <= 60) {
      focus = "Maintaining balance and protecting the skin barrier.";
      avoid = "Over-complicating the routine.";
      starIngredient = "Hyaluronic Acid (applied on damp skin)";
    } 
    // High Humidity (Humid/Sweaty)
    else {
      focus = "Pore-clearing and lightweight hydration.";
      avoid = "Heavy creams, occlusives, and facial oils.";
      if (skinType === 'oily' || skinType === 'combination') {
        starIngredient = "Salicylic Acid (BHA) & Niacinamide";
      } else {
        starIngredient = "Gel-based Moisturizers";
      }
    }

    setResult({ focus, avoid, starIngredient });
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-28 pb-12 px-6">
      {/* Soft Cyan/Spa Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Sparkles className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            SKINCARE <span className="text-[#CC584C]">SCIENCE.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Adapt your routine based on climate and humidity
          </p>
        </div>

        {/* Yahan Snippet 2 aayega */}{/* Input Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-10">
            
            {/* Skin Type Selection */}
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4 text-center">
                Base Skin Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['dry', 'combination', 'oily'].map((type) => (
                  <button key={type} onClick={() => setSkinType(type)} className={`py-4 rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${skinType === type ? 'bg-[#CC584C] text-white shadow-lg' : 'bg-white/5 text-teal-100/60 hover:bg-white/10'}`}>
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Range Slider (Humidity) */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em]">
                  Local Humidity Level
                </label>
                <span className="text-2xl font-black text-white">{humidity}%</span>
              </div>
              
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#CC584C]"
              />
              <div className="flex justify-between text-[8px] font-bold text-teal-100/40 uppercase tracking-widest mt-2">
                <span>Very Dry</span>
                <span>Normal</span>
                <span>Humid</span>
              </div>
            </div>

            <button onClick={generateRoutine} className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 shadow-lg">
              Generate Protocol
            </button>
          </div>

          {/* Routine Dashboard */}
          {result && (
            <div className="mt-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4 space-y-4">
              
              <div className="bg-[#CC584C]/10 border border-[#CC584C]/30 p-6 rounded-2xl text-center">
                <p className="text-[10px] font-bold text-[#CC584C] uppercase tracking-widest mb-2">Star Ingredient to Use</p>
                <h3 className="text-2xl font-black text-white">{result.starIngredient}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-bold text-[#2C5E3B] uppercase tracking-widest mb-2">Focus On</p>
                  <p className="text-sm font-medium text-teal-100/80 leading-relaxed">{result.focus}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2">Avoid</p>
                  <p className="text-sm font-medium text-teal-100/80 leading-relaxed">{result.avoid}</p>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">The Science of Skincare</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            A flawless complexion isn't just about buying expensive products; it's about understanding your skin's unique barrier and providing exactly what it needs. A structured routine balances hydration, protects against environmental damage, and promotes cellular turnover.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">The Holy Trinity of Skincare</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-300"></div>
              <span><strong className="text-white">Cleanse:</strong> Gently removing impurities, dirt, and excess sebum without stripping your skin's natural moisture barrier.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-pink-300"></div>
              <span><strong className="text-white">Treat:</strong> Applying targeted active ingredients (like Vitamin C or Retinol) to address specific concerns like hyperpigmentation or fine lines.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-300"></div>
              <span><strong className="text-white">Protect:</strong> Locking in hydration with a moisturizer and shielding your skin from aging UV rays with a broad-spectrum SPF.</span>
            </li>
          </ul>
        </div>
    </main>
  );
}