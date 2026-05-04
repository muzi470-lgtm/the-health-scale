"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, ChevronDown, LayoutGrid } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  // Main navigation links (The ones you wanted front-and-center)
  const mainLinks = [
    { name: "BMI Check", path: "/bmi" },
    { name: "Skincare", path: "/skincare" },
    { name: "Sleep Cycle", path: "/deepsleep" },
  ];

  // All other tools for the dropdown menu
  const otherTools = [
    { name: "Home", path: "/" },
    { name: "Water Intake", path: "/water" },
    { name: "Pregnancy", path: "/pregnancy" },
    { name: "Calories & Macros", path: "/tdee" },
    { name: "Body Fat %", path: "/bodyfat" },
    { name: "WHR Ratio", path: "/whr" },
    { name: "Ovulation Tracker", path: "/ovulation" },
    { name: "Bio Age", path: "/bioage" },
    { name: "Caffeine Limit", path: "/caffeine" },
    { name: "Hair Analysis", path: "/hairhealth" },
    { name: "Hormone Sleep", path: "/hormonesleep" },
    { name: "Workout Plan", path: "/workout" },
  ];

  // Close dropdown when path changes
  useEffect(() => {
    setIsToolsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0B2A2D]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          
        {/* Logo Section */}
<Link href="/" className="flex items-center gap-2 shrink-0 group">
  <div className="p-2 bg-[#CC584C]/20 rounded-xl border border-[#CC584C]/40 group-hover:bg-[#CC584C] transition-all duration-500">
    <Activity size={20} className="text-white" />
  </div>
  {/* Naya Naam Yahan Update Kiya Hai */}
  <span className="text-lg font-black text-white tracking-tighter uppercase hidden sm:block">
    THE DAILY <span className="text-[#CC584C]">SCALE.</span>
  </span>
</Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-1 md:gap-3">
            
            {/* Desktop: Primary Links */}
            <div className="hidden md:flex items-center gap-1">
              {mainLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    pathname === link.path 
                    ? "bg-[#CC584C] text-white shadow-lg" 
                    : "text-teal-100/40 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Universal Tools Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  isToolsOpen ? "bg-white text-[#0B2A2D]" : "bg-white/5 text-teal-100/40 hover:text-white"
                }`}
              >
                <LayoutGrid size={14} />
                <span className="hidden xs:block">Tools</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isToolsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Glassmorphic Dropdown Menu */}
              {isToolsOpen && (
                <>
                  {/* Backdrop to close on click outside */}
                  <div className="fixed inset-0 z-[-1]" onClick={() => setIsToolsOpen(false)}></div>
                  
                  <div className="absolute top-full right-0 mt-4 w-[280px] md:w-[480px] bg-[#0B2A2D]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between mb-6 px-2">
                      <p className="text-[9px] font-black text-[#CC584C] uppercase tracking-[0.4em]">Health Archive</p>
                      <div className="h-[1px] grow ml-4 bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {otherTools.map((tool) => (
                        <Link 
                          key={tool.path}
                          href={tool.path}
                          className={`p-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all border border-transparent hover:border-white/10 hover:bg-white/5 ${
                            pathname === tool.path ? "bg-[#CC584C]/10 text-[#CC584C] border-[#CC584C]/20" : "text-teal-100/60"
                          }`}
                        >
                          {tool.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}