"use client";
import { useState } from 'react';
import { Activity } from 'lucide-react';
import Link from 'next/link';

export default function TDEECalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('1.2');
  const [result, setResult] = useState(null);

  const calculateTDEE = () => {
    if (!age || !weight || !height) return;
    
    // Mifflin-St Jeor Equation
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
    
    const tdee = Math.round(bmr * parseFloat(activity));
    
    setResult({
      calories: tdee,
      protein: Math.round((tdee * 0.30) / 4), // 30% protein (4 cals/g)
      fats: Math.round((tdee * 0.30) / 9),    // 30% fats (9 cals/g)
      carbs: Math.round((tdee * 0.40) / 4)    // 40% carbs (4 cals/g)
    });
  };

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-28 pb-12 px-6">
      {/* Aesthetic Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2C5E3B]/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10 shadow-lg">
            <Activity className="text-[#CC584C]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            CALORIES <span className="text-[#CC584C]">ENGINE.</span>
          </h1>
          <p className="text-teal-100/60 text-sm font-medium tracking-widest uppercase">
            Calculate your precise daily caloric & macro needs
          </p>
        </div>

        {/* Glassmorphic Form Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl">
          <div className="space-y-8">
            
            {/* Gender Selection */}
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4">Biological Sex</label>
              <div className="flex gap-4">
                {['male', 'female'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`flex-1 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${gender === g ? 'bg-[#CC584C] text-white shadow-lg' : 'bg-white/5 text-teal-100/60 hover:bg-white/10'}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Age (Yrs)</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="e.g. 25" className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white placeholder-white/20 focus:outline-none focus:border-[#CC584C] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Weight (KG)</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g. 70" className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white placeholder-white/20 focus:outline-none focus:border-[#CC584C] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Height (CM)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 175" className="w-full bg-transparent border-b-2 border-white/10 py-3 text-2xl font-black text-white placeholder-white/20 focus:outline-none focus:border-[#CC584C] transition-colors" />
              </div>
            </div>

            {/* Activity Selection */}
            <div>
              <label className="block text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-4">Activity Level</label>
              <select 
                value={activity} 
                onChange={(e) => setActivity(e.target.value)}
                className="w-full bg-[#0B2A2D] text-white border border-white/10 py-4 px-4 rounded-xl text-sm focus:outline-none focus:border-[#CC584C] appearance-none"
              >
                <option value="1.2">Sedentary (Little to no exercise)</option>
                <option value="1.375">Lightly Active (Exercise 1-3 days/wk)</option>
                <option value="1.55">Moderately Active (Exercise 3-5 days/wk)</option>
                <option value="1.725">Very Active (Exercise 6-7 days/wk)</option>
              </select>
            </div>

            {/* Analyze Button */}
            <button 
              onClick={calculateTDEE}
              className="w-full bg-white text-[#0B2A2D] font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-[#CC584C] hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(204,88,76,0.3)] mt-6"
            >
              Calculate Macros
            </button>
          </div>

          {/* Results Dashboard */}
          {result && (
            <div className="mt-12 pt-10 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4">
              <div className="text-center mb-8">
                <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-[0.2em] mb-2">Maintenance Calories</p>
                <div className="flex justify-center items-end gap-2">
                  <span className="text-7xl font-black text-white leading-none">{result.calories}</span>
                  <span className="text-xl font-bold text-[#CC584C] mb-2">kcal</span>
                </div>
              </div>

              {/* Macro Split Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/5 hover:border-[#CC584C]/30 transition-colors">
                  <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-1">Protein</p>
                  <p className="text-2xl font-black text-white">{result.protein}g</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/5 hover:border-[#CC584C]/30 transition-colors">
                  <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-1">Fats</p>
                  <p className="text-2xl font-black text-white">{result.fats}g</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/5 hover:border-[#CC584C]/30 transition-colors">
                  <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mb-1">Carbs</p>
                  <p className="text-2xl font-black text-white">{result.carbs}g</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Decoding Your Metabolism</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            Your Total Daily Energy Expenditure (TDEE) represents the total number of calories your body burns in a 24-hour period. It combines your Basal Metabolic Rate (the energy needed just to stay alive) with the calories you burn through daily movement and exercise.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">How to Use Your Numbers</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rotate-45 bg-[#CC584C]"></div>
              <span><strong className="text-white">To Lose Weight (Cut):</strong> Aim for a caloric deficit by consuming 300-500 calories less than your maintenance level.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rotate-45 bg-teal-500"></div>
              <span><strong className="text-white">To Maintain Weight:</strong> Eat exactly at your calculated maintenance (TDEE) level to keep your scale steady.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rotate-45 bg-yellow-500"></div>
              <span><strong className="text-white">To Gain Muscle (Bulk):</strong> Create a caloric surplus by adding 200-500 calories above your maintenance level.</span>
            </li>
          </ul>
          {/* Extended Content & Fresh Internal Linking */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">The Science of Energy Balance</h3>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-4">
              Our calculator uses the highly accurate Mifflin-St Jeor equation to establish your baseline energy needs. However, reaching your fitness goals isn't just about counting raw calories; it's about optimizing your macronutrient split. Protein is essential for muscle protein synthesis and has the highest Thermic Effect of Food (TEF), meaning your body burns more calories simply digesting it. Healthy fats are critical for hormone production, while carbohydrates are your body's preferred fuel source for high-intensity workouts.
            </p>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
              Before adjusting your caloric intake, it is highly recommended to understand your starting body composition. A heavy weightlifter and a sedentary person might have the same BMI but completely different body fat percentages, which drastically changes how they should structure their diet. Always pair your nutritional adjustments with a structured training protocol to ensure you are losing fat, not valuable lean muscle mass.
            </p>

            {/* Contextual Internal Links (New Tools) */}
            <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-3">Complete Your Fitness Protocol</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/bodyfat" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Body Fat %</span>
                <span className="text-teal-100/60 text-xs">Determine your lean mass before starting a cut or bulk.</span>
              </Link>
              
              <Link href="/workout" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Workout Planner</span>
                <span className="text-teal-100/60 text-xs">Put those calories to work with a structured routine.</span>
              </Link>

              <Link href="/bmi" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">BMI Calculator</span>
                <span className="text-teal-100/60 text-xs">Check your general weight category as a starting point.</span>
              </Link>

              <Link href="/water" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Hydration Targets</span>
                <span className="text-teal-100/60 text-xs">Ensure optimal metabolism with adequate daily water.</span>
              </Link>
            </div>
          </div>
        </div>
    </main>
  );
}