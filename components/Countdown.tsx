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
      <div className={`flex gap-4 ${className}`}>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-brand-purple">{days}</div>
          <div className="text-xs text-gray-400">Días</div>
        </div>
        <div className="text-2xl md:text-3xl font-bold text-gray-600">:</div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-brand-cyan">{hours}</div>
          <div className="text-xs text-gray-400">Horas</div>
        </div>
        <div className="text-2xl md:text-3xl font-bold text-gray-600">:</div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-brand-purple">{minutes}</div>
          <div className="text-xs text-gray-400">Min</div>
        </div>
        <div className="text-2xl md:text-3xl font-bold text-gray-600">:</div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-brand-cyan">{seconds}</div>
          <div className="text-xs text-gray-400">Seg</div>
        </div>
      </div>
    );
  };

  return <Countdown date={date} renderer={renderer} />;
}
