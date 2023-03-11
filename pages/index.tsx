import { Anybody, Inter } from "next/font/google"

// layout
import PrincipalLayout from '@/shared/components/PrincipalLayout/index'
import { useEffect } from "react"

export default function Home() {
  return (
    <PrincipalLayout title={'Home'}>
      <h2> Generico </h2>
    </PrincipalLayout>
  )
}
