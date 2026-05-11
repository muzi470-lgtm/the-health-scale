// src/app/water/layout.js

export const metadata = {
  title: 'Daily Water Intake Calculator | The Daily Scale',
  description: 'Calculate exactly how much water you should drink daily based on your weight and physical activity levels. Stay hydrated and energetic.',
  keywords: 'water intake calculator, daily water requirement, hydration calculator, how much water to drink',

  alternates: {
    canonical: 'https://www.thedailyscale.online/water', // 👈 Only this line added
  },
};

export default function WaterLayout({ children }) {
  return <>{children}</>;
}