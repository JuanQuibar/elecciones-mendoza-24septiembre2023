"use client"
import './globals.css'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from "next/router"
import  Header  from '../components/Header'

const roboto = Roboto(
  { 
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'], 
  })

export default function RootLayout({ children }) {

  
  

  return (
    <html lang="es">
      <body className={roboto.className}>
        {/* <h2 className='px-3 text-3xl font-bold text-[#00549e] border-y-2 py-4 mt-4'>RESULTADOS</h2> */}
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
