// src/app/caffeine/layout.js

export const metadata = {
  title: 'Caffeine Intake & Half-Life Calculator | The Daily Scale',
  description: 'Calculate your daily caffeine limit and understand its half-life. Optimize your coffee intake for better energy, focus, and uninterrupted sleep.',
  keywords: 'caffeine calculator, daily caffeine limit, coffee tracker, caffeine half life, safe caffeine intake, pre-workout caffeine',

  alternates: {
    canonical: 'https://www.thedailyscale.online/caffeine', // 👈 Only this line added
  },
};

export default function CaffeineLayout({ children }) {
  return <>{children}</>;
}