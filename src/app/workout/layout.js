// src/app/workout/layout.js

export const metadata = {
  title: 'Workout & Training Planner | The Daily Scale',
  description: 'Design your optimal workout routine. Track volume, intensity, and recovery for maximum muscle hypertrophy and endurance.',
  keywords: 'workout planner, hypertrophy, muscle recovery, training split, progressive overload, fitness tracker',

  alternates: {
    canonical: 'https://www.thedailyscale.online/workout', // 👈 Only this line added
  },
};

export default function WorkoutLayout({ children }) {
  return <>{children}</>;
}