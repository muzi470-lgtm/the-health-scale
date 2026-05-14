"use client";
import { useState } from 'react';
import { Dumbbell, Target, Layers, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdvancedWorkout() {
  const [activeTab, setActiveTab] = useState("home_loss");
  const [day, setDay] = useState(1);

  const workoutData = {
    home_loss: {
      title: "Home Fat Burn",
      schedule: {
        1: [
          { name: "Jumping Jacks", pos: "Standing", reps: "60 Secs", sets: "4", detail: "Stand with feet together. Jump while spreading legs and clapping hands above head. Return and repeat rapidly to keep heart rate high." },
          { name: "Burpees", pos: "Full Body", reps: "12 Reps", sets: "3", detail: "Drop into a squat, kick feet back to plank, do a push-up, jump feet forward, and jump up explosively. Maintain fluid motion." },
          { name: "High Knees", pos: "Standing", reps: "60 Secs", sets: "4", detail: "Run in place while bringing knees up to hip height. Pump your arms and stay on the balls of your feet." },
          { name: "Mountain Climbers", pos: "Plank Position", reps: "45 Secs", sets: "4", detail: "In a high plank, drive knees toward chest alternately and quickly. Keep your back flat and don't let hips bounce." },
          { name: "Squat Jumps", pos: "Standing", reps: "15 Reps", sets: "3", detail: "Perform a standard squat, then jump up as high as possible. Land softly on mid-foot and go straight into the next rep." },
          { name: "Plank Jacks", pos: "Floor", reps: "45 Secs", sets: "3", detail: "In a forearm plank, jump your feet out and in like a jumping jack. Keep your core extremely tight." }
        ],
        2: [
          { name: "Push-ups", pos: "Floor", reps: "15 Reps", sets: "4", detail: "Keep hands slightly wider than shoulders. Lower chest to floor and push back up. Keep body in a straight line." },
          { name: "Bicycle Crunches", pos: "Lying Down", reps: "25 Reps", sets: "4", detail: "Lie on back, hands behind head. Bring opposite elbow to opposite knee in a pedaling motion. Engage your obliques." },
          { name: "Walking Lunges", pos: "Standing", reps: "20 Reps", sets: "3", detail: "Step forward and lower hips until both knees are at 90 degrees. Step through with the other leg. Keep torso upright." },
          { name: "Leg Raises", pos: "Lying Down", reps: "15 Reps", sets: "3", detail: "Lie flat, lift legs to 90 degrees without bending knees. Lower them slowly without touching the floor." },
          { name: "Plank Hold", pos: "Floor", reps: "60 Secs", sets: "4", detail: "Maintain a straight line from head to heels on your forearms. Squeeze glutes and core to avoid back pain." },
          { name: "Flutter Kicks", pos: "Lying Down", reps: "45 Secs", sets: "3", detail: "Lift feet slightly off the ground and kick them up and down rapidly. Keep lower back pressed into the floor." }
        ],
        3: [{ name: "Active Recovery Day", pos: "Rest", reps: "30-40 Mins", sets: "1", detail: "Focus on deep stretching, yoga, or a long brisk walk. Recovery is key for fat loss results." }],
        4: [
          { name: "Inchworms", pos: "Standing to Plank", reps: "12 Reps", sets: "3", detail: "From standing, fold forward and walk hands out to a plank, then walk feet toward hands. Keep legs as straight as possible." },
          { name: "Skaters", pos: "Standing", reps: "45 Secs", sets: "4", detail: "Jump sideways to one foot, landing with the other leg behind. Swing arms like a speed skater for balance and speed." },
          { name: "Diamond Push-ups", pos: "Floor", reps: "10 Reps", sets: "3", detail: "Place hands together under chest forming a diamond shape. Lower and push up. Focuses heavily on triceps." },
          { name: "Sit-ups", pos: "Lying Down", reps: "20 Reps", sets: "4", detail: "Classic sit-up. Use your core to lift your torso toward your knees. Avoid pulling your neck with your hands." },
          { name: "Glute Bridges", pos: "Lying Down", reps: "20 Reps", sets: "3", detail: "Lie on back, knees bent. Lift hips toward ceiling, squeeze glutes at the top, and lower slowly." },
          { name: "Tuck Jumps", pos: "Standing", reps: "10 Reps", sets: "3", detail: "Jump up and pull your knees toward your chest as high as possible. Land softly with knees slightly bent." }
        ],
        5: [
          { name: "Commandos", pos: "Plank", reps: "12 Reps", sets: "4", detail: "Start in forearm plank, push up to high plank one hand at a time, then lower back down. Minimize hip rocking." },
          { name: "Reverse Lunges", pos: "Standing", reps: "12 each leg", sets: "3", detail: "Step one foot back and lower knee toward floor. Better for knee health than forward lunges." },
          { name: "Russian Twists", pos: "Sitting", reps: "30 Reps", sets: "4", detail: "Sit with knees bent, feet slightly off floor. Rotate torso to touch floor on each side. Hold a weight for extra challenge." },
          { name: "Side Plank", pos: "Floor", reps: "30 Secs each", sets: "3", detail: "Lie on your side, lift hips on one forearm. Hold straight. Switch sides. Focuses on side abdominal muscles." },
          { name: "Star Jumps", pos: "Standing", reps: "12 Reps", sets: "3", detail: "Crouch down, then explode into the air spreading arms and legs into a star shape. Land softly." },
          { name: "Cool Down Stretch", pos: "Floor", reps: "5 Mins", sets: "1", detail: "Slowly stretch hamstrings, quads, back, and shoulders to lower heart rate and improve flexibility." }
        ]
      }
    },
    gym_gain: {
      title: "Gym Muscle Build",
      schedule: {
        1: [
          { name: "Barbell Squats", pos: "Standing", reps: "8-10 Reps", sets: "4", detail: "Barbell on traps. Sit back until parallel. Drive up through heels. Essential for overall leg mass." },
          { name: "Leg Press", pos: "Seated", reps: "12 Reps", sets: "3", detail: "Feet shoulder-width on platform. Lower under control. Don't lock knees at the top." },
          { name: "Leg Extensions", pos: "Seated", reps: "15 Reps", sets: "3", detail: "Isolate quads. Squeeze at the top of the movement and lower slowly." },
          { name: "Hamstring Curls", pos: "Seated/Lying", reps: "12 Reps", sets: "3", detail: "Focus on the back of the legs. Control the weight and feel the stretch." },
          { name: "Calf Raises", pos: "Standing", reps: "20 Reps", sets: "4", detail: "Stand on edge of a step. Go all the way down for a stretch, then all the way up on toes." },
          { name: "Walking Lunges (Weights)", pos: "Standing", reps: "12 each leg", sets: "3", detail: "Hold dumbbells at sides. Step forward and lower. Targets glutes and quads." }
        ],
        2: [
          { name: "Bench Press", pos: "Lying", reps: "8 Reps", sets: "4", detail: "Bar to mid-chest. Press up with power. Keep shoulder blades tucked into the bench." },
          { name: "Incline Dumbbell Press", pos: "Incline Bench", reps: "10 Reps", sets: "3", detail: "Targets upper chest. Lower weights to shoulder level and press up." },
          { name: "Cable Flys", pos: "Standing", reps: "15 Reps", sets: "3", detail: "Focus on the chest squeeze. Keep a slight bend in elbows. Controlled movement." },
          { name: "Shoulder Press (Dumbbell)", pos: "Seated", reps: "10 Reps", sets: "4", detail: "Press weights from shoulder height to full extension overhead. Sit upright." },
          { name: "Lateral Raises", pos: "Standing", reps: "15 Reps", sets: "3", detail: "Light weights. Raise arms out to sides to shoulder level. Key for wide shoulders." },
          { name: "Tricep Pushdowns", pos: "Standing", reps: "12 Reps", sets: "4", detail: "Use cable machine. Keep elbows at sides and push bar down to full extension." }
        ],
        3: [{ name: "Recovery Day", pos: "Rest", reps: "N/A", sets: "N/A", detail: "Full rest day. Focus on protein intake and sleep to allow muscles to repair and grow." }],
        4: [
          { name: "Deadlifts", pos: "Standing", reps: "6 Reps", sets: "4", detail: "Conventional pull. Flat back, bar close to shins. Drive through legs and hips. Power movement." },
          { name: "Lat Pulldowns", pos: "Seated", reps: "10 Reps", sets: "4", detail: "Pull bar to upper chest. Squeeze shoulder blades. Avoid leaning back too much." },
          { name: "Seated Cable Rows", pos: "Seated", reps: "12 Reps", sets: "3", detail: "Pull handle to stomach. Squeeze back muscles. Keep spine neutral." },
          { name: "Dumbbell Rows", pos: "One-arm Bench", reps: "10 each arm", sets: "3", detail: "Pull weight to hip. Feel the stretch at the bottom. Keep core stable." },
          { name: "Barbell Curls", pos: "Standing", reps: "12 Reps", sets: "3", detail: "Strict form curls. No swinging. Squeeze biceps at the top." },
          { name: "Face Pulls", pos: "Standing", reps: "15 Reps", sets: "3", detail: "Cable to forehead. Pull rope apart. Excellent for rear delts and posture." }
        ],
        5: [
          { name: "Overhead Press (Barbell)", pos: "Standing", reps: "8 Reps", sets: "4", detail: "Full body stability. Press bar from shoulders to overhead. Keep core locked." },
          { name: "Dips", pos: "Parallel Bars", reps: "Failure", sets: "3", detail: "Lower body until elbows are at 90 degrees. Push back up. Targets triceps and lower chest." },
          { name: "Hammer Curls", pos: "Standing", reps: "12 Reps", sets: "3", detail: "Dumbbells with neutral grip (palms facing each other). Builds forearm and bicep thickness." },
          { name: "Rear Delt Flys", pos: "Seated/Bent Over", reps: "15 Reps", sets: "3", detail: "Light weights. Focus on the back of the shoulders. Squeeze at the top." },
          { name: "Close Grip Bench Press", pos: "Lying", reps: "10 Reps", sets: "3", detail: "Hands shoulder-width apart. Focus on tricep power during the press." },
          { name: "Core Finisher (Hanging Raises)", pos: "Hanging", reps: "15 Reps", sets: "3", detail: "Hang from bar and lift knees or straight legs to hip level. Controlled movement." }
        ]
      }
    }
  };

  const currentPlan = workoutData[activeTab];

  return (
    <main className="relative min-h-screen bg-[#0B2A2D] overflow-hidden font-sans pt-20 pb-12 px-6">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CC584C]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2C5E3B]/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-teal-100/60 font-bold mb-10 hover:text-[#CC584C] transition-colors text-[10px] uppercase tracking-widest">
          <ChevronLeft size={16} /> Back to Hub
        </Link>

        {/* Categories (60-30-10 Logic) */}
        <div className="flex gap-4 mb-10 overflow-x-auto no-scrollbar">
          {Object.keys(workoutData).map((key) => (
            <button
              key={key}
              onClick={() => {setActiveTab(key); setDay(1);}}
              className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all whitespace-nowrap shadow-xl ${activeTab === key ? "bg-[#CC584C] text-white" : "bg-white/5 text-teal-100/60 border border-white/10"}`}
            >
              {workoutData[key].title}
            </button>
          ))}
        </div>

        {/* Day Selector (Premium Glassmorphism) */}
        <div className="flex justify-between bg-white/5 backdrop-blur-md p-2 rounded-3xl mb-12 border border-white/10 shadow-2xl">
          {[1, 2, 3, 4, 5].map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={`flex-1 py-4 rounded-2xl font-black text-[10px] transition-all tracking-widest ${day === d ? "bg-white text-[#0B2A2D] scale-105 shadow-xl" : "text-teal-100/30"}`}
            >
              DAY {d}
            </button>
          ))}
        </div>

        {/* Detailed Exercise Cards */}
        <div className="space-y-8">
          {currentPlan.schedule[day] && currentPlan.schedule[day].map((ex, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl group hover:border-[#CC584C]/30 transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <span className="text-[10px] font-black text-[#CC584C] uppercase tracking-[0.3em] mb-3 block">{ex.pos}</span>
                  <h3 className="text-4xl font-black text-white leading-tight tracking-tighter">{ex.name}</h3>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/5 px-6 py-3 rounded-2xl border border-white/5 text-center min-w-[80px]">
                    <p className="text-[9px] font-bold text-teal-100/40 uppercase tracking-widest mb-1">Sets</p>
                    <p className="text-2xl font-black text-white">{ex.sets}</p>
                  </div>
                  <div className="bg-white/5 px-6 py-3 rounded-2xl border border-white/5 text-center min-w-[100px]">
                    <p className="text-[9px] font-bold text-teal-100/40 uppercase tracking-widest mb-1">Target</p>
                    <p className="text-2xl font-black text-white">{ex.reps}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#CC584C]/5 p-6 md:p-8 rounded-[2rem] border-l-4 border-[#CC584C]">
                <div className="flex items-center gap-2 mb-3">
                  <Target size={14} className="text-[#CC584C]" />
                  <p className="text-[10px] font-bold text-[#CC584C] uppercase tracking-[0.2em]">Technique & Form</p>
                </div>
                <p className="text-teal-100/70 text-sm md:text-base leading-relaxed font-medium">
                  {ex.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Footer */}
        <footer className="mt-20 py-10 border-t border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Layers className="text-[#CC584C]" size={20} />
            <p className="text-[10px] font-black text-teal-100/40 uppercase tracking-[0.4em]">Elite Training V3.0</p>
          </div>
          <p className="text-[10px] font-bold text-[#2C5E3B] uppercase tracking-widest italic animate-pulse">Stay Consistent.</p>
        </footer>
      </div>
      {/* SEO Information Section - Premium Dark Box */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg hover:border-[#CC584C]/30 transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">The Science of Hypertrophy</h2>
          <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
            Building muscle and endurance isn't about random exercises; it's about structured stimulus and strategic recovery. When you apply stress to your muscles, micro-tears form. The actual growth happens outside the gym during your recovery and sleep phases.
          </p>
          
          <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-4">Core Training Principles</h3>
          <ul className="text-teal-100/70 text-sm space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-sm bg-orange-500"></div>
              <span><strong className="text-white">Progressive Overload:</strong> Gradually increasing the weight, frequency, or number of repetitions in your training routine to constantly challenge your body.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-sm bg-teal-500"></div>
              <span><strong className="text-white">Optimal Volume:</strong> Hitting the right amount of sets per muscle group weekly to trigger growth without causing overtraining or central nervous system fatigue.</span>
            </li>
          </ul>
          {/* Extended Content & Fresh Internal Linking */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">Fueling & Recovery Mechanisms</h3>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-4">
              A grueling workout protocol depletes your intracellular glycogen stores and causes minor muscle tissue damage. To repair this tissue (Muscle Protein Synthesis), your body requires a precise surplus of macronutrients—specifically high-quality protein and carbohydrates. Calculating your exact Daily Energy Expenditure (TDEE) is mandatory; otherwise, you risk either losing hard-earned muscle mass from a severe caloric deficit or gaining unwanted visceral fat from a careless bulk.
            </p>
            <p className="text-teal-100/70 text-sm leading-relaxed mb-6">
              Equally critical is the role of deep sleep and hydration. Water acts as the transport system for amino acids to reach torn muscle fibers, preventing severe DOMS (Delayed Onset Muscle Soreness). Meanwhile, human growth hormone (HGH)—the ultimate catalyst for muscular repair—is primarily secreted during the deepest stages of your sleep cycle. Treat your kitchen and your bed with the same intensity as your workouts.
            </p>

            {/* Contextual Internal Links (New Tools) */}
            <h3 className="text-sm font-bold text-[#CC584C] uppercase tracking-widest mb-3">Optimize Your Training Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/tdee" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">TDEE Macros</span>
                <span className="text-teal-100/60 text-xs">Calculate the exact protein and carbs needed for muscle repair.</span>
              </Link>
              
              <Link href="/water" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Hydration Tracker</span>
                <span className="text-teal-100/60 text-xs">Prevent cramps and speed up amino acid delivery to muscles.</span>
              </Link>

              <Link href="/deepsleep" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Deep Sleep Target</span>
                <span className="text-teal-100/60 text-xs">Maximize growth hormone release for faster recovery.</span>
              </Link>

              <Link href="/whr" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#CC584C]/50 transition-all">
                <span className="block text-white font-bold mb-1">Fat Distribution</span>
                <span className="text-teal-100/60 text-xs">Track how your workouts are actively reducing visceral fat.</span>
              </Link>
            </div>
          </div>
        </div>
    </main>
  );
}