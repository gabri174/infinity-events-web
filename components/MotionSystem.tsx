'use client';

import {useEffect,useRef,useState} from 'react';
import {usePathname,useRouter} from 'next/navigation';

export default function MotionSystem(){
  const pathname=usePathname();
  const router=useRouter();
  const [leaving,setLeaving]=useState(false);
  const [intro,setIntro]=useState(true);
  const timer=useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(()=>{const t=setTimeout(()=>setIntro(false),1100);return()=>clearTimeout(t)},[]);

  useEffect(()=>{
    const nodes=[...document.querySelectorAll<HTMLElement>('[data-motion]')];
    const observer=new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('is-visible')}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    nodes.forEach(node=>observer.observe(node));
    return()=>observer.disconnect();
  },[pathname]);

  useEffect(()=>{
    const cursor=document.getElementById('cur');if(!cursor)return;
    const move=(e:MouseEvent)=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'};
    const down=()=>document.body.classList.add('cur-click');const up=()=>document.body.classList.remove('cur-click');
    window.addEventListener('mousemove',move);window.addEventListener('mousedown',down);window.addEventListener('mouseup',up);
    return()=>{window.removeEventListener('mousemove',move);window.removeEventListener('mousedown',down);window.removeEventListener('mouseup',up)};
  },[]);

  useEffect(()=>{
    const handleClick=(event:MouseEvent)=>{
      if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
      const target=event.target as HTMLElement|null;const anchor=target?.closest('a[href]') as HTMLAnchorElement|null;if(!anchor)return;
      const href=anchor.getAttribute('href');if(!href||href.startsWith('#')||href.startsWith('http')||href.startsWith('mailto:')||anchor.target==='_blank')return;
      const url=new URL(href,window.location.origin);if(url.origin!==window.location.origin||url.pathname===window.location.pathname)return;
      event.preventDefault();if(timer.current)clearTimeout(timer.current);setLeaving(true);
      timer.current=setTimeout(()=>router.push(url.pathname+url.search+url.hash),420);
    };
    document.addEventListener('click',handleClick);
    return()=>{document.removeEventListener('click',handleClick);if(timer.current)clearTimeout(timer.current)};
  },[router]);

  useEffect(()=>{setLeaving(false)},[pathname]);

  return <>
    <div id="cur" aria-hidden="true"/>
    <div className={`page-transition ${leaving?'is-leaving':''} ${intro?'is-intro':''}`} aria-hidden="true">
      <div className="page-transition__top"><span>∞</span><small>INFINITY SOUND</small></div>
      <div className="page-transition__line"/><div className="page-transition__counter">LIVE / EXPERIENCES / SPAIN</div>
    </div>
  </>;
}
