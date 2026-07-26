'use client';

import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

interface CountdownProps {
  date: string;
  className?: string;
}

export default function CountdownTimer({ date, className = '' }: CountdownProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className={className}>Cargando...</div>;
  }

  const renderer = ({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) => {
    return (
      <div className={`flex gap-6 md:gap-8 ${className}`}>
        <div className="text-center">
          <div className="font-display text-4xl md:text-6xl lg:text-7xl text-brand-gold leading-none">{String(days).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm text-brand-cream/60 mt-1 tracking-widest">DÍAS</div>
        </div>
        <div className="font-display text-4xl md:text-6xl lg:text-7xl text-brand-cream/30 leading-none">:</div>
        <div className="text-center">
          <div className="font-display text-4xl md:text-6xl lg:text-7xl text-brand-gold leading-none">{String(hours).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm text-brand-cream/60 mt-1 tracking-widest">HORAS</div>
        </div>
        <div className="font-display text-4xl md:text-6xl lg:text-7xl text-brand-cream/30 leading-none">:</div>
        <div className="text-center">
          <div className="font-display text-4xl md:text-6xl lg:text-7xl text-brand-gold leading-none">{String(minutes).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm text-brand-cream/60 mt-1 tracking-widest">MIN</div>
        </div>
        <div className="font-display text-4xl md:text-6xl lg:text-7xl text-brand-cream/30 leading-none">:</div>
        <div className="text-center">
          <div className="font-display text-4xl md:text-6xl lg:text-7xl text-brand-gold leading-none">{String(seconds).padStart(2, '0')}</div>
          <div className="text-xs md:text-sm text-brand-cream/60 mt-1 tracking-widest">SEG</div>
        </div>
      </div>
    );
  };

  return <Countdown date={date} renderer={renderer} />;
}
