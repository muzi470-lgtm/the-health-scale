// src/app/pregnancy/layout.js

export const metadata = {
  title: 'Pregnancy Due Date Calculator | The Daily Scale',
  description: 'Accurately estimate your baby\'s due date and track your progress through each trimester with our premium pregnancy timeline calculator.',
  keywords: 'pregnancy calculator, due date calculator, edd calculator, trimester tracker, pregnancy timeline',

  alternates: {
    canonical: 'https://www.thedailyscale.online/pregnancy', // 👈 Only this line added
  },
};

export default function PregnancyLayout({ children }) {
  return <>{children}</>;
}