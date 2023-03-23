import { Anybody, Inter } from "next/font/google"

// layout
import PrincipalLayout from '@/shared/components/PrincipalLayout/index'
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { useEffect } from "react"

import { savePUC } from "../redux/PUC/actions";
import { getPUCs } from "@/redux/PUC/thunks";

export default function Home() {
  
  const PUC = useAppSelector(state => state.PUC)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPUCs())
  },[dispatch])

  return (
    <PrincipalLayout title={'Home'}>
      <h2> Generico </h2>
      <ul>
        {PUC.map( item => {
          return<li key={item.codigo}>
            {item.codigo}
          </li>
        })}
      </ul>
    </PrincipalLayout>
  )
}
