

import { Sora } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Navbar'
import Header from '@/components/Header'
import TopLeftImg from '@/components/TopLeftImg'
import { Toaster } from 'react-hot-toast'



const sora = Sora({
  subsets: ['latin'],
  variable: "--font-sora",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Vinay Portfolio',
  description: 'Personal Portfolio of Vinay.Kandagatla',
};
export default function RootLayout({ children }) {


 return(
    <html lang="en">
      <body  >
        <Toaster/>
        <div className={`page bg-site text-white bg-cover bg-no-repeat min-h-screen  ${sora.variable} font-sora relative`} >
          <TopLeftImg />
          <Nav />
          <Header />      
          {children}
         
        </div>
        
      </body>
    </html>
  )
}
