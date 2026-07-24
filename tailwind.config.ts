import type { Config } from 'tailwindcss';
const config: Config = {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'],theme:{extend:{colors:{ink:'#060A0F',surface:'#0E151D',paper:'#F4F1E8',muted:'#9EABB7',tech:'#51E6D4',human:'#F5B55F',coral:'#FF7A70'},fontFamily:{sans:['var(--font-inter)'],display:['var(--font-space)'],bangla:['var(--font-bengali)']}}},plugins:[]};
export default config;
