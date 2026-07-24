'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const MotionContext = createContext({ enabled:false, toggle:() => {} });
export function MotionProvider({children}:{children:React.ReactNode}){const [enabled,setEnabled]=useState(false);useEffect(()=>{setEnabled(!matchMedia('(prefers-reduced-motion: reduce)').matches)},[]);const value=useMemo(()=>({enabled,toggle:()=>setEnabled(v=>!v)}),[enabled]);return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>}
export function useMotionSetting(){return useContext(MotionContext)}
