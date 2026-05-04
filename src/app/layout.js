import './globals.css'
// Step 1 wala Navbar component yahan import kar rahe hain
import Navbar from './components/Navbar';
export const metadata = {
  // 1. BAS YEH EK LINE YAHAN ADD KARNI HAI
  metadataBase: new URL('https://thedailyscale.vercel.app'), 
  
  title: 'The Daily Scale | Premium Health Utilities',
  description: 'A meticulously crafted suite of health utilities including BMI, Skincare, Sleep Cycle, and more. Designed for balance, precision, and elegance.',
  openGraph: {
    title: 'The Daily Scale',
    description: 'Your personal health and wellness calculation hub.',
    url: 'https://thedailyscale.vercel.app', // Yahan bhi Vercel wala link daal diya hai
    siteName: 'The Daily Scale',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* pt-20 isliye lagaya taake content navbar ke neechay na chup jaye */}
      <body className="bg-[#FDFDFF] text-black pt-20"> 
        
        {/* Navbar component yahan sab se upar lagaya gaya hai */}
        <Navbar /> 
        
        {children}
        
      </body>
    </html>
  )
}