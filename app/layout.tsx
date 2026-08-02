import type { Metadata } from 'next';
import { Inter, Noto_Sans_Bengali, Space_Grotesk } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets:['latin'], variable:'--font-inter', display:'swap' });
const space = Space_Grotesk({ subsets:['latin'], variable:'--font-space', display:'swap' });
const bengali = Noto_Sans_Bengali({ subsets:['bengali'], variable:'--font-bengali', display:'swap' });
const siteUrl = 'https://hero-dev-code.vercel.app/';
export const metadata: Metadata = { metadataBase:new URL(siteUrl), title:'Md Rumman Ali — Problem-Solver Tech Engineer', description:'Md Rumman Ali builds practical AI, digital-health, climate, and social-impact solutions from Bangladesh.', alternates:{canonical:siteUrl}, openGraph:{title:'Md Rumman Ali — Problem-Solver Tech Engineer',description:'Md Rumman Ali builds practical AI, digital-health, climate, and social-impact solutions from Bangladesh.',url:siteUrl,siteName:'Md Rumman Ali / Solve.',type:'website'}, twitter:{card:'summary_large_image',title:'Md Rumman Ali — Problem-Solver Tech Engineer',description:'Md Rumman Ali builds practical AI, digital-health, climate, and social-impact solutions from Bangladesh.'}};
export default function RootLayout({ children }: { children: React.ReactNode }) {return <html lang="en" className={`${inter.variable} ${space.variable} ${bengali.variable}`}><body>{children}</body></html>}
