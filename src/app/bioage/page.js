"use client";
import { useState } from 'react';
import { Dna } from 'lucide-react';

export default function BiologicalAge() {
  const [actualAge, setActualAge] = useState('');
  const [stress, setStress] = useState('medium');
  const [diet, setDiet] = useState('average');
  const [exercise, setExercise] = useState('moderate');
  const [result, setResult] = useState(null);

  const calculateBioAge = () => {
    if (!actualAge) return;
    
    let age = parseInt(actualAge);
    let penalty = 0;

    // Stress Impact
    if (stress === 'high') penalty += 3;
    if (stress === 'low') penalty -= 2;

    // Diet Impact
    if (diet === 'poor') penalty += 4;
    if (diet === 'healthy') penalty -= 3;

    // Exercise Impact
    if (exercise === 'none') penalty += 5;
    if (exercise === 'high') penalty -= 4;

    const bioAge = age + penalty;
    const diff = bioAge - age;

    setResult({
      bioAge: bioAge,
      status: diff > 0 ? 'Older' : diff < 0 ? 'Younger' : 'Equal',
      diff: Math.abs(diff)
    });
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-28 pb-12 px-6">
      {/* Bioluminescent Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#2C5E3B]/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Dna className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            VITALITY <span className="text-[#CC584C]">SCORE.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Discover your body's true biological age
          </p>
        </div>

        {/* Yahan Snippet 2 aayega */}{/* Input Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-8">
            
            {/* Age Input */}
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2 text-center">
                Chronological Age
              </label>
              <input 
                type="number" 
                value={actualAge}
                onChange={(e) => setActualAge(e.target.value)}
                placeholder="e.g. 30"
                className="w-full bg-white/5 border border-white/10 py-6 px-4 rounded-2xl text-4xl text-center font-black text-white focus:outline-none focus:border-[#CC584C] transition-colors"
              />
            </div>

            {/* Lifestyle Selectors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Stress Level */}
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Stress Level</label>
                <select value={stress} onChange={(e) => setStress(e.target.value)} className="w-full bg-[#0B2A2D] text-white border border-white/10 py-3 px-4 rounded-xl text-sm focus:outline-none focus:border-[#CC584C] appearance-none">
                  <option value="low">Low (Chill)</option>
                  <option value="medium">Medium</option>
                  <option value="high">High (Anxious)</option>
                </select>
              </div>

              {/* Diet Quality */}
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Diet Quality</label>
                <select value={diet} onChange={(e) => setDiet(e.target.value)} className="w-full bg-[#0B2A2D] text-white border border-white/10 py-3 px-4 rounded-xl text-sm focus:outline-none focus:border-[#CC584C] appearance-none">
                  <option value="healthy">Clean / Whole Foods</option>
                  <option value="average">Mixed / Normal</option>
                  <option value="poor">Fast Food / Sugar</option>
                </select>
              </div>

              {/* Exercise Routine */}
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Exercise Routine</label>
                <select value={exercise} onChange={(e) => setExercise(e.target.value)} className="w-full bg-[#0B2A2D] text-white border border-white/10 py-3 px-4 rounded-xl text-sm focus:outline-none focus:border-[#CC584C] appearance-none">
                  <option value="none">None</option>
                  <option value="moderate">1-3 Days/Wk</option>
                  <option value="high">4+ Days/Wk</option>
                </select>
              </div>

            </div>

            <button onClick={calculateBioAge} className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 shadow-lg mt-6">
              Calculate Vitality
            </button>
          </div>

          {/* Results Display */}
          {result && (
            <div className="mt-12 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4">
              <div className="text-center">
                <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4">Your Biological Age Is</p>
                
                {/* Big Number */}
                <h2 className="text-7xl font-black text-white mb-6 drop-shadow-2xl">
                  {result.bioAge}
                </h2>

                {/* Status Pill */}
                <div className={`inline-block px-6 py-2 rounded-full border ${result.status === 'Younger' ? 'bg-[#2C5E3B]/20 border-[#2C5E3B]/50 text-[#2C5E3B]' : result.status === 'Older' ? 'bg-[#CC584C]/20 border-[#CC584C]/50 text-[#CC584C]' : 'bg-white/10 border-white/20 text-white'}`}>
                  <p className="text-xs font-bold uppercase tracking-widest">
                    {result.status === 'Equal' ? 'Matches Chronological Age' : `You are ${result.diff} years ${result.status.toLowerCase()}!`}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Decoding Your True Age</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            While your chronological age strictly counts the years you've been alive, your Biological Age reflects how your cells and organs are actually performing. It acts as the ultimate scorecard for your lifestyle choices, revealing whether you are aging faster or slower than average.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">Pillars of Longevity</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full border-2 border-green-400"></div>
              <span><strong className="text-white">Cellular Recovery:</strong> Quality deep sleep and active stress management can literally slow down cellular aging.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full border-2 border-[#CC584C]"></div>
              <span><strong className="text-white">Metabolic Health:</strong> A diet rich in antioxidants combined with regular cardiovascular exercise keeps your internal engine young.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full border-2 border-blue-400"></div>
              <span><strong className="text-white">Reversing the Clock:</strong> A higher biological age is a warning, not a life sentence. Consistent healthy habits can reverse this number over time.</span>
            </li>
          </ul>
        </div>
    </main>
  );
}