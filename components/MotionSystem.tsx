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
    let tx=0,ty=0,x=0,y=0,raf=0;
    const move=(e:MouseEvent)=>{tx=e.clientX;ty=e.clientY};
    const down=()=>document.body.classList.add('cur-click');const up=()=>document.body.classList.remove('cur-click');
    const tick=()=>{x+=(tx-x)*.18;y+=(ty-y)*.18;cursor.style.left=x+'px';cursor.style.top=y+'px';raf=requestAnimationFrame(tick)};
    window.addEventListener('mousemove',move);window.addEventListener('mousedown',down);window.addEventListener('mouseup',up);raf=requestAnimationFrame(tick);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('mousemove',move);window.removeEventListener('mousedown',down);window.removeEventListener('mouseup',up)};
  },[]);

  useEffect(()=>{
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce)return;
    const parallax=[...document.querySelectorAll<HTMLElement>('[data-parallax]')];
    let raf=0;
    const update=()=>{
      const vh=window.innerHeight;
      parallax.forEach(el=>{const speed=Number(el.dataset.parallax||0);const rect=el.getBoundingClientRect();const offset=(rect.top+rect.height/2-vh/2)*speed;el.style.setProperty('--parallax-y',offset.toFixed(2)+'px')});
      document.documentElement.style.setProperty('--scroll-progress',(window.scrollY/(document.documentElement.scrollHeight-vh)||0).toFixed(4));
      raf=0;
    };
    const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update)};
    update();window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll)};
  },[pathname]);

  useEffect(()=>{
    const handleClick=(event:MouseEvent)=>{
      if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
      const target=event.target as HTMLElement|null;const anchor=target?.closest('a[href]') as HTMLAnchorElement|null;if(!anchor)return;
      const href=anchor.getAttribute('href');if(!href||href.startsWith('#')||href.startsWith('http')||href.startsWith('//')||href.startsWith('mailto:')||anchor.target==='_blank')return;
      const url=new URL(href,window.location.origin);if(url.origin!==window.location.origin||url.pathname===window.location.pathname)return;
      event.preventDefault();if(timer.current)clearTimeout(timer.current);setLeaving(true);
      timer.current=setTimeout(()=>router.push(url.pathname+url.search+url.hash),420);
    };
    document.addEventListener('click',handleClick);
    return()=>{document.removeEventListener('click',handleClick);if(timer.current)clearTimeout(timer.current)};
  },[router]);

  useEffect(()=>{setLeaving(false);window.scrollTo({top:0,behavior:'instant' as ScrollBehavior})},[pathname]);

  return <>
    <div id="cur" aria-hidden="true"/>
    <div className={`scroll-progress ${leaving?'is-active':''}`} aria-hidden="true"/>
    <div className={`page-transition ${leaving?'is-leaving':''} ${intro?'is-intro':''}`} aria-hidden="true">
      <div className="page-transition__top"><span>∞</span><small>INFINITY SOUND</small></div>
      <div className="page-transition__line"/><div className="page-transition__counter">LIVE / EXPERIENCES / SPAIN</div>
    </div>
  </>;
}
