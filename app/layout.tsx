import type {Metadata} from 'next';import './globals.css';
import MotionSystem from '@/components/MotionSystem';
export const metadata:Metadata={metadataBase:new URL('https://infinity-events-web.vercel.app'),title:{default:'Infinity Sound Entertainment | Conciertos cristianos en España',template:'%s | Infinity Sound'},description:'Infinity Sound Entertainment, empresa de Valencia dedicada a conciertos, booking y experiencias de música cristiana en España.',openGraph:{title:'Infinity Sound Entertainment',description:'Conciertos y experiencias de música cristiana en España.',siteName:'Infinity Sound Entertainment',locale:'es_ES',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><MotionSystem/>{children}</body></html>}
