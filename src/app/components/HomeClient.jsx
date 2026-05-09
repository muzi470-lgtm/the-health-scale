"use client";
import { 
  Droplets, Baby, Moon, Flame, Scale, Flower2, 
  Dna, Coffee, Sparkles, Scissors, Bed, Dumbbell, Activity 
} from 'lucide-react';

export default function HomeClient() {
  const tools = [
    { 
      title: "BMI Check", 
      desc: "Quickly calculate your Body Mass Index to see if your weight is in a healthy range for your height.", 
      link: "/bmi", 
      icon: <Scale size={24} /> 
    },
  { 
    title: "Water Intake", 
    desc: "Calculate exactly how much water you should drink daily based on your weight and physical activity levels.", 
    link: "/water", 
    icon: <Droplets size={24} /> 
  },
  { 
    title: "Pregnancy", 
    desc: "Estimate your baby's due date and track your progress through each trimester with specific timeline markers.", 
    link: "/pregnancy", 
    icon: <Baby size={24} /> 
  },
  { 
    title: "Sleep Cycle", 
    desc: "Discover the perfect time to wake up or fall asleep using 90-minute cycles to feel refreshed instead of groggy.", 
    link: "/deepsleep", 
    icon: <Moon size={24} /> 
  },
  { 
    title: "CALORIES", 
    desc: "Find out your maintenance calories and get a custom breakdown of protein, carbs, and fats for your fitness goals.", 
    link: "/tdee", 
    icon: <Activity size={24} /> 
  },
  { 
    title: "Body Fat", 
    desc: "Get an estimate of your body fat percentage using the scientific U.S. Navy formula and your body measurements.", 
    link: "/bodyfat", 
    icon: <Flame size={24} /> 
  },
  { 
    title: "WHR Ratio", 
    desc: "Check your health risk level by measuring how fat is distributed between your waist and hips.", 
    link: "/whr", 
    icon: <Scale size={24} /> 
  },
  { 
    title: "Ovulation", 
    desc: "Identify your peak fertile window and predict your next period date to manage your reproductive health easily.", 
    link: "/ovulation", 
    icon: <Flower2 size={24} /> 
  },
  { 
    title: "Bio Age", 
    desc: "See how fast your body is aging compared to your real age by analyzing your stress, diet, and exercise habits.", 
    link: "/bioage", 
    icon: <Dna size={24} /> 
  },
  { 
    title: "Caffeine", 
    desc: "Find your maximum safe caffeine dose and get a hard cutoff time to ensure caffeine doesn't ruin your sleep.", 
    link: "/caffeine", 
    icon: <Coffee size={24} /> 
  },
  { 
    title: "Skincare", 
    desc: "Learn which ingredients to use (like Hyaluronic Acid) based on your skin type and the current local humidity.", 
    link: "/skincare", 
    icon: <Sparkles size={24} /> 
  },
  { 
    title: "Hair Analysis", 
    desc: "Monitor your daily hair loss and see if your shedding is normal or linked to factors like iron deficiency.", 
    link: "/hairhealth", 
    icon: <Scissors size={24} /> 
  },
  { 
    title: "Deep Sleep", 
    desc: "Analyze your sleep quality to see how well your body is releasing recovery hormones for better health.", 
    link: "/hormonesleep", 
    icon: <Bed size={24} /> 
  },
  { 
    title: "Workout", 
    desc: "Follow a structured 5-day exercise routine with specific sets, reps, and form tips to transform your physique.", 
    link: "/workout", 
    icon: <Dumbbell size={24} /> 
  }
];

 return (
    // Scrolling Fix: overflow-x-hidden apply kiya hai
// Tool page ka main tag aesa hona chahiye:
<main className="min-h-screen bg-[#0B2A2D] overflow-x-hidden pt-32 pb-20">      
      {/* Background Animated Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#CC584C]/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#2C5E3B]/20 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* Header Section */}
        <header className="mb-24 flex flex-col items-start">
          <div className="bg-[#133A3F] text-teal-100 border border-[#1A4F55] px-5 py-1.5 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 rounded-full shadow-sm">
            Curated Wellness Collection
          </div>
          
          {/* Naya Main Title Yahan Hai */}
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            THE DAILY<br /><span className="text-[#CC584C]">SCALE.</span>
          </h1>
          
          <p className="mt-8 text-teal-100/70 max-w-sm font-medium leading-relaxed">
            A meticulously crafted suite of health utilities, designed for balance, precision, and elegance.
          </p>
        </header>

        {/* The Grid... (Yahan se aapka aagay ka purana code wesa hi rahega) */}
        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              // Dark Glassmorphism Cards
              className="group relative p-6 md:p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 hover:border-[#CC584C]/50 hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col justify-between h-[220px] md:h-[260px]"
            >
              <div>
                {/* Terracotta Icons */}
                <div className="mb-6 p-3 rounded-2xl inline-block bg-[#CC584C]/20 text-[#CC584C] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#CC584C] group-hover:text-white group-hover:shadow-lg">
                  {tool.icon}
                </div>
                
                {/* White Typography for Dark Mode */}
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight transition-colors">
                  {tool.title}
                </h2>
                <p className="text-[10px] font-bold text-teal-100/50 uppercase tracking-widest mt-2 line-clamp-3">
                  {tool.desc}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="flex justify-between items-center mt-4">
                <div className="h-[2px] w-8 bg-white/10 group-hover:bg-[#CC584C] transition-colors"></div>
                <div className="text-[10px] font-bold text-[#CC584C] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 tracking-widest uppercase">
                  Explore
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  )}