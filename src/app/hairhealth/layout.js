// src/app/hair-health/layout.js

export const metadata = {
  title: 'Hair Health & Porosity Analyzer | The Daily Scale',
  description: 'Analyze your hair health, discover your exact hair type and porosity, and learn the science behind maintaining strong, thick, and healthy hair.',
  keywords: 'hair health calculator, hair porosity test, find my hair type, scalp health, low porosity hair routine, stop hair fall',

  alternates: {
    canonical: 'https://www.thedailyscale.online/hairhealth', // 👈 Only this line added
  },
};

export default function HairHealthLayout({ children }) {
  return <>{children}</>;
}