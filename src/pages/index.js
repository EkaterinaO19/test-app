
import { Inter } from 'next/font/google'
//
const inter = Inter({ subsets: ['latin'] })

import Header from "@/pages/components/header/Header";
import MainLayout from "@/pages/components/main/MainLayout";

export default function Home() {
  return (
    <>
        <MainLayout/>
    </>
  )
}
