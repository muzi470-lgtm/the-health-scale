// src/app/skincare/layout.js

export const metadata = {
  title: 'Skincare Routine Builder & Skin Type Test | The Daily Scale',
  description: 'Discover your true skin type and get a personalized, step-by-step morning and evening skincare routine. Achieve healthy, glowing skin.',
  keywords: 'skincare routine builder, skin type test, find my skin type, custom skincare, morning routine, night routine, clear skin',

  alternates: {
    canonical: 'https://www.thedailyscale.online/skincare', // 👈 Only this line added
  },
};

export default function SkincareLayout({ children }) {
  return <>{children}</>;
}