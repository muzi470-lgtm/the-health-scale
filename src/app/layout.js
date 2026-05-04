import './globals.css'
// Step 1 wala Navbar component yahan import kar rahe hain
import Navbar from './components/Navbar';
export const metadata = {
  // 1. BAS YEH EK LINE YAHAN ADD KARNI HAI
// metadataBase ko naye domain par set karein
metadataBase: new URL('https://thedailyscale.online'),  
  title: 'The Daily Scale | Premium Health Utilities',
  description: 'A meticulously crafted suite of health utilities including BMI, Skincare, Sleep Cycle, and more. Designed for balance, precision, and elegance.',
icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }, // Chota icon
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }, // Standard icon
      { url: '/favicon.ico' }, // Backup icon
    ],
    apple: [
      { url: '/apple-touch-icon.png' }, // iPhone/iPad ke liye[cite: 1]
    ],
  },
  
  // Android aur PWA support ke liye
  manifest: '/site.webmanifest', //[cite: 1]
  verification: {
    google: 'a2ffdc4d7afffec5',
  },
  openGraph: {
    title: 'The Daily Scale',
    description: 'Your personal health and wellness calculation hub.',
url: 'https://thedailyscale.online',
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